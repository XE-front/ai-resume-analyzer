<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\OpenRouterService;
use App\Services\ResumeParser;
use Illuminate\Http\Request;


class ResumeController extends Controller
{
    public function upload(Request $request, ResumeParser $parser, OpenRouterService $openRouterService)
    {
        $request->validate([
            'resume' => 'required|file|mimes:pdf|max:2048',
            ]);
            
        $path = $request->file('resume')->store('resumes', 'public');

        $filePath = storage_path('app/public/' . $path);
        $parsedText = $parser->parse($filePath);

        $raw = $openRouterService->analyzeResume($parsedText);

        $content = data_get($raw, 'choices.0.message.content');
        if (! $content) {
            logger()->warning('OpenRouter missing content', [
                'response' => $raw,
            ]);

            return back()->withErrors([
                'resume' => 'AI analysis failed. Please try again in a moment.',
            ]);
        }

        $analysis = json_decode($content, true) ?? [];
        
        \Log::info('analysis_content', ['content' => $content]);
        \Log::info('analysis_decoded', $analysis);

        $resume = auth()->user()->resumes()->create([
            'file_path' => $path,
            'parsed_text' => $parsedText,
        ]);

        $resume->analysis()->create([
            'score' => data_get($analysis, 'score'),
            'ats_score' => data_get($analysis, 'ats_score'),    
            'format_quality' => data_get($analysis, 'format_quality'),
            'content_quality' => data_get($analysis, 'content_quality'),
            'score_description' => data_get($analysis, 'score_description'),
            'skills' => data_get($analysis, 'skills'),
            'strengths' => data_get($analysis, 'strengths'),
            'weaknesses' => data_get($analysis, 'weaknesses'),
            'suggestions' => data_get($analysis, 'suggestions'),
            'suggestions_titles' => data_get($analysis, 'suggestions_titles'),
        ]);
    
        return redirect()->route('dashboard');
    }

}
