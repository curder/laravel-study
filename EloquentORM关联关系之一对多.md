# EloquentORM关联关系之一对多

## 数据版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字

* `hasMany()`

* `belongsTo()`

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用mysql数据库，修改项目根目录下的 `.env` 文件内容。

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_name
DB_USERNAME=db_username
DB_PASSWORD=db_password
```

一对多的关联关系，表示表A对应表B的N条记录，例如一个用户可以发表多条文章。

比如一个用户对应一个社交账号，在演示该关联关系之前我们先创建一个社交账号表 `user_accounts` （**假设用户表使用系统自带的**）
