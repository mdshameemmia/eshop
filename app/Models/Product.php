<?php

namespace App\Models;

use App\Models\Category;
use App\Models\Attribute;
use App\Models\ProductAttribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;

    protected $table ='products';
    protected $guarded = [];

    static public $indexColumnKeys = [
        'id'                    => 'ID',
        'name'                  => 'Name',
        'img'                   => 'Image',
        'description'           => 'Description',
        'price'                 => 'Price',
        'stock'                 => 'Stock',
        'category_id'           => 'Category',
        'sku'                   => 'SKU',
        'is_new'                => 'Is New',
        'is_featured'           => 'Is Feature',
        'gender'                => 'Gender',
        'is_kids'               => 'Is Kids',
        'action'                => 'Action'
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_products');
    }

    public function attributes()
    {
        return $this->belongsToMany(Attribute::class,'attribute_products')
                    ->withPivot('attribute_option_id');
    }
 
}
