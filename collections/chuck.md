# chuck方法

将集合拆分多个指定大小的小集合。

```
$collection = collect([1, 2, 3, 4, 5, 6, 7]);
$chunks = $collection->chunk(4);
$chunks->toArray(); // [[1, 2, 3, 4], [5, 6, 7]]
```

这个方法比较适用在使用网格系统时的视图中，如 Bootstrap。

想象一下有一个 Eloquent 模型的集合要在网格中显示：

```
@foreach ($products->chunk(3) as $chunk)
    <div class="row">
        @foreach ($chunk as $product)
            <div class="col-xs-4">{{ $product->name }}</div>
        @endforeach
    </div>
@endforeach
```