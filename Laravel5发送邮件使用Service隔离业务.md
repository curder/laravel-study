## Laravel5发送邮件使用Service隔离业务

1. 将外部行为注入到 service。
2. 在 service 使用外部行为。
3. 将 service 注入到 controller。

### 编辑文件 **app/Services/EmailService.php**
在Laravel项目根目录下新建文件夹`Services`,
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
     * 發送Email
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




















