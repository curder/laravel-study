# Testing 测试

## 页面响应 Http response

### 响应状态 Status

测试页面响应是最简单的测试之一，尽管如此，它仍然非常有用。

它确保页面响应正确的 HTTP 状态代码，主要是 200 响应。

```php
it('gives back a successful response for index page', function () {
    $this->get('/')->assertOk();
});
```
这是一个简单的测试，但了解您的主页不会抛出错误至关重要。

可以在[官网](https://laravel.com/docs/master/http-tests#response-assertions)了解更多有关测试页面响应的信息。

### 响应内容 Body

在测试响应时，可能希望检查响应文本是否包含特定的文本。

```php
it('lists products', function () {
    // Arrange
    $firstProduct = Product::factory()->create();
    $secondProduct = Product::factory()->create();

    // Act & Assert
    $this->get('/some-page')
        ->assertOk()
        ->assertSeeTextInOrder([
            $firstProduct->title,
            $secondProduct->title,
        ]);
});
```

在这里，确保在页面上看到我们的产品名，如果从数据库加载产品并确保显示它们，这非常有用。

在这里你也可以更具体的添加对限定条件进行测试，比如当你只想展示 `released` 产品时。

::: code-group
```php [test]
it('lists released products', function () {
    // Arrange
    $releasedProduct = Product::factory()
        ->released() // [!code ++]
        ->create();
        
    $draftProduct = Product::factory()->create();

    // Act & Assert
    $this->get('/')
        ->assertOk()
        ->assertSeeText($releasedProduct->title)
        ->assertDontSeeText($draftProduct->title);
});
```

```php [model]
// App\Models\Course.php
public function scopeReleased($query) {
    return $query->where('released_at', '>=', now());
}
```
:::

当测试测试未显示的内容，这很有帮助，但当页面上只有静态文本，则此测试不会有太大帮助。

可以在[官网](https://laravel.com/docs/master/http-tests#response-assertions)了解更多有关测试页面响应的信息。

### 响应视图 View

除了测试响应状态和文本之外，还可以测试返回的视图。

```php
it('returns correct view', function() {
    // Act & Assert
    $this->get('/')
        ->assertOk()
        ->assertViewIs('index'); // [!code ++]
});
```

可以更进一步并测试传递到视图的数据。

::: code-group

```php [assertViewHas 方法]
it('returns correct view', function() {
    // Act & Assert
    $this->get('/')
        ->assertOk()
        ->assertViewIs('index')
        ->assertViewHas('products'); // [!code ++]
});
```

```php [viewData 方法]
it('has the correct value', function() {
    $response = $this->get('/some-route');
    expect($response->viewData('name'))->toEqual('John Doe');
});

it('contains a given record', function() {
    $response = $this->get('/some-route');
    expect($response->viewData('user'))->toContain($userA);
});    

it('returns the correct amount of records', function() {
    $response = $this->get('/some-route');
    expect($response->viewData('users'))->toHaveCount(10);
});
```
:::

可以在[官网](https://laravel.com/docs/master/http-tests#response-assertions)了解更多有关测试页面响应的信息。

### 响应 Json

<!-- markdownlint-disable MD013 -->
通常希望从 API 返回 JSON 数据。可以在此处使用 Laravel 的 JSON 帮助器，例如[`assertJson`](https://laravel.com/docs/master/http-tests#assert-json) 、[`assertJsonCount`](https://laravel.com/docs/master/http-tests#assert-json-count)、[`assertExactJsonStructure`](https://github.com/laravel/framework/blob/516bf8d73d678eefce7a7ca3efea6904b83e0036/src/Illuminate/Testing/TestResponse.php#L857) 和 [`assertJsonStructure`](https://laravel.com/docs/master/http-tests#assert-json-structure) 等方法。
<!-- markdownlint-enable MD013 -->

```php
use function Pest\Laravel\postJson;

it('returns all products as JSON', function () {
    // Arrange
    $product = Product::factory()->create();
    $anotherProduct = Product::factory()->create();

    // Act & Assert
    postJson('api/products')
        ->assertOk()
        ->assertJsonCount(2)
        ->assertJsonStructure([
            'title', 'description',
        ])
        ->assertExactJsonStructure([
            'title', 'description',
        ])
        ->assertJson([
            [
                'title' => $product->title,
                'description' => $product->description,
            ],
            [
                'title' => $anotherProduct->title,
                'description' => $anotherProduct->description,
            ],
        ]);
});
```

- `assertJsonCount()` 第二个参数支持传入指定键，比如 `->assertJsonCount(10, 'data')`
- `assertJsonStructure()` 支持使用 `*` 对数组进行匹配，比如：`assertJsonStructure(['data' => ['*' => ['title', 'description']]])`
- `assertExactJsonStructure()`

    ::: details `assertExactJsonStructure()` 示例
    ```text
    /*
    Given the following response:
    {
        "data": {
            "id": 1,
            "firstname": "Taylor",
            "lastname": "Otwell"
        }
    }
    */
     
    // This fails
    $response->assertExactJsonStructure([
        'data' => [
            'firstname',
            'lastname',
        ],
    ]);
     
    // This succeeds
    $response->assertExactJsonStructure([
        'data' => [
            'id',
            'firstname',
            'lastname',
        ],
    ]);
    ```
    :::

可以在[官网](https://laravel.com/docs/master/http-tests#response-assertions)了解更多有关测试页面响应的信息。

## 数据库 Database

一般情况会将数据存储在数据库中，因此希望确保数据存储正确。

这就是 Laravel 可以通过一些断言助手来提供帮助。

::: code-group
```php [assertDatabaseCount/Has]
// 该示例确保 post 请求成功并将数据正确的存储在数据库中。
it('stores a product', function () {
    // Act
    $this->actingAs(User::factory()->create())
        ->post('product', [
        'title' => 'Product name',
        'description' => 'Product description',
    ])->assertSuccessful();

    // Assert
    $this->assertDatabaseCount(Product::class, 1);
    $this->assertDatabaseHas(Product::class, [
        'title' => 'Product name',
        'description' => 'Product description',
    ]);
});
```

```php [assertDatabaseMissing/ModelMissing]
it('allowed user can delete task', function() {
    $task = Task::factory()->for($this->project)->create();

     $this->deleteJson($task->path())
          ->assertNoContent();

     // Instead of assertDatabaseMissing to check if the model missing from the database
     $this->assertDatabaseMissing('tasks', ['id' => $task->id]);

     // use directly assertModelMissing
     $this->assertModelMissing($task);
});
```
:::

可以在[官网](https://laravel.com/docs/master/database-testing#available-assertions)了解有关测试数据库的更多信息。

## 资源 Resources

::: code-group

```php [资源测试类]
// tests/Feature/Http/Resources/UsersResourceTest.php
<?php

use App\Http\Resources\UsersResource;
use App\Models\User;

it('can returns correct data', function () {
    $user = User::factory()->create();
    $resource = UsersResource::make($user)->jsonSerialize();

    expect($resource)
        ->toHaveKeys(['name', 'email', 'created_at'])
        ->toMatchArray([
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at->toDateTimeString(),
        ]);
});
```

```php [资源类]
// app/Http/Resources/UsersResource.php
<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @property-read User $resource
 */
class UsersResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->resource->name,
            'email' => $this->resource->email,
            'created_at' => $this->resource->created_at->toDateTimeString(),
        ];
    }
}
```
:::

## 请求 Requests

有时候需要单独测试自定义请求规则，可以直接对自定义请求类进行测试。

::: code-group

```php [测试用例]
<?php

// tests\Feature\Http\Requests\SiteStoreRequestTest

use App\Rules\ValidProtocol;
use App\Http\Requests\SiteStoreRequest;

it('has correct rules for site.store route', function () {
    $request = new SiteStoreRequest();

    expect($request->rules())->toEqual([
        'name' => ['required', 'string'],
        'url' => ['required', 'string', new ValidProtocol],
    ]);
});

it('will return true for authorizes method forever', function () {
    $request = new SiteStoreRequest();

    expect($request->authorize())->toBeTrue();
});
```

```php [自定义请求验证类 SiteStoreRequest]
<?php
// app/Http/Requests/SiteStoreRequest.php

namespace App\Http\Requests;

use App\Rules\ValidProtocol;
use Illuminate\Foundation\Http\FormRequest;

class SiteStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string'],
            'url' => ['required', 'string', new ValidProtocol],
        ];
    }
}
```

```php [自定义验证规则 ValidProtocol]
<?php
// app/Rules/ValidProtocol.php

namespace App\Rules;

use Closure;
use Illuminate\Support\Str;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Translation\PotentiallyTranslatedString;

class ValidProtocol implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  Closure(string): PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! Str::startsWith($value, ['http://', 'https://'])) {
            $fail('URL 必须包含协议，例如：http:// 或 https://');
        }
    }
}
```
:::

## 验证 Validation

### Http请求

验证是许多应用程序的关键部分。在处理请求时候需要确保只能提交满足规则的数据。

默认情况下，Laravel 会将验证错误发送回用户，可以使用 [`assertInvalid`](https://laravel.com/docs/master/http-tests#assert-invalid) 方法进行检查。

::: code-group
```php [normal]
it('requires the title', function () {
    // Act
    $this->actingAs(User::factory()->create())
        ->post('product', [
            'description' => 'Product description',
        ])->assertInvalid(['title' => 'required']);
});

it('requires the description', function () {
    // Act
    $this->actingAs(User::factory()->create())
        ->post('product', [
            'title' => 'Product name',
        ])->assertInvalid(['description' => 'required']);
});
```

```php [dataset]
it('requires title and description tested with a dataset', function($data, $error) {
    // Act
    $this->actingAs(User::factory()->create())
        ->post('product', $data)->assertInvalid($error);
})->with([
    'title required' => [['description' => 'text'], ['title' => 'required']],
    'description required' => [['title' => 'Title'], ['description' => 'required']],
]);
```
:::

可以在[官网](https://laravel.com/docs/master/http-tests#response-assertions)了解更多有关测试页面响应的信息。

<!-- markdownlint-disable MD013 -->
也可以在此基础上引入 [RequestsFactories](https://github.com/worksome/request-factories) 请求工厂，更加规范的进行测试，详细内容可以[查看这里](https://downing.tech/posts/my-favourite-way-to-test-laravel-validation)。
<!-- markdownlint-enable MD013 -->

### 自定义规则

可以安装[spatie/pest-expectations](https://github.com/spatie/pest-expectations)扩展辅助验证。

::: code-group
```php [test]
it('has valid phone number for chinesePhoneNumber rule',
    fn ($value) => expect(new ChinesePhoneNumberRule())->toPassWith($value)
)->with([
    [13800138000],
    [16735219276],
    // ...
]);

it('has invalid phone number for chinesePhoneNumber rule',
    fn ($value) => expect(new ChinesePhoneNumberRule())->toFailWith($value)
)->with([
    [''],
    [16000138000],
    // ...
]);
```

```php [validation]
class ChinesePhoneNumberRule implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $regex = '/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[56789]\d{2}))\d{6}$/';

        if (preg_match($regex, $value) === 0) {
            $fail(__('validation.invalid_chinese_phone_number'));
        }
    }
}    
```

:::

或者通过使用 `Mockery::spy`模拟验证。

::: code-group

```php [tests]
<?php

use App\Rules\PhoneNumber;

it('has valid phone number for chinesePhoneNumber rule', function (string $value) {
    $mock = Mockery::spy(function (string $message): void {}); //[!code ++]

    $rule = new PhoneNumber();

    $rule->validate('', $value, $mock(...));

    $mock->shouldNotHaveBeenCalled();
})->with([
    ['13800138000'],
    ['16735219276'],
    // ...
]);

it('has invalid phone number for chinesePhoneNumber rule', function (string $value) {
    $expect = '';

    $mock = Mockery::spy(function (string $message) use (&$expect): void { // [!code ++]
        $expect = $message; // [!code ++]
    }); // [!code ++]

    $rule = new PhoneNumber();

    $rule->validate('', $value, $mock(...));

    $mock->shouldHaveBeenCalled();
    expect($expect)->toEqual('Failed');
})->with([
    [''],
    ['16000138000'],
    // ...
]);
```

```php [validation]
<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Translation\PotentiallyTranslatedString;

class ChinesePhoneNumberRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param Closure(string): PotentiallyTranslatedString $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $regex = '/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[56789]\d{2}))\d{6}$/';

        if (!preg_match($regex, $value)) {
            $fail('Failed');
        }
    }
}

```
:::

## 模型关联关系 Relationships

例如测试用户包含很多产品的一对多的关联关系。

```php
it('has products', function () {
    // Arrange
    $user = User::factory()
        ->has(Product::factory())
        ->create();

    // Act
    $products = $user->products;

    // Assert
    expect($products)
        ->toBeInstanceOf(Collection::class)
        ->first()->toBeInstanceOf(Product::class);
});
```

如果需要测试模型的 `released()` 访问的逻辑，可以如下进行相应测试：

:::code-group

```php [test]
it('only returns released courses for query scope', function () {
    // Arrange
    Course::factory()->released()->create();
    Course::factory()->create();

    // Act & Assert
    expect(Course::released()->get())
        ->toHaveCount(1)
        ->first()->id->toEqual(1);
});
```

```php [model]
// App\Models\Course.php
public function scopeReleased($query) {
    return $query->where('released_at', '>=', now());
}
```
:::

另一个模型访问器的例子：

::: code-group

```php [test]
it('capitalizes the first character of the first name', function () {
    // Arrange
    $user = User::factory()->create(['first_name' => 'christoph'])

    // Act & Assert
    expect($user->first_name)
        ->toBe('Christoph');
});
```

```php [model]
// App\Models\User.php
protected function firstName(): Attribute
{
    return Attribute::make(
        get: fn (string $value) => ucfirst($value),
    );
}
```
:::

## 邮件 Mail

### 邮件发送

在控制器代码逻辑处理时，将发送一封电子邮件。在测试中，可以通过发送请求并确保这封电子邮件已被发送。

::: code-group
```php [test]
it('sends email to podcast author', function() {
    // Arrange
    Mail::fake(); // [!code ++]
    $podcast = Podcast::factory()->create();

    // Act
    $this->post(route('publish-podcast', $podcast));

   // Assert
    Mail::assertSent(PodcastPublishedMail::class); // [!code ++]
});
```

```php [controller]
<?php

class PublishPodcastController extends Controller
{
    public function __invoke(Podcast $podcast)
    {
        // publish podcast
        // ...

        Mail::to($podcast->author)->send(new PodcastPublishedMail());
    }
}
```
:::

测试电子邮件发送时，始终在测试开始时使用 `Mail::fake()` 。这可确保不会向用户发送实际的电子邮件。

可以在[官网](https://laravel.com/docs/master/mail#testing-mailable-sending)了解更多有关测试邮件发送的信息。

### 邮件接收者

方法`assertSent`也接受回调作为第二个参数，它接收邮件的对象。它包含所有电子邮件相关内容，例如需要发送到的电子邮件：

```php
Mail::assertSent(PodcastPublishedMail::class, function(PodcastPublishedMail $mail) use ($podcast) {
    return $mail->hasTo($podcast->author->email);
});
```

### 邮件内容

测试电子邮件的内容也很有意义。当应用程序中有大量电子邮件时，这尤其有用。需要要确保内容正确。

```php
it('contains the product title', function () {
    // Arrange
    $product = Product::factory()->make();

   // Act
    $mail = new PaymentSuccessfulMail($product);

    // Assert
    expect($mail)
        ->assertHasSubject('Your payment was successful')
        ->assertSeeInHtml($product->title);
});
```

可以在[官网](https://laravel.com/docs/master/mail#testing-mailable-content)了解更多有关测试邮件内容的信息。

## 作业和队列

通过请求测试任务已经被推送。

```php
it('dispatches an import products job', function () {
    // Arrange
    Queue::fake(); // [!code ++]

    // Act
    $this->post('import');

    // Assert
    Queue::assertPushed(ImportProductsJob::class); // [!code ++]
});
```

例如访问特定的请求时，能确保任务将被推送到特定触发器的队列。

也可以单独测试任务的功能逻辑：

```php
it('imports products', function() {
   
    // Act
    (new ImportProductsJob)->handle();

    // Assert
    $this->assertDatabaseCount(Product::class, 50);
    
    // Make more assertions about the imported data
})
```

## 通知 Notifications

Notifications 通知适合向用户发送重要事件。

```php
it('sends notification about new product', function () {
    // Arrange
    Notification::fake(); // [!code ++]
    $user = User::factory()->create();
    $product = Product::factory()->create();

    // Act
    $this->artisan(InformAboutNewProductCommand::class, [
        'productId' => $product->id,
        'userId' => $user->id,
    ]);

    // Assert
    Notification::assertSentTo(
        [$user], NewProductNotification::class
    );
});
```

在上面的示例中测试了创建新产品时发送通知给用户。使用 `artisan` 方法来触发通知。

同样，通知 `Notification::fake()` 伪造它，确保没有发送实际的通知。

可以在[官网](https://laravel.com/docs/master/notifications#testing)了解更多有关测试通知的信息。

## Actions

Action 只是具有一项特定工作的简单类，它是组织代码并将逻辑与控制器分开以保持它们干净的好方法。更多详情可以看[Laravel Actions](https://github.com/lorisleiva/laravel-actions)扩展。

::: code-group

```php [通过Http请求测试]
// controller
class PurchaseController extends Controller
{
    public function __invoke(User $user, Product $product): void
    {
        app(AddProductToUserAction::class->handle($user, $product);

        // Send purchase success email, etc.
    }
}


// test
it('calls add-product-to-user action', function () {
    // Assert
    $this->mock(AddProductToUserAction::class)
        ->shouldReceive('handle')
        ->atLeast()->once();

    // Arrange
    $product = Product::factory()->create();
    $user = User::factory()->create();

    // Act
    $this->post("purchase/$user->id/$product->i");
});
```

```php [直接测试 Action 类]
// 对 Action 处理逻辑进行测试
it('adds product to user', function () {
    // Arrange
    $product = Product::factory()->create();
    $user = User::factory()->create();

    // Act
    (new AddProductToUserAction())->handle($user, $product);

    // Assert
    expect($user->products)
        ->toHaveCount(1)
        ->first()->id->toEqual($product->id);
});
```
:::

## 命令 Commands

可以通过直接触发命令来进行测试。

::: code-group
```php [normal]
it('merges two accounts', function () {
    // Arrange
    $user = User::factory()->create();
    $userToBeMerged = User::factory()->create();

    // Act
    $this->artisan(MergeAccountsCommand::class, [
        'userId' => $user->id,
        'userToBeMergedId' => $userToBeMerged->id,
    ]);

    // Assert
    $this->assertDatabaseCount(User::class, 1);
    $this->assertDatabaseHas(User::class, [
        'id' => $user->id,
        'name' => $user->name,
        'email' => $user->email,
    ]);
});
```

```php [Input / Output Expectations]
it('asks for user ids', function() {
    // Arrange
    $user = User::factory()->create();
    $userToBeMerged = User::factory()->create();

    // Act & Assert
    $this->artisan(MergeAccountsCommand::class)
        ->expectsQuestion('Please provide the user ID of the user you want to keep', $user->id)
        ->expectsQuestion('Please provide the user ID of the user you want to merge', $userToBeMerged->id)
        ->expectsOutput('Accounts merged successfully')
        ->assertSuccessful(); // 可以期待输出并确保命令成功，这意味着退出代码为 0。
});
```
:::

可以在[官网](https://laravel.com/docs/master/console-tests#main-content)了解更多有关测试命令的信息。

## 测试视图 Views

Laravel 10.x 支持使用命令创建视图。

::: code-group
```php [测试]
<?php
// tests/Feature/View/Posts/IndexTest.php

use App\Models\Post;

it('can render', function () {
    $contents = $this->view('posts.index', [
        'posts' => Post::factory()->count(5)->create(),
    ]);

    $contents->assertSeeText('Posts')
        ->assertViewHas('posts');
});
```

```php [视图文件]
// views/posts/index.blade.php

<div>
    <h2>Posts</h2>
    <ul>
        @foreach($posts as $post)
            <li>{{ $post->name }}</li>
        @endforeach
    </ul>
</div>
```
:::

## 中间件 Middlewares

这里以一个路由中间件作为示例。[源代码查看](https://github.com/curder/laravel-testing-demo/tree/middleware)

::: code-group
```php [测试]
<?php
// tests/Unit/Http/Middleware/RedirectMiddlewareTest.php

use App\Models\Redirect;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\RedirectMiddleware;
use Symfony\Component\HttpFoundation\Response;

// 测试中间件逻辑是否正确
it('the middleware is in isolation', function () {
    $response = (new RedirectMiddleware())->handle(
        createRequest('get', '/'),
        fn () => new Response()
    );
    expect($response->isRedirect(url('/new-homepage')))->toBeFalse(); // 未配置跳转时，访问页面不会跳转

    Redirect::factory()->create([
        'from' => '/',
        'to' => '/new-homepage',
    ]);

    $response = (new RedirectMiddleware())->handle(
        createRequest('get', '/'),
        fn () => new Response()
    );
    expect($response->isRedirect(url('/new-homepage')))->toBeTrue(); // 正确配置了跳转时，访问页面会跳转
});

// 测试中间件能正常工作
it('will preform the right redirects', function () {
    Route::get('my-test-router', fn () => 'ok')->middleware(RedirectMiddleware::class);
    $this->get('/my-test-router')->assertOk();

    Redirect::factory()->create([
        'from' => '/my-test-router',
        'to' => '/new-homepage',
    ]);
    $this->get('/my-test-router')->assertRedirect('/new-homepage');
});

function createRequest($method, $uri): \Illuminate\Http\Request
{
    $symfony_request = \Symfony\Component\HttpFoundation\Request::create(
        $uri,
        $method,
    );

    return \Illuminate\Http\Request::createFromBase($symfony_request);
}
```

```php {21-28} [定义]
<?php
// app\Http\Middleware\RedirectMiddleware.php

namespace App\Http\Middleware;

use App\Models\Redirect;
use Closure;
use Illuminate\Http\Request;

class RedirectMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $path = parse_url($request->fullUrl(), PHP_URL_PATH) ?? '/';

        $redirect = Redirect::query()->where('from', $path)->first();

        if (! $redirect) {
            return $next($request);
        }

        return response()->redirectTo($redirect->to);
    }
}
```

```php [模型文件]
<?php
// app/Models/Redirect.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Redirect extends Model
{
    use HasFactory;
}
```

```php [迁移文件]
<?php
// database/migrations/2022_03_23_121330_create_redirects_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRedirectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('redirects', function (Blueprint $table) {
            $table->id();
            $table->string('from');
            $table->string('to');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('redirects');
    }
}
```

```php [Factory工厂文件]
<?php
// database/factories/RedirectFactory.php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class RedirectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'from' => parse_url($this->faker->unique()->url(), PHP_URL_PATH),
            'to' => parse_url($this->faker->unique()->url(), PHP_URL_PATH),
        ];
    }
}
```
:::

## 缓存 Cache

```php
// controller
class CachedProductsApiController extends Controller
{
    public function __invoke()
    {
        return Cache::remember('products', 60, function () {
            return Product::all();
        });
    }
}

// test
it('calls cache remember method', function () {
    // Assert
    Cache::shouldReceive('remember')
        ->once()
        ->with('products', 60, Closure::class)
        ->andReturn(Product::all());

    // Act
    $this->post(action(CachedProductsApiController::class));
});
```
使用 Cache Facade 的 `shouldReceive` 方法来模拟 `remember` 方法。

还可以确保使用正确的参数调用它并返回预期的结果。

## 文件上传 File Uploads

```php
it('uploads CSV file', function () {
    // Arrange
    Storage::fake('uploads');
    $file = UploadedFile::fake()->image('statistics.csv');

    // Act
    $this->post(action(CsvUploadController::class), [
        'file' => $file,
    ])->assertOk();

    // Assert
    Storage::disk('uploads')->assertExists($file->hashName());
});
```
Storage 门面的 `fake` 方法确保不会在真实的存储磁盘上存储任何文件。

`UploadedFile` 类可以创建测试文件。

Storage 门面还提供了很多断言助手，例如 `assertExists`，以确保文件已上传。

## 错误 Exceptions

有时抛出异常是一件好事，因为我们有意停止代码的执行。

```php
it('stops if at least one account not found', function () {
    // Act
    $this->artisan(MergeAccountsCommand::class, [
        'userId' => 1,
        'userToBeMergedId' => 2,
    ]);
})->throws(ModelNotFoundException::class);
```

可以使用 [Pest](https://pestphp.com/) 的 `throws` 方法确保抛出异常。

## 单元测试 Unit Tests

单元测试非常适合测试小段代码，例如单个方法。

不涉及其他依赖项。这使得它们非常快速且易于编写。

::: code-group
```php [test]
it('creates UserData object from paddle webhook call', function () {
    // Arrange
    $payload = [
      'client_email' => 'test@test.com',
      'client_name' => 'John doe',
      'client_country' => 'AT',
    ];

    // Act
    $userData = UserData::fromWebhookPayload($payload);

    // Assert
    expect($userData)
        ->email->toBe('test@test.com')
        ->name->toBe('John doe')
        ->country->toBe('AT');
});
```

```php [dto]
final readonly class UserData
{
    public function __construct(
        public string $email,
        public string $name,
        public string $country,
    )
    {}

    public static function fromWebhookPayload(array $webhookCallData): UserData
    {
        return new self(
            $webhookCallData['client_email'],
            $webhookCallData['client_name'],
            $webhookCallData['client_country'],
        );
    }
}
```
:::

它包含一个从 Webhook 负载创建新实例的方法，在相应的测试中，也只测试这个方法返回的内容。

## Http请求

### 伪造

当在应用程序中进行 HTTP 调用，这可能是从外部 API 获取数据或将数据发送到另一个服务。

经常希望在测试中伪造这些调用，这样就不必在测试时依赖外部服务。

HTTP 上的伪造方法将确保不会进行真正的调用，并且响应始终是 200 状态码。

比如正在测试一个从外部 API 获取数据并将其保存到数据库的操作：

```php
it('imports product', function() {
    // Arrange
    Http::fake([
        'https://christoph-rumpel.com/import' => Http::response([
            'title' => 'My new product',
            'description' => 'This is a description',
        ]),
    ]);
    $user = User::factory()->create();

    // Act
    (new ImportProductAction)->handle($user);

    // Assert
    $this->assertDatabaseHas(Product::class, [
        'title' => 'My new product',
        'description' => 'This is a description',
    ]);
});
```

### 测试请求

```php
it('make the right call', function () {
    // Arrange
    Http::fake();
    $user = User::factory()->create();

    // Act
    (new ImportProductAction)->handle($user);

    // Assert
    Http::assertSent(function ($request) {
        return $request->url() === 'https://christoph-rumpel.com/import'
            && $request['accessToken'] === 'faker-token';
    });
});
```

可以在[官网](https://laravel.com/docs/master/http-client#inspecting-requests)了解更多有关测试伪造 HTTP 调用的信息。

## 模拟依赖关系 mock

当使用具有依赖关系的代码时，模拟它们会很有帮助，这将使您专注于代码的逻辑而不是依赖项。

这也意味着模拟对于任何类型的测试都很有用。

在测试中希望重点测试是否发送了正确的电子邮件。

::: code-group
```php [test]
it('sends payment successful mail', function () {
    // Arrange
    Mail::fake();

    // Expect
    $this->mock(PaymentProvider::class)
        ->shouldReceive('handle')
        ->once();

    // Act
    $this->post('payment');

    // Assert
    Mail::assertSent(PaymentSuccessfulMail::class);
});
```

```php [controller]
class PaymentController extends Controller
{
    public function __invoke(PaymentProvider $paymentProvider, Mailer $mailer)
    {
        $paymentProvider->handle();

        $mailer->to(auth()->user())->send(new PaymentSuccessfulMail);
    }
}
```
:::

## 架构测试 Architecture

[PEST](https://pestphp.com) 引入了一种称为架构测试的新型测试，这是一种测试应用程序架构并确保它遵循定义的代码规则，并且可以确保代码保持干净且可维护的好方法。

```php
test('no forgotten debug statements')
    ->expect(['dd', 'dump', 'var_dump', 'ray'])
    ->not->toBeUsed();
```

还可以定义更多规则。在[官方文档](https://pestphp.com/docs/arch-testing)中阅读有关它们的更多信息。

还可以参考 [cachethq/core](https://github.com/cachethq/core/tree/main/tests/Architecture) 仓库的测试代码风格。

## 定时任务 Schedules

断言定时任务一定会按照指定的规则执行。

::: code-group
```php [App\Console\Kernel.php]
<?php
// App\Console\Kernel

// ...
protected function schedule(Schedule $schedule)
{
    $schedule->command('check:api-token')->dailyAt('10:00'); // 检查是否需要发送apiToken到期通知
}
```

```php [Tests\Integrations\Console\KernelTest.php]
<?php

use Illuminate\Console\Scheduling\Event;
use Illuminate\Console\Scheduling\Schedule;

it('has some schedules', function (string $command, $expression) {
    $schedule = app(Schedule::class);

    /** @var Event $event */
    $event = collect($schedule->events())
        ->filter(
            fn (Event $event) => Str::containsAll($event->command, [$command]),
        )->first();

    expect($event)
        ->toBeInstanceOf(Event::class)
        ->expression->toEqual($expression);
})->with([
    'check api token command is scheduled at 10 am' => ['check:api_token', '0 10 * * *'],
]);
```
:::

其他的简单测试示例代码 [curder/laravel-console-command-test-demo](https://github.com/curder/laravel-console-command-test-demo) 。

## 相关阅读

- [Everything You Can Test In Your Laravel Application](https://christoph-rumpel.com/2023/3/everything-you-can-test-in-your-laravel-application#testing-validation)
- [Pest Driven Laravel - Laracasts Video Course](https://laracasts.com/series/pest-driven-laravel)
- [Getting Started with TDD in PHP - Video Course](https://learn.christoph-rumpel.com/products/getting-started-with-tdd-in-php)
- [How I Test Livewire Components](https://christoph-rumpel.com/2021/4/how-I-test-livewire-components)
- [cachethq/core - GitHub Repository](https://github.com/cachethq/core/tree/main/tests)
- [laravelio/laravel.io - Github Repository](https://github.com/laravelio/laravel.io/tree/main/tests)
