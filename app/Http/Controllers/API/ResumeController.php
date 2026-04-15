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
        \Log::info('openrouter_raw', $raw);
        \Log::info('openrouter_content', ['content' => data_get($raw, 'choices.0.message.content')]);

        $content = data_get($raw, 'choices.0.message.content');
        $analysis = json_decode($content, true) ?? [];
        
    
        $resume = auth()->user()->resumes()->create([
            'file_path' => $path,
            'parsed_text' => $parsedText,
        ]);

        $resume->analysis()->create([
            'score' => data_get($analysis, 'score'),
            'skills' => data_get($analysis, 'skills'),
            'strengths' => data_get($analysis, 'strengths'),
            'weaknesses' => data_get($analysis, 'weaknesses'),
            'suggestions' => data_get($analysis, 'suggestions'),
        ]);
    
        return redirect()->route('dashboard');
    }

}
