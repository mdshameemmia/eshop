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
        Schema::create('sales', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->unsignedBigInteger('product_id')->nullable(); // Foreign key to products table
            $table->integer('quantity')->nullable(); // Number of units sold in this transaction
            $table->timestamp('sale_date')->nullable(); // Date and time when the sale occurred
            $table->unsignedBigInteger('user_id')->nullable(); // Foreign key to users table (nullable)
            $table->timestamps(); // Creates created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sales');
    }
};
