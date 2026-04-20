<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Resume;

class DashboardController extends Controller
{
    public function index(){
        $user = auth()->user();

        $latestResume = $user->resumes()
            ->with('analysis')
            ->latest()
            ->first();
        
        $analysis = $latestResume?->analysis;

        return Inertia::render('dashboard', [
            'stats' => [
                'resumeScore' => $latestResume?->analysis?->score,
                'resumeCount' => $user->resumes()->count(),
            ],
            'analysis' => $analysis,
            'hasResume' => (bool) $latestResume,
        
        ]);

    }
}
