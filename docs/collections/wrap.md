# wrap 方法 

静态 wrap 方法在适用时将给定值包装在集合中

```php
Illuminate\Support\Collection::wrap(['string']);

// output
/**
=> Illuminate\Support\Collection {#1203
     all: [
       "string",
     ],
   }
 */
```

```php
Illuminate\Support\Collection::wrap('string');

// output
/**
=> Illuminate\Support\Collection {#1201
     all: [
       "string",
     ],
   }
 */
```

```php
Illuminate\Support\Collection::wrap(collect('string'));

//output
/**
=> Illuminate\Support\Collection {#1203
     all: [
       "string",
     ],
   }
 */
```
