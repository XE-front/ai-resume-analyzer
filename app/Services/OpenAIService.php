<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class OpenAIService
{
    public function analyzeResume($text)
    {
        $response = Http::withToken(config('services.openai.key'))
            ->post('https://api.openai.com/v1/chat/completions',[
            'model' => 'gpt-4.1 mini',
            'messages' => [
                [
                    'role' => 'system',
                    'content' => 'You are a resume analyzer. Return JSON only.'
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