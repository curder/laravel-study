# EloquentORM关联关系之多对多

数据表之间往往不是孤立的，而是纵横交叉、相互关联的，比如一个用户对应多个角色，一个角色拥有多个用户等类似的多对多关联。 

## 软件版本

* Laravel Version 5.4.19

* PHP Version 7.0.8

## 关键字和表

* `hasOne()`

* `hasMany()`

* `belongsTo()`

*  `hasManyThrough()`

* `roles` 、`role_user` 和 `users` 表

一种常见的关联关系是多对多，即表A的某条记录通过中间表 C 与表 B 的多条记录关联，反之亦然。比如一个用户有多种角色，反之一个角色对应多个用户。
 　　比如用户与角色组之间的关系，我们建立一个中间表 `role_user`，这个表关联用户表 `users` **(使用系统自带的users表)** 和 `roles` 表，如下

## 生成迁移文件和模型

```
php artisan make:migration create_posts_table --create=posts

php artisan make:migration create_countries_table --create=countries

php artisan make:model Post
php artisan make:model Country
```

### 编辑迁移文件



### 运行 php artisan 命令保存修改到数据库



## 定义关联关系和修改模型的 fillable 属性


## 使用 tinker 填充数据




## 关联操作










