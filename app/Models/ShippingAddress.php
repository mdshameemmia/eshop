<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ShippingAddress extends Model
{
    use HasFactory;

    protected $table = 'shipping_addresses';
    protected $guarded = [];

    static public $indexColumnKeys = [
        'id'                    => 'ID',
        'address'               => 'Address',
        'mobile'                => 'Mobile',
        'user_name'             => 'Name',
        'upazilla'              => 'Thana',
        'district'              => 'District',
        'action'                => 'Action'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
