<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;
use App\Http\Controllers\API\ResumeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HistoryController;
use App\Http\Controllers\ResultController;
use Inertia\Inertia;


Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');
Route::redirect('/sign-in', '/login')->name('sign-in');


// Pages
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::inertia('upload-resume', 'resume-upload')->name('upload-resume');
    Route::get('history', [HistoryController::class, 'index'])->name('history');
    Route::get('result', [ResultController::class, 'index'])->name('result');
});


Route::middleware(['auth', 'verified'])->group(function () {
   Route::post('/resumes', [ResumeController::class, 'upload'])->name('resumes.upload')
    ->middleware('throttle:10,1');

});

require __DIR__.'/settings.php';
