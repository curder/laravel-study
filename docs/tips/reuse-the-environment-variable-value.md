# 重用环境变量值

当环境变量中存在重复的变量值时，可以重用环境变量值。

可以使用此语法重用它们，而不是重写这些值。

:::code-group

```text [错误 ❌]
APP_URL=https://laravel-tips.test
ADMIN_URL=https://laravel-tips.test
```

```text [正确 ✅]
APP_URL=https://laravel-tips.test
ADMIN_URL="${APP_URL}"
```
:::
