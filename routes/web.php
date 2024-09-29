<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AttributeController;
use App\Http\Controllers\AttributeOptionController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\DiscountController;

Route::get('/', [HomeController::class,'index']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    // sliders 
    Route::resource('sliders',SliderController::class);
    Route::post('/sliders/{id}/update',[SliderController::class,'update']);

    Route::resource('categories',CategoryController::class);
    Route::resource('attributes',AttributeController::class);
    Route::resource('attribute-options',AttributeOptionController::class);
    Route::resource('orders',OrderController::class);
    Route::resource('contact-us',ContactUsController::class);
    Route::resource('discounts',DiscountController::class);


});

require __DIR__.'/auth.php';
