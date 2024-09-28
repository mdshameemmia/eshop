<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cart_items', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->unsignedBigInteger('cart_id')->nullable(); // Foreign key to carts table
            $table->unsignedBigInteger('product_id')->nullable(); // Foreign key to products table
            $table->integer('quantity'); // Quantity in cart
            $table->timestamps(); // Creates created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_items');
    }
};
