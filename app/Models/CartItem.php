<?php

namespace App\Models;

use App\Models\Cart;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CartItem extends Model
{
    use HasFactory;

    
    protected $table ='cart_items';
    protected $guarded = [];

    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }

}
