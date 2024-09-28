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
        Schema::create('products', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name', 255)->nullable(); // Product name
            $table->string('img', 255)->nullable(); // Product image
            $table->text('description')->nullable(); // Detailed product description (nullable)
            $table->decimal('price', 10, 2)->nullable(); // Product price (nullable)
            $table->integer('stock')->nullable(); // Available stock quantity (nullable)
            $table->unsignedInteger('category_id')->nullable(); // Foreign key to categories (nullable)
            $table->unsignedInteger('vendor_id')->nullable(); // Foreign key to users (nullable)
            $table->string('sku', 100)->nullable(); // Stock Keeping Unit identifier (nullable)
            $table->timestamps(); // Creates created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
