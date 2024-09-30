<?php

namespace App\Models;

use App\Models\CartItem;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Cart extends Model
{
    use HasFactory;

    protected $table ='carts';
    protected $guarded = [];

    public function cartItems()
    {
        return $this->hasMany(CartItem::class);
    }
}
