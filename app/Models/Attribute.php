<?php

namespace App\Models;

use App\Models\AttributeOption;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attribute extends Model
{
    use HasFactory;

    protected $table ='attributes';
    protected $guarded = [];

    static public $indexColumnKeys = [
        'id'                    => 'ID',
        'name'                  => 'Name',
        'action'                => 'Action'
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class,'attribute_products')
                    ->withPivot('attribute_option_id');
    }

    public function attributeOptions()
    {
        return $this->hasMany(AttributeOption::class);
    }

}
