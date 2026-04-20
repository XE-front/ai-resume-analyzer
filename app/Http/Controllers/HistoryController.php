<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HistoryController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $resumes = $user->resumes()
            ->with('analysis')
            ->latest()
            ->get();

        $scores = $resumes
            ->pluck('analysis')
            ->filter()
            ->pluck('score')
            ->filter(fn ($score) => $score !== null);

        $latestScore = $scores->first();
        $previousScore = $scores->skip(1)->first();
        $scoreImprovement = $latestScore !== null && $previousScore !== null
            ? $latestScore - $previousScore
            : null;

        $latestResume = $resumes->first();
        $chartPoints = $resumes
            ->reverse()
            ->filter(fn ($resume) => $resume->analysis?->score !== null)
            ->take(8)
            ->map(fn ($resume) => [
                'label' => $resume->created_at?->format('M d'),
                'score' => $resume->analysis?->score,
            ])
            ->values();

        return Inertia::render('history-page', [
            'stats' => [
                'totalResumes' => $resumes->count(),
                'bestScore' => $scores->max(),
                'scoreImprovement' => $scoreImprovement,
                'lastUploadAt' => $latestResume?->created_at?->format('F j, Y'),
            ],
            'resumes' => $resumes->map(fn ($resume) => [
                'id' => $resume->id,
                'name' => $resume->file_name ?? basename($resume->file_path ?? 'Resume'),
                'uploadedAt' => $resume->created_at?->format('F j, Y'),
                'score' => $resume->analysis?->score,
            ]),
            'chartPoints' => $chartPoints,
        ]);
    }
}