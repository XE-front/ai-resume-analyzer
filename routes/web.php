<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;


Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');
Route::redirect('/sign-in', '/login')->name('sign-in');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('upload-resume', 'resume-upload')->name('upload-resume');
});

require __DIR__.'/settings.php';
