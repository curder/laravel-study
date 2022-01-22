# 远层一对一

"远层一对一"关系定义了与另一个模型的一对一关系。但是，这种关系表明声明模型可以通过第三个模型与另一个模型的一个实例匹配。

在车辆修理店应用中，每个 `Mechanic` 模型可以与一个 `Car` 模型相关联，并且每个 `Car` 模型可以与一个 `Owner` 模型相关联。 虽然机械师 `Mechanic` 和所有者 `Owner` 在数据库中没有直接关系，但机械师 `Mechanic` 可以通过 `Car` 模型访问所有者 `Owner` 。

下面是对应的表结构：

```
mechanics
    id - integer
    name - string
    ...

cars
    id - integer
    model - string
    mechanic_id - integer
    ...

owners
    id - integer
    name - string
    car_id - integer
    ...
```

## 软件版本

* Laravel 版本 8.80.0

* PHP 版本 7.4.26

## 关键字和数据表

* `hasOneThrough()` 

* `mechanics`、`cars` 和 `owners` 表

数据操作之前请先配置好，数据库的一些连接信息。例如下面使用 `sqlite` 数据库，修改项目根目录下的 `.env` 文件内容。

```dotenv
DB_CONNECTION=sqlite
```

`histories` 数据表不包含 `mechanic_id` 列，`hasOneThrough` 关联仍然可以为用户信息。

## 生成文件

```bash
touch database/database.sqlite # 生成 sqlite 文件

php artisan make:model Mechanic -msf # 生成模型、迁移、生成等文件
php artisan make:model Car -mfs # 生成模型、迁移、生成等文件
php artisan make:model Owner -mfs # 生成模型、迁移、生成等文件
```

### 编辑迁移文件

文件 `<project>/database/migrate/*_create_mechanics_table.php` 内容如下

```php
Schema::create('mechanics', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->timestamps();
});
```

文件 `<project>/database/migrate/*_create_cars_table.php` 内容如下

```php
Schema::create('cars', function (Blueprint $table) {
    $table->id();
    $table->string('model');
    $table->unsignedBigInteger('mechanic_id');
    $table->timestamps();
    
    $table->foreign('mechanic_id')->references('id')->on('mechanics')
      ->onUpdate('cascade')->onDelete('cascade');
});
```

文件 `<project>/database/migrate/*_create_owners_table.php` 内容如下

```php
Schema::create('owners', function (Blueprint $table) {
    $table->id();
    $table->unsignedBigInteger('car_id');
    $table->string('name');
    $table->timestamps();

    $table->foreign('car_id')->references('id')->on('cars')
          ->onUpdate('cascade')->onDelete('cascade');
});
```

### 编辑填充文件

#### 修改 `databases/factories/MechanicFactory.php`，新增关联数据。

```php
<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class MechanicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
        ];
    }
}
```

#### 修改 `databases/factories/CarFactory.php`，新增关联数据。

```php
<?php

namespace Database\Factories;

use App\Models\Mechanic;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'model' => $this->faker->word(),
            'mechanic_id' => fn () => Mechanic::factory()->create(),
        ];
    }
}
```

#### 修改 `databases/factories/OwnerFactory.php`，新增关联数据。

```php
<?php

namespace Database\Factories;

use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;

class OwnerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'car_id' => fn () => Car::factory()->create(),
            'name' => $this->faker->word(),
        ];
    }
}
```

### 执行数据库迁移和数据填充

```bash
php artisan migrate:refresh --seeder=OwnerSeeder
```

> 执行完上面的命令后，在数据库表 `mechanics`、`cars` 和 `owners` 表中分别生成一条数据。

## 修改模型

并定义可填充的数据，即 `$fillable` 数组的值。

- `Mechanic` 模型
```php {12}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mechanic extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
}
```

- `Car` 模型
```php {12}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = ['model', 'mechanic_id'];

    public function mechanic(): BelongsTo
    {
        return $this->belongsTo(Mechanic::class);
    }
} 
```

- `Owner` 模型
```php {12,14}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    use HasFactory;

    protected $fillable = ['car_id', 'name'];
    
    protected $hidden = ['laravel_through_key'];
} 
```


## 定义Eloquent关联关系

- `Mechanic` 模型
```php {15}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class Mechanic extends Model
{
    
    // ...
    
    /**
     * Get the car's owner.
     */
    public function carOwner(): HasOneThrough
    {
        return $this->hasOneThrough(
            Owner::class,
            Car::class,
            'mechanic_id', // Foreign key on the cars table...
            'car_id', // Foreign key on cars table...
            'id', // Local key on mechanics table...
            'id' // Local key on owners table...
            );
    }
}
```

- `Car` 模型
```php {16}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property BelongsTo mechanic
 */
class Car extends Model
{
    //
    
    public function mechanic(): BelongsTo
    {
        return $this->belongsTo(Mechanic::class);
    }
}
 
```

- `Owner` 模型

```php {12,14}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Owner extends Model
{
    //
    
    protected $hidden = ['laravel_through_key'];
    
    public function car(): BelongsTo
    {
        return $this->belongsTo(Car::class);
    }
} 
```

## 关联操作

### 查询数据
 
- 查询机械师 `Mechanic` 模型所关联的所属者

```php
use App\Models\Mechanic;

// 数据准备
Artisan::call('migrate:refresh --seeder=OwnerSeeder');

$mechanic = Mechanic::first();
$mechanic->carOwner;
```

### 删除数据

- 删除机械师 `Mechanic` 模型所属关联的所属者数据

```php
use App\Models\Mechanic;

// 数据准备
Artisan::call('migrate:refresh --seeder=OwnerSeeder');

$mechanic = Mechanic::first();
$mechanic->carOwner->delete(); // owners 表记录被删除
```
