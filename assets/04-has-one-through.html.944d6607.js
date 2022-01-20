import{e as n}from"./app.3ee12f16.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=n(`<h1 id="\u8FDC\u5C42\u4E00\u5BF9\u4E00" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u5C42\u4E00\u5BF9\u4E00" aria-hidden="true">#</a> \u8FDC\u5C42\u4E00\u5BF9\u4E00</h1><p>\u9884\u6848\u5C42\u4E00\u5BF9\u4E00\u5173\u8054\u901A\u8FC7\u5355\u4E00\u4E2D\u95F4\u5173\u7CFB\u94FE\u63A5\u6A21\u578B\u3002</p><p>\u4F8B\u5982\uFF0C\u5982\u679C\u6BCF\u4E2A\u4F9B\u5E94\u5546\u90FD\u6709\u4E00\u4E2A\u7528\u6237\uFF0C\u540C\u65F6\u6BCF\u4E2A\u7528\u6237\u90FD\u4E0E\u4E00\u4E2A\u7528\u6237\u5386\u53F2\u8BB0\u5F55\u76F8\u5173\u8054\uFF0C\u8FD9\u6837\uFF0C\u4F9B\u5E94\u5546\u6A21\u578B\u5C31\u53EF\u4EE5\u901A\u8FC7\u7528\u6237\u6765\u8BBF\u95EE\u7528\u6237\u7684\u5386\u53F2\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u770B\u5B9A\u4E49\u8FD9\u4E2A\u5173\u8054\u5173\u7CFB\u6240\u9700\u7684\u6570\u636E\u8868\u7ED3\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>users
    id - integer
    supplier_id - integer

suppliers
    id - integer

history
    id - integer
    user_id - integer
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>history</code> \u6570\u636E\u8868\u4E0D\u5305\u542B <code>supplier_id</code> \u5217\uFF0C<code>hasOneThrough</code> \u5173\u8054\u4ECD\u7136\u53EF\u4EE5\u4E3A\u4F9B\u5E94\u5546\u63D0\u4F9B\u5BF9\u7528\u6237\u5386\u53F2\u7684\u8BBF\u95EE\u3002</p><p>\u73B0\u5728\uFF0C\u5DF2\u7ECF\u77E5\u9053\u5173\u8054\u5173\u7CFB\u5BF9\u5E94\u7684\u6570\u636E\u8868\u7ED3\u6784\uFF0C\u63A5\u4E0B\u6765\u5728 <code>Supplier</code> \u6A21\u578B\u4E0A\u5B9A\u4E49\u8FD9\u4E2A\u5173\u8054</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php

namespace App;

use Illuminate\\Database\\Eloquent\\Model;

class Supplier extends Model
{
    /**
     * Get the user&#39;s history.
     */
    public function userHistory()
    {
        return $this-&gt;hasOneThrough(
            &#39;App\\History&#39;,
            &#39;App\\User&#39;,
            &#39;supplier_id&#39;, // Foreign key on users table...
            &#39;user_id&#39;, // Foreign key on history table...
            &#39;id&#39;, // Local key on suppliers table...
            &#39;id&#39; // Local key on users table...
            );
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,7);function r(p,l){return a}var c=s(e,[["render",r]]);export{c as default};
