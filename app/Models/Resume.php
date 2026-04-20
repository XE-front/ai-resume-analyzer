<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\User;
use App\Models\Analysis;

class Resume extends Model
{
     protected $fillable = [
        'user_id',
        'file_path',
          'file_name',
        'parsed_text',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function analysis(): HasOne
    {
        return $this->hasOne(Analysis::class);
    }
}
