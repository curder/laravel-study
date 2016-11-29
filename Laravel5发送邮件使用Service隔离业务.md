## Laravel5发送邮件使用Service隔离业务

1. 将外部行为注入到 service。
2. 在 service 使用外部行为。
3. 将 service 注入到 controller。

### 编写前的准备
主要有两个配置文件:
`config/mail.php` `.env` ，其中 **.env** 覆盖 `mail.php` 里的值，因此配置 `.env` 里的内容就可以了：

~~~
MAIL_DRIVER=smtp
MAIL_HOST=smtp.qiye.163.com
MAIL_PORT=25
MAIL_USERNAME=账号
MAIL_PASSWORD=密码
MAIL_ENCRYPTION=null
~~~

照着上面这样配置。


### 编辑文件 **app/Services/EmailService.php**
　　在 Laravel5 项目根目录下新建文件夹 `Services` ，我们的 `EmailService.php` 就放在这个文件夹下。
```php
namespace App\Services;

use Illuminate\Mail\Mailer;
use Illuminate\Mail\Message;

class EmailService
{
    /** @var Mailer */
    private $mail;

    /**
     * EmailService constructor.
     * @param Mailer $mail
     */
    public function __construct(Mailer $mail)
    {
        $this->mail = $mail;
    }

    /**
     * 发送Email
     * @param array $request
     */
    public function send(array $request)
    {
        $this->mail->queue('email.index', $request, function (Message $message) {
            $message->sender(env('MAIL_USERNAME'));
            $message->subject(env('MAIL_SUBJECT'));
            $message->to(env('MAIL_TO_ADDR'));
        });
    }
}
```
> 1. 将 `Mailer` 类注入到 `EmailService` 。
2. 将发送  `Email` 的业务逻辑写在 `send()` 。不是使用 `Mail facade` ，而是使用注入的 `$this->mail` 。

### 编辑文件 **app/Http/Controllers/UserController.php**
```php
namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Http\Request;
use MyBlog\Services\EmailService;

class UserController extends Controller
{
    /** @var EmailService */
    protected $emailService;

    /**
     * UserController constructor.
     * @param EmailService $emailService
     */
    public function __construct(EmailService $emailService)
    {
        $this->emailService = $emailService;
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->emailService->send($request->all());
    }
}
```
















