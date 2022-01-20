# 远层一对一

预案层一对一关联通过单一中间关系链接模型。

例如，如果每个供应商都有一个用户，同时每个用户都与一个用户历史记录相关联，这样，供应商模型就可以通过用户来访问用户的历史。下面我们来看看定义这个关联关系所需的数据表结构：

```
users
    id - integer
    supplier_id - integer

suppliers
    id - integer

history
    id - integer
    user_id - integer
```

`history` 数据表不包含 `supplier_id` 列，`hasOneThrough` 关联仍然可以为供应商提供对用户历史的访问。

现在，已经知道关联关系对应的数据表结构，接下来在 `Supplier` 模型上定义这个关联

```
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    /**
     * Get the user's history.
     */
    public function userHistory()
    {
        return $this->hasOneThrough(
            'App\History',
            'App\User',
            'supplier_id', // Foreign key on users table...
            'user_id', // Foreign key on history table...
            'id', // Local key on suppliers table...
            'id' // Local key on users table...
            );
    }
}
```
