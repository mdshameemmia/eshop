<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;

    protected $table ='discounts';
    protected $guarded = [];

    static public $indexColumnKeys = [
        'id'                    => 'ID',
        'code'                  => 'Code',
        'description'           => 'Description',
        'discount_type'         => 'Discount Type',
        'code'                  => 'Code',
        'value'                 => 'Value',
        'expires_at'            => 'Expired Date',
        'action'                => 'Action'
    ];

}
