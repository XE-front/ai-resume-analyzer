<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Analysis;
use App\Services\OpenRouterService;
use App\Models\Resume;
use Illuminate\Http\Request;

class AnalysisController extends Controller
{
    public function analyze($resumeId, OpenRouterService $openRouterService)
    {
        $resume = Resume::findOrFail($resumeId);

        $result = $openRouterService->analyzeResume($resume->parsed_text);

        $analysis = Analysis::create([
            'resume_id' => $resume->id,
            'score' => 80,
            'skills' => [],
            'strengths' => [],
            'weaknesses' => [],
            'suggestions' => [],
        ]);

        return response()->json($analysis);
    }
}
