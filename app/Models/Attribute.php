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

    public function attributeOptions()
    {
        return $this->hasMany(AttributeOption::class);
    }

}
