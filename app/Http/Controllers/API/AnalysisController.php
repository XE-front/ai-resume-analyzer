<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Analysis;
use App\Services\OpenAIService;
use App\Models\Resume;
use Illuminate\Http\Request;

class AnalysisController extends Controller
{
    public function analyze($resumeId, OpenAIService $ai)
    {
        $resume = Resume::findOrFail($resumeId);

        $result = $ai->analyzeResume($resume->parsed_text);

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
