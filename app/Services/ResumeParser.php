<?php

namespace App\Services;

use Smalot\PdfParser\Parser;

class ResumeParser
{
    public function parse(string $filePath): string
    {
        return $this->parsePdf($filePath);
    }

    private function parsePdf(string $filePath): string
    {
        $parser = new Parser();
        $pdf = $parser->parseFile($filePath);
     
        return $pdf->getText();
    }
}