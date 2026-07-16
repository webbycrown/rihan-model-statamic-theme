<?php

use App\Http\Controllers\PromoteBusinessController;
use App\Http\Controllers\PromoteBusinessPressController;
use Illuminate\Support\Facades\Route;

// Route::statamic('example', 'example-view', [
//    'title' => 'Example'
// ]);

Route::post(
    '/promote-your-business',
    [PromoteBusinessController::class, 'submit']
)->name('promote_your_business.submit');

Route::post(
    '/promote-your-business-press',
    [PromoteBusinessPressController::class, 'submit']
)->name('promote_your_business_press.submit');
