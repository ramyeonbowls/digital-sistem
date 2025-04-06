<?php

use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/', function () {
    return view('layouts.landing');
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
