<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ResultController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        $latestResume = $user->resumes()
            ->with('analysis')
            ->latest()
            ->first();

        return Inertia::render('result-page', [
            'analysis' => $latestResume?->analysis,
            'hasResume' => (bool) $latestResume,
        ]);
    }
}
