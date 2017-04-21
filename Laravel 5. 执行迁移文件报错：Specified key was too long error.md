## Laravel 5.* 执行迁移文件报错：Specified key was too long error

命令行执行迁移文件时，报错 `Specified key was too long`，如果我们仔细检查错误会发现是唯一索引

```
[Illuminate\Database\QueryException]
SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long;
max key length is 767 bytes (SQL: alter table `users` add unique `users_email_uniq
ue`(`email`))



[PDOException]
SQLSTATE[42000]: Syntax error or access violation: 1071 Specified key was too long;
max key length is 767 bytes
```