<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $table ='categories';
    protected $guarded = [];

    static public $indexColumnKeys = [
        'id'                    => 'ID',
        'name'                  => 'Name',
        'slug'                  => 'Slug',
        'description'           => 'Description',
        'action'                => 'Action'
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class, 'category_products');
    }

}
