## unwrap 方法

静态 `unwrap` 方法在适用时从给定值返回集合的基础项。


```php
Illuminate\Support\Collection::unwrap(['string']);

// output
/**
=> [
     "string",
   ]
 */
```

```php
Illuminate\Support\Collection::unwrap('string');

// output
/**
=> "string"
 */
```
