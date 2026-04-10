<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ResumeController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'resume' => 'required|file|mimes:pdf,doc,docx|max:2048',
        ]);

        $path = $request->file('resume')->store('resumes', 'public');

        $resume = auth()->user()->resumes()->create([
            'file_path' => $path,
        ]);

        return response()->json($resume);
    }
}
