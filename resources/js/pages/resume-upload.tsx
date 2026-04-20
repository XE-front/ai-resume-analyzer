import { useState } from 'react';
import { router } from '@inertiajs/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";

export default function UploadResumePage() {
    const [isDragging, setIsDragging] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [fileName, setFilename] = useState("");

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            handleFileUpload(files[0]);
        }

    };

    const handleFileUpload = (file: File) => {
        setFilename(file.name);
        setIsUploading(true);
        setUploadProgress(0);

        const data = new FormData();
        data.append('resume', file);


        router.post('/resumes', data, {
            forceFormData: true,
            onProgress: (event) => {
                if (event?.percentage != null) {
                    setUploadProgress(Math.round(event.percentage));
                }
            },
            onSuccess: () => {
                setIsUploading(false);
                router.visit('/dashboard');
            },
            onError: () => {
                setIsUploading(false);
            }
        });
    };


    return (
        <div className="max-4xl mx-auto space-y-6">
            <div className="mt-5 mb-8 item-center text-center">
                <h2 className="text-3xl font-bold text-[#1a1a1a] mb-2">Upload Your Resume</h2>
                <p className="text-muted-foreground">
                    Upload your resume in PDF format and get instant analysis.
                </p>
            </div>

            <Card className="bg-[#ffffff]">
                <CardContent className="p-8">
                    {!isUploading ? (
                        <>
                            <div 
                                className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                                    isDragging 
                                    ? "border-[#5E0006] bg-[#5E0006]/5" 
                                    : "border-gray-300 hover:border-[#5E0006]/50 hover:bg-gray-50"
                                }`} 
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <div className="w-20 h-20 rounded-full bg-[#5E0006]/10 flex items-center justify-center mx-auto mb-6">
                                    <Upload className="w-10 h-10 text-[#5E0006]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                                    Drag and Drop your resume here
                                </h3>
                                <p className="text-[#717182] mb-6">
                                    or click to select a file from your computer
                                </p>
                                
                                <input
                                    type="file"
                                    id="file-upload"
                                    accept=".pdf"
                                    onChange={handleFileInput}
                                    className="hidden"
                                />

                                <label htmlFor="file-upload">
                                    <Button size="lg" className='bg-[#5E0006] text-white hover:bg-[#5E0006]/90' asChild>
                                        <span>Choose File</span>
                                    </Button>
                                </label>

                                <div className="mt-6 text-sm text-[#717182]">
                                    Supported format: PDF. Max file size: 5MB.
                                </div>
                            </div>
                        </>
                    ):(
                        <div className="space-y-6">
                            <div className="text-center">
                                <div className="w-20 h-29 rounded-full bg-[#5E0000]/10 flex items-center justify-center mx-auto mb-6">
                                    {uploadProgress < 100 ? (
                                        <FileText className="w-10 h-10 text-[#5E0000] animate-pulse"/>
                                    ) : (
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                                    {uploadProgress < 100 ? "Analyzing your resume..." : "Analysis Complete!"}
                                </h3>
                                <p className="text-[#717182]">{fileName}</p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-[#717182]">Upload Progress:</span>
                                    <span className="font-medium text-[#1a1a1a]">{uploadProgress}%</span>
                                </div>
                                <Progress value={uploadProgress} className="h-3 rounded-full" />
                            </div>
                            
                            {uploadProgress < 100 && (
                                <div className="space-y-3 pt-4">
                                    <div className="flex items-center gap-3 text-sm text-[#717182]">
                                        <div className="w-2 h-2 rounded-full bg-[#5E0000] animate-pulse" />
                                        <span>Extracting text and formatting...</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[#717182]">
                                        <div className="w-2 h-2 rounded-full bg-[#5E0000] animate-pulse" />
                                        <span>Analyzing skills and experience...</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-[#717182]">
                                        <div className="w-2 h-2 rounded-full bg-[#5E0000] animate-pulse" />
                                        <span>Checking ATS compatibility...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Instruction Card */}
            <Card className="bg-[#ffffff]">
                <CardContent className="p-6">
                    <h4 className="font-semibold text-[#1a1a1a] mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-[#5E0000]" />
                        Tips for Best Results
                    </h4>
                    <ul className="space-y-2 text-sm text-[#717182]">
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Ensure your resume is well-formatted and easy to read</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Include clear section headings (Experience, Education, Skills, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Use standard fonts and avoid complex graphics or tables</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Save as PDF for best compatibility with our AI analysis</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-2 bg-[#ffffff]">
                    <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-[#5E0000]/10 flex items-center justify-center mx-auto mb-3">
                            <FileText className="w-6 h-6 text-[#5E0000]" />
                        </div>
                        <h4 className="font-semibold text-[#1a1a1a] mb-2">Instant Analysis</h4>
                        <p className="text-sm text-[#717182]">
                            Get results in seconds with our advanced AI
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-2 bg-[#ffffff]">
                    <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-[#5E0000]/10 flex items-center justify-center mx-auto mb-3">
                            <FileText className="w-6 h-6 text-[#5E0000]" />
                        </div>
                        <h4 className="font-semibold text-[#1a1a1a] mb-2">ATS Compatible</h4>
                        <p className="text-sm text-[#717182]">
                            Check if you resume passes ATS systems
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-2 bg-[#ffffff]">
                    <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-[#5E0000]/10 flex items-center justify-center mx-auto mb-3">
                            <FileText className="w-6 h-6 text-[#5E0000]" />
                        </div>
                        <h4 className="font-semibold text-[#1a1a1a] mb-2">Secure Upload</h4>
                        <p className="text-sm text-[#717182]">
                            Your data is encrypted and private
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

UploadResumePage.layout = {
    breadcrumbs: [
        {
            title: 'Upload resume',
            href: '/upload-resume',
        },
    ],
};