<?php

namespace App\Models;

use App\Models\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AttributeOption extends Model
{
    use HasFactory;

    protected $table ='attribute_options';
    protected $guarded = [];

    static public $indexColumnKeys = [
        'id'                    => 'ID',
        'attribute_name'        => 'Attribute Name',
        'value'                  => 'Value',
        'action'                => 'Action'
    ];


    public function attribute()
    {
        return $this->belongsTo(Attribute::class);
    }
}
