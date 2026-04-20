import { jsPDF } from "jspdf";  
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  CheckCircle, 
  AlertCircle, 
  Lightbulb,
  Award,
  Target,
  ArrowRight,
  Download,
  Share2,
  Car
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

type Analysis = {
    score: number | null;
    ats_score: number | null;
    format_quality: number | null;
    content_quality: number | null;
    score_description: string | null;
    strengths: string[] | null;
    weaknesses: string[] | null;
    skills: string[] | null;
    suggestions: string[] | null;
    suggestions_titles: string[] | null;
};

type ResultPageProps = {
    analysis: Analysis | null;
    hasResume: boolean;
};

export default function ResultPage({ analysis, hasResume }: ResultPageProps) {
    const overallScore = analysis?.score ?? null;
    const atsScore = analysis?.ats_score ?? null;
    const formatQuality = analysis?.format_quality ?? null;
    const contentQuality = analysis?.content_quality ?? null;
    const scoreDescription = analysis?.score_description;

    const handleDownloadReport = () => {
        if (!analysis) return;

        const doc = new jsPDF();
        let y = 16;

        const line = (text: string) => {
            doc.text(text, 14, y);
            y += 8;
        };

        line("Resume Analysis Report");
        line(`Overall Score: ${analysis.score ?? '--'}`);
        line(`ATS Score: ${analysis.ats_score ?? '--'}`);
        line(`Format Quality: ${analysis.format_quality ?? '--'}`);
        line(`Content Quality: ${analysis.content_quality ?? '--'}`);
        y += 4;

        if (analysis.score_description) {
            line('Score Description:');
            doc.text(analysis.score_description, 14, y);
            y += 12;
        }

        if (analysis.strengths?.length) {
            line('Strengths:');
            analysis.strengths.forEach((s) => line(`- ${s}`));
        }

        if (analysis.weaknesses?.length) {
            line('Areas for Improvement:');
            analysis.weaknesses.forEach((w) => line(`- ${w}`));
        }

        if (analysis.skills?.length) {
            line('Skills:');
            analysis.skills.forEach((s) => line(`- ${s}`));
        }

        if (analysis.suggestions?.length) {
            line('Suggestions:');
            analysis.suggestions.forEach((s) => line(`- ${s}`));
        }

        doc.save('resume-analysis-report.pdf');
    }

    return (
        <div className="max-w-7xl mx-auto space-y-6 p-10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-[#1a1a1a] mb-2">Resume Analysis Results</h2>
                    <p className="text-[#717182]">
                        Here are the results of your resume analysis.
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="bg-[#5E0006] text-white hover:bg-[#5E0006]/90" onClick={handleDownloadReport}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Report
                    </Button>
                    <Button variant="outline" className="bg-[#5E0006] text-white hover:bg-[#5E0006]/90">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Results
                    </Button>
                </div>
            </div>

            {/* Score Card */}
            <Card className="border-2 border-[#5E0006]/20 bg-gradient-to-br from-[#5E0006]/5 to-transparent">
                <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <Award className="w-8 h-8 text-[#5E0006]" />
                                <h3 className="text-2xl font-bold text-[#1a1a1a]">Overall Result Score</h3>
                            </div>
                            <div className="flex items-end gap-4 mb-6">
                                <div className="text-7xl font-bold text-[#5E0006]">
                                    {overallScore ?? '--'}
                                </div>
                                <div className="text-3xl text-[#717182] mb-2">/ 100</div>
                            </div>
                            <p className="text-[#717182] mb-6">
                                {scoreDescription ?? (hasResume ? 'No score description available yet.' : 'Upload a resume to see your results.')}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500"/>
                                    <span className="font-medium text-[#1a1a1a]">ATS Optimization</span>
                                </div> 
                                <div className="text-xl font-bold text-green-500">
                                    {atsScore != null ? `${atsScore}%` : '--'}
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-blue-500"/>
                                    <span className="font-medium text-[#1a1a1a]">Format Quality</span>
                                </div> 
                                <div className="text-xl font-bold text-green-500">
                                    {formatQuality != null ? `${formatQuality}%` : '--'}
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-[#D53E0F]"/>
                                    <span className="font-medium text-[#1a1a1a]">Content Quality</span>
                                </div> 
                                <div className="text-xl font-bold text-green-500">
                                    {contentQuality != null ? `${contentQuality}%` : '--'}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>  
            </Card>

            {/* Strengths and Weaknesses */}
            <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border border-[#5E0006]/10 bg-[#ffffff] shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="w-6 h-6"/>
                            Strengths
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {analysis?.strengths?.length ? (
                            <ul className="space-y-2 text-sm text-[#1a1a1a]">
                                {analysis.strengths.map((strength, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                                        <span>{strength}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="text-sm text-[#717182]">
                                {hasResume ? 'No strengths extracted yet.' : 'Upload a resume to see strengths.'}
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card className="border border-[#5E0006]/10 bg-[#ffffff] shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-600">
                            <AlertCircle className="w-6 h-6"/>
                            Areas for Improvement
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {analysis?.weaknesses?.length ? (
                            <ul className="space-y-2 text-sm text-[#1a1a1a]">
                                {analysis.weaknesses.map((weakness, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5" />
                                        <span>{weakness}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="text-sm text-[#717182]">
                                {hasResume ? 'No improvement areas yet.' : 'Upload a resume to see improvements.'}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Skills Visualization */}
            <Card className="border border-[#5E0006]/10 bg-[#ffffff] shadow-sm">
                <CardHeader>
                    <CardTitle className="text-[#1a1a1a]">Skills Extracted</CardTitle>
                </CardHeader>
                <CardContent>
                    {analysis?.skills?.length ? (
                        <>
                            <div className="flex flex-wrap gap-2">
                                {analysis.skills.map((skill, index) => (
                                    <Badge key={index} className="bg-[#5E0006]/10 text-[#5E0006] border border-[#5E0006]/20 text-sm py-2 px-4">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                            <div className="pt-4 mt-4 border-t">
                                <p className="text-sm text-[#717182]">
                                    Total of {analysis.skills.length} skills were extracted from your resume.
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="text-sm text-[#717182]">
                            {hasResume ? 'No skills extracted yet.' : 'Upload a resume to see skills.'}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* ATS Keywords */}
            {/* <Card className="border border-[#5E0006]/10 bg-[#ffffff] shadow-sm">
                <CardHeader>
                    <CardTitle className="text-[#1a1a1a]">ATS Keywords</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        <Badge className="bg-[#5E0006] text-white hover:bg-[#5E0006]/90 text-sm py-2 px-4">JavaScript</Badge>
                        <Badge className="bg-[#5E0006] text-white hover:bg-[#5E0006]/90 text-sm py-2 px-4">React</Badge>
                        <Badge className="bg-[#5E0006] text-white hover:bg-[#5E0006]/90 text-sm py-2 px-4">Node.js</Badge>
                    </div>
                </CardContent>
            </Card> */}

            {/* Suggested Improvements */}
            <Card className="border border-[#5E0006]/10 bg-[#ffffff] shadow-sm">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-[#1a1a1a]">
                        <Lightbulb className="w-6 h-6 text-[#5E0006]"/>
                        Suggested Improvements
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {analysis?.suggestions?.length ? (
                        <div className="space-y-4">
                            {analysis.suggestions.map((suggestion, index) => (
                                <div key={index} className="p-4 border border-[#5E0006]/10 rounded-xl hover:border-[#5E0006]/30 transition-colors">
                                    <p className="text-sm text-[#1a1a1a]">{suggestion}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-sm text-[#717182]">
                            {hasResume ? 'No suggestions yet.' : 'Upload a resume to see suggestions.'}
                        </div>
                    )}
                </CardContent>

            </Card>
        </div>
    )
}