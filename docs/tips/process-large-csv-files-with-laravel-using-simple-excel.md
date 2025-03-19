# 使用 Laravel simple-excel 处理大型 CSV 文件

在 Laravel 中，可以使用队列处理大型CSV文件的上传，以避免因此引起的超时或内存使用问题，尤其是当您有大量数据需要分析、报告或移动时。

## 安装 spatie/simple-excel 拓展包

```bash
composer require spatie/simple-excel
```

<!-- markdownlint-disable MD013 -->
使用 `SimpleExcelReader` 加载 CVS。默认情况下，它会返回一个 [`Illuminate\Support\LazyCollection`](https://laravel.com/docs/master/collections#lazy-collections)  将其视为处理数据的更周到的方式，而不会耗尽服务器的内存。这意味着可以一点一点地处理文件，使用程序保持轻松运行。
<!-- markdownlint-enable MD013 -->

> `$rows` 是 [`Illuminate\Support\LazyCollection`](https://laravel.com/docs/master/collections#lazy-collections) 的实例。

## 创建 Jobs

使用下面的命令创建一个任务用于导入 CSV 的操作。

```bash
php artisan make:job ImportCsv
```

任务类的大致代码逻辑如下：

```php
<?php
 
namespace App\Jobs;
 
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Spatie\SimpleExcel\SimpleExcelReader;
 
class ImportCsv implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
 
    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }
 
    /**
     * Execute the job.
     */
    public function handle(): void
    {
        SimpleExcelReader::create(storage_path('app/public/products.csv'))
            ->useDelimiter(',')
            ->useHeaders(['ID', 'title', 'description'])
            ->getRows()
            ->chunk(5000)
            ->each(
                // Here we have a chunk of 5000 products
            );
    }
}
```

1. **对 CSV 进行分块**：将把该文件分成可管理的部分，以便可以使用 `LazyCollection`。
2. **任务调度**：对于每个块，将发送一个任务。这样就可以批量处理，这在服务器上会更容易。
3. **写入数据库**：每个块将被插入到数据库中，既简单又好。

## 处理分块Job

使用下面的命令创建 `ImportProductChunk` 任务。

```bash
php artisan make:job ImportProductChunk
```

它用于批量将数据写入到数据库。

```php
<?php
 
namespace App\Jobs;
 
use App\Models\Product;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;
 
class ImportProductChunk implements ShouldBeUnique, ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
 
    public $uniqueFor = 3600;
 
    /**
     * Create a new job instance.
     */
    public function __construct(
        public $chunk
    ) {
        //
    }
 
    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->chunk->each(function (array $row) {
            Model::withoutTimestamps(fn () => Product::updateOrCreate([
                'product_id' => $row['ID'],
                'title' => $row['title'],
                'description' => $row['description'],
           ]));
        });
    }
 
    public function uniqueId(): string
    {
        return Str::uuid()->toString();
    }
}
```

创建好之后，可以在 ImportCsv 任务类中调用它。

```php
<?php
 
namespace App\Jobs;
 
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Spatie\SimpleExcel\SimpleExcelReader;
 
class ImportCsv implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
 
    /**
     * Create a new job instance.
     */
    public function __construct()
    {
        //
    }
 
    /**
     * Execute the job.
     */
    public function handle(): void
    {
        SimpleExcelReader::create(storage_path('app/public/products.csv'))
            ->useDelimiter(',')
            ->useHeaders(['ID', 'title', 'description'])
            ->getRows()
            ->chunk(5000)
            ->each(
                fn ($chunk) => ImportProductChunk::dispatch($chunk)
            );
    }
}
```
