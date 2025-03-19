# chunkWhile

> 根据给定的回调将集合分成多个较小的集合，传递给闭包的 `Collection $chunk` 变量可以用于检查集合中的前一个元素。

## 相关示例

```php
$collection = collect(str_split('AABBCCCD'));

$collection->chunkWhile(
    fn (string $value, int $key, Collection $chunk) => $value === $chunk->last()
)->toArray(); // [['A', 'A'], ['B', 'B'], ['C', 'C', 'C'], ['D']]
```

每次循环时，闭包中的 `$chunk` 变量都会填充为前面已循环的所有元素的集合。
