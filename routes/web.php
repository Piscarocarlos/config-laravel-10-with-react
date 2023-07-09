<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return inertia("Home");
})->name('home');


Route::get('/about', [AppController::class, 'about'])->name('about');
