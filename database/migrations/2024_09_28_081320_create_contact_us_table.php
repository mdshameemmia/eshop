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
        Schema::create('contact_us', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name', 255); // Name of the person contacting
            $table->string('email', 255); // Email of the person contacting
            $table->string('subject', 255); // Subject of the message
            $table->text('message'); // The message or inquiry
            $table->timestamp('created_at')->useCurrent(); // Creation timestamp
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate(); // Update timestamp
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_us');
    }
};
