## 如何使用 Repository 模式

若将数据库逻辑都写在 Model 里，会造成 model 代码的臃肿难以维护，基于 SOLID 原则，我们应该使用 **Repository** 模式辅助 Model，将相关的数据库逻辑封装在不同的 Repository，方便后期项目的维护。

### Laravel 框架版本

Laravel 5.4.17

### 数据库逻辑

在 CURD 中，CUR 比较稳定，但 Read 的部分则变化万千，大部分的数据库逻辑都在描述 Read 部分，若将数据库逻辑写在 Controller 或 Model 都不合适，会造成 Controller 或 Model 代码臃肿，如后难以维护。

### Model

使用 Repository 模式之后，Model 仅仅当成 Eloquent Class 即可，不需要包含数据库逻辑，仅保留如下部分：

* Property： 如 `$table` `$fillable` ..

* Mutator： 包括 mutator 与 accessor

* Method： relation 类的方法，如使用 `hasMany()` 与 `belongsTo()`

> 因为 Eloquent 会根据数据库字段动态的产生 property 与 method等，若使用 [Laravel IDE Helper](https://github.com/barryvdh/laravel-ide-helper) ，会直接在Model加上 `@property` 与 `@method` 描述model的动态 proerty 与 method。 如下`app\User.php`中安装完`Laravel IDE Helper`后执行`php artisan ide-helper:models`后自动生成的内容：

```
<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * App\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string $remember_token
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @method static \Illuminate\Database\Query\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
```

### Repository

在开发时常常会在 Controller 直接调用 Model 写数据库逻辑，如下：获取数据库中用户 `age>20`的数据。

```
public function index()
{
    return User::where('age','>',20)->orderBy('age')->get();
}
```

这样写逻辑会有几个问题：

* 将数据库逻辑写在 Controller，造成 Controller 代码臃肿难以维护。

* 违反了 SOLID 的单一职责原则，数据库逻辑不应该写在 Controller 中。

* Controller 直接操作 Model，使得对 Controller 做单元测试困难。

比较好的方式是使用 Repository：

* 将 Model 依赖注入到 Repository。

* 将数据库逻辑写在 Repository。

* 将 Repository 依赖注入到 Service。


`app/Repositories/UserRepostitory.php` 中的内容：

```
<?php

namespace App\Repositories;


use App\User;

/**
 * Class UserRepository
 * @package App\Repositories
 */
class UserRepository
{
    /**
     * @var User
     */
    private $user;

    /**
     * UserRepository constructor.
     * @param $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * @param $age
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAgeLargerThan($age)
    {
        return $this->user
            ->where('age', '>', $age)
            ->orderBy('age')
            ->get();
    }

}
```

在控制器`app\Controllers\UserController.php`中使用依赖注入：

```
<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use Illuminate\Http\Request;

/**
 * Class UserController
 *
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * @var \App\Repositories\UserRepository
     */
    protected $userRepository;

    /**
     * UserController constructor.
     * @param $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return $this->userRepository->getAgeLargerThan(20);
    }
}
```

将相依的 `UserRepository` 依賴注入到 `UserController`，并从原本直接依赖 `User` Model改成依赖注入的 `UserRepository`

#### 优点
* 将数据库逻辑写在 Repository 里，解决了 Controller 代码臃肿的问题。

* 符合 SOLID 的单一职责原则：数据库逻辑写在 Repository 里，没写在 Controller 里。

* 符合 SOLID 的依赖反转原则：Controller 并非直接相依与 Repositroy，而是将 Repository 依赖注入进 Controller。

> 实际上建议 Repository 仅依赖注入进 Service，而不是直接注入在 Controller。


#### 是否该建立 Repository Interface？

理论上使用依赖注入时，应该使用 Interface ，不过 Interface 目的在于更换数据库，让代码达到开放封闭的要求，但是实际上要更改 Reposiroty 的机会也不多，除非是从 MySQL 更换到 MongoDB，此时就应该建立 Repository Interface。

不过由于我们使用了依赖注入，将来要从 Class 改成 Interface 也很方便，只要在 Constructor 的 type hint 改成 Interface 即可，维护成本很低，所以在此大可使用 Repository Class 即可，不一定得用Interface而造成 Over Design，等真正需要修改时，再重构 Interface 即可。

#### 是否该使用 Query Scope?

Laravel 4.2 就有 QueryScope，到 Laravel5.1 都还保留着，它让我们可以将逻辑代码写在 Model ，解决了维护与重复使用的问题。

如 `app/User.php` 里的代码：

```
<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * App\User
 *
 * @property int                                                                                                            $id
 * @property string                                                                                                         $name
 * @property string                                                                                                         $email
 * @property string                                                                                                         $password
 * @property string                                                                                                         $remember_token
 * @property \Carbon\Carbon                                                                                                 $created_at
 * @property \Carbon\Carbon                                                                                                 $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @method static \Illuminate\Database\Query\Builder|\App\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereEmail($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereId($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereName($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User wherePassword($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereRememberToken($value)
 * @method static \Illuminate\Database\Query\Builder|\App\User whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     *
     * @param Builder $query
     * @param integer $age
     *
     * @return Builder
     */
    public function scopeGetAgerLargerThan($query, $age)
    {
        return $query->where('age', '>', $age)
            ->orderBy('age');
    }
}
```

QueryScope 必须以 `scope`开头，第一个参数为 queryBuilder，一定要加上；第二个参数以后为自己要传入的参数。
由于回传必须是一个 queryBuilder ，因此不需要加上 `get()`

`app/Controllers/UserController.php` 中使用代码：

```
<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;
use App\User;
use Illuminate\Http\Request;

/**
 * Class UserController
 *
 * @package App\Http\Controllers
 */
class UserController extends Controller
{
    /**
     * @var \App\Repositories\UserRepository
     */
    protected $userRepository;

    /**
     * UserController constructor.
     * @param $userRepository
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function index()
    {
        return User::getAgerLargerThan(20)->get();
    }

}
```

在 Controller 中使用 QueryScope 时，不需要加上 Prefix，由于其本质是 queryBuilder，所以还要加上 `get()` 才能获得 Conllection 数据。

由于 QueryScope 是写在 Model，不是写在 Controller，所以基本上解决了 Controller 臃肿违反 SOLID 的单一职责原则的问题， Controller 也可以重复使用 QueryScope ，已经比直接将资料库逻辑写在 Controlelr 中好很多。

不过若在中大型项目中，仍然有以下问题：

* Model 已经有原来的责任，若再加上 queryScope，造成 Model 过于臃肿难以维护。

* 若数据库逻辑很多，可能拆成多个 Repository，可是确很难拆成多个 Model。

* 单元测试困难，必须面临 mock Eloquent 的问题。

### 最后

实际开发时，可以一开始 1 个 Repository 对应 1 个 Model，但是也不必太过执着于 1 个 Repository，一定要对应 1 个 Model，可将 Repository 视为逻辑上的数据库逻辑类别即可，可以横跨多个Model处理，也可以 1 个 Model 拆成多个 Repository，视情况而定。

Repository 使得数据库逻辑从 Controller 或 Model 中解放，不仅更容易维护、更容易拓展、更容易重复使用，也更容易测试。


