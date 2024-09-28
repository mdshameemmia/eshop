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
        Schema::create('discounts', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('code', 100)->unique(); // Discount code (unique)
            $table->string('description', 255); // Description of the discount
            $table->string('discount_type', 50); // Type of discount (e.g., percentage)
            $table->decimal('value', 10, 2); // Discount value
            $table->timestamp('expires_at')->nullable(); // Expiration timestamp (nullable)
            $table->timestamps(); // Creates created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('discounts');
    }
};
