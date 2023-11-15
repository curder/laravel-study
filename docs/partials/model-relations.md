# 模型关系

## 获取关联关系的最新/旧项

从 Laravel 8.42 开始，在 Eloquent 模型中，可以定义一个关系，该关系将获取另一个关系的最新（或最旧）项目。

```php
/**
 * Get the user's latest order.
 */
public function latestOrder()
{
    return $this->hasOne(Order::class)->latestOfMany();
}
 
/**
 * Get the user's oldest order.
 */
public function oldestOrder()
{
    return $this->hasOne(Order::class)->oldestOfMany();
}
```