# 使用自定义异常来编写更好、更清晰的代码

在开发逻辑中经常需要在一些处理逻辑时抛出错误的情况，比如在控制器中有如下逻辑代码：

```php
<?php

namespace App\Http\Controllers;

use App\Models\Ticket;
use App\Services\CheckoutService;
use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function __invoke(Request $request)
    {
        /** @var Ticket $ticket */
        $ticket = Ticket::query()->findOrFail($request->ticket);
        $user = $request->user();

        // 1. 当用户的积分小于票价则不允许提交
        if ($user->credits < $ticket->price) {
            abort(401, 'Not enough credits');
        }

        // 2. 检查当前票数量是否满足所提交的需求
        if (!$ticket->isAvailable($request->amount)) {
            abort(404, 'Not enough tickets');
        }

        $purchase = app(CheckoutService::class)->purchaseTicket($user, $ticket);

        return response()->json([
            'message' => 'Ticket purchased successfully.',
        ]);
    }
}
```

此时可以将上面的代码使用自定义异常来编写，如下所示：

::: code-group

```php [控制器逻辑]
<?php

namespace App\Http\Controllers;

use App\Exceptions\NotEnoughCreditsException;
use App\Exceptions\NotEnoughTicketsException;
use App\Models\Ticket;
use App\Services\CheckoutService;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Throwable;

class CheckoutController extends Controller
{
    /**
     * @throws Throwable
     */
    public function __invoke(Request $request)
    {
        /** @var Ticket $ticket */
        $ticket = Ticket::query()->findOrFail($request->ticket);
        $user = $request->user();

        try {
            $purchase = app(CheckoutService::class)->purchaseTicket($user, $ticket, $request->amount);
        } catch (NotEnoughCreditsException $exception) {
            // abort(401, $exception->message());
            throw ValidationException::withMessages([
                'credits' => 'Not enough credits',
            ])->status(401);
        } catch (NotEnoughTicketsException $exception) {
            throw $exception->validationMessage();
        }

        return response()->json([
            'message' => 'Ticket purchased successfully.',
        ]);
    }
}
```

```php [App\Services\CheckoutService.php]
<?php

namespace App\Services;

use Throwable;
use App\Models\User;
use App\Models\Ticket;
use App\Models\Purchse;
use App\Exceptions\NotEnoughCreditsException;
use App\Exceptions\NotEnoughTicketsException;

class CheckoutService
{
    /**
     * @throws NotEnoughCreditsException|NotEnoughTicketsException
     * @throws Throwable
     */
    public function purchaseTicket(User $user, Ticket $ticket, int $amount): Purchse
    {
        // 1. 当用户的积分小于票价则不允许提交
        throw_if($user->credits < $ticket->price, new NotEnoughCreditsException);

        // 2. 检查当前票数量是否满足所提交的需求
        throw_if(! $ticket->isAvailable($amount), new NotEnoughTicketsException);

        $user->credits -= $ticket->price;

        return new Purchse;
    }
}
```

```php [NotEnoughCreditsException]
<?php

namespace App\Exceptions;

use Exception;

class NotEnoughCreditsException extends Exception
{
    public function message(): string
    {
        return 'Not enough credits';
    }
}
```

```php [NotEnoughTicketsException]
<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Validation\ValidationException;

class NotEnoughTicketsException extends Exception
{
    public function validationMessage(): ValidationException
    {
        return ValidationException::withMessages([
            'ticket' => 'Not enough tickets',
        ]);
    }
}
```
:::

相关代码仓库测试逻辑在这里：[tests/Feature/CheckoutControllerTest.php](https://github.com/curder/laravel-custom-exception/blob/master/tests/Feature/CheckoutControllerTest.php)