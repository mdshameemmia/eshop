<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Slider extends Model
{
    use HasFactory;

    protected $table = 'sliders';
    protected $guarded = [];

    static public $indexColumnKeys = [
        'id'                    => 'ID',
        'slider_information'    => 'Slider Information',
        'img'                => 'Sliders',
        'status'                => 'Status',
        'action'                => 'Action'
    ];

    protected function status(): Attribute
    {
        return Attribute::make(
            get: fn (string $value) => $value == 1 ? 'Active': 'Inactive',
        );
    }

}
