<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class OpenRouterService
{
    public function analyzeResume($text)
    {
        $response = Http::withHeaders([
                'Authorization' => 'Bearer ' . config('services.openrouter.key'),
                'HTTP-Referer' => config('app.url'),
                'X-Title' => config('app.name'),

            ])
            ->timeout(30)
            ->retry(2, 500)
            ->post('https://openrouter.ai/api/v1/chat/completions',[
            'model' => 'openai/gpt-oss-20b:free',
            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'Return only JSON in this exact shape: {"score":number,"ats_score":number,"format_quality":number,"content_quality":number,"score_description":string,"skills":array,"strengths":array,"weaknesses":array,"suggestions":array,"suggestions_titles":array}. The score, ats_score, format_quality, and content_quality must be integers from 0 to 100. The overall score must be derived from ats_score, format_quality, and content_quality (for example, average of the three). Each item in suggestions_titles must be a short title (3 to 6 words) that summarizes the corresponding suggestions item at the same index. The suggestions_titles array must be the same length as suggestions.',
                ],
                [
                    'role' => 'user',
                    'content' => "Analyze this resume:\n\n$text"
                ]
            ],
        ]);

        if (! $response->ok()) {
            logger()->warning('OpenRouter request failed', [
                'status' => $response->status(),
                'body' => $response->json(),
            ]);
        }

        return $response->json();
    }

}