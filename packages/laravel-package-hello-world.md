# 使用Laravel开发自己的Package

`Service Provider`最主要的功能就是让我们写package，本文以一个简单的 `Hello World` 的功能，介绍一下package的开发流程。

包含`route`、`controller`与`view`，然后会打包成package传到github与packagist，最后在其他的laravel项目中直接使用 `composer require vendor/package` 下载执行我们上传的package。


## Version

* Laravel 5.5
* php 7.1.12

## 建立项目

```
composer create-project laravel/laravel MyPackage --prefer-dist
```

建立一个开发package的项目。

## 建立目录

在项目根目录下串建立`packages`目录，关于该package的源代码都会放在它里面。

在`packages`目录下建立`vendor/package/src`子目录，本package会建立`curder/helloworld/src`。

![](/assets/package-helloworld-source-code-path.png)

## 设定PSR-4命名空间

由于目前Laravel预设的`root namespace`是在`app`目录下，并且无法法得知我们新加的`packages/curder/helloworld/src`目录，必须在`MyPackage`项目的`composer.json`加入对应新的`root namespace`。

```
{
    "name": "laravel/laravel",
    "description": "The Laravel Framework.",
    "keywords": ["framework", "laravel"],
    
    ...
    
   "autoload": {
        "classmap": [
            "database/seeds",
            "database/factories"
        ],
        "psr-4": {
            "App\\": "app/",
            "Curder\\HelloWord\\": "packages/curder/helloworld/src/"
        }
    },
    
    ...
}
```