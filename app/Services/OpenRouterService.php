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
            ->post('https://openrouter.ai/api/v1/chat/completions',[
            'model' => 'openai/gpt-oss-20b:free',
            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'Return only JSON in this exact shape: {"score":number,"skills":array,"strengths":array,"weaknesses":array,"suggestions":array}. The score must be an integer from 0 to 100.'
                ],
                [
                    'role' => 'user',
                    'content' => "Analyze this resume:\n\n$text"
                ]
            ],
        ]);
        return $response->json();
    }

}