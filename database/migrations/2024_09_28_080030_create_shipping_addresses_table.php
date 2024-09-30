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
        Schema::create('shipping_addresses', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->unsignedBigInteger('user_id')->nullable(); // Foreign key to users table
            $table->string('address', 255); // First line of address
            $table->string('mobile', 20); // Zip or postal code
            $table->string('upazilla', 100); // City name
            $table->string('district', 100); // State name
            $table->timestamps(); // Creates created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_addresses');
    }
};
