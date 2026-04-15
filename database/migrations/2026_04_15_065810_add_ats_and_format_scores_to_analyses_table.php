<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('analyses', function (Blueprint $table) {
            $table->integer('ats_score')->nullable()->after('score');
            $table->integer('format_quality')->nullable()->after('ats_score');
            $table->string('score_description')->nullable()->after('format_quality');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('analyses', function (Blueprint $table) {
             $table->dropColumn(['ats_score', 'format_quality', 'score_description']);
        });
    }
};
