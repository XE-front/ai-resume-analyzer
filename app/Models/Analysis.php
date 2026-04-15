<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Resume;

class Analysis extends Model
{
    protected $fillable = [
        'resume_id',
        'score',
        'skills',
        'strengths',
        'weaknesses',
        'suggestions',
    ];

    protected $casts = [
        'skills' => 'array',
        'strengths' => 'array',
        'weaknesses' => 'array',
        'suggestions' => 'array',
    ];
    public function resume(): BelongsTo
    {
        return $this->belongsTo(Resume::class);
    }
}
