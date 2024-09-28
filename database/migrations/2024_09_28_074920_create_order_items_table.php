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
        Schema::create('order_items', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->unsignedBigInteger('order_id')->nullable(); // Foreign key to orders table
            $table->unsignedBigInteger('product_id')->nullable(); // Foreign key to products table
            $table->integer('quantity'); // Quantity ordered
            $table->decimal('price', 10, 2); // Price at the time of order
            $table->timestamps(); // Creates created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
