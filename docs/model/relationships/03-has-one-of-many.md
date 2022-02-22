# 许多之一 TODO

[GitHub - HasOneOfMany 许多之一](https://github.com/curder/laravel-relationships-demo/tree/has-one-of-many)

有时一个模型可能有许多相关模型，希望轻松检索关系的“最新”或“最旧”相关模型。

例如，一个 `User` 模型可能与许多 `Order` 模型相关，但想定义一种方便的方式来与用户最近下的订单进行交互。

可以使用 [hasOne](/docs/model/relationships/01-has-one.md) 关系类型结合 ofMany 方法来完成此操作：
