import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  TrendingUp, 
  Upload, 
  Briefcase, 
  Target, 
  Award,
  ArrowRight,
  Calendar,
  FileText,
  Lightbulb,
  Car
} from "lucide-react";

import { dashboard } from '@/routes';

type Analysis = {
    score: number;
    skills: string[];
    ats_score: number;
    format_quality: number;
    strengths: string[];
    weaknesses: string[];
    suggestions: string[];
};

type DashboardProps = {
    stats: {
        resumeScore: number | null;
        resumeCount: number;
    };
    analysis: Analysis | null;
    hasResumes: boolean;
};

export default function Dashboard({ stats, analysis, hasResumes }: DashboardProps)  {
    return (
        <>
            <Head title="Dashboard" />
            <div className="space-y-6 bg-[#f5f5f5] p-4">
                {/* Stats Cards */}
                <div className="my-5 mx-5 grid md:grid-cols-4 gap-6">
                    <Card className="border-2 border-[#5E0006]/20 bg-white">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounted-xl bg-[#5E0006]/10 flex items-center justify-center">
                                    <Award className="w-6 h-6 text-[#5E0006]" />
                                </div>
                                <TrendingUp className="w-5 h-5 text-[#5E0006]" />
                            </div>
                            <div className="text-3xl font-bold text-[#1a1a1a] mb-1">{stats.resumeScore}</div>
                            <div className="text-sm text-[#717182]">Resume Score</div>
                            <div className="mt-3 text-xs text-[#5E0006]"> from last update</div>
                        </CardContent>
                    </Card>

                    {/* <Card className="border-2 border-[#5E0006]/20 bg-gradient-to-br from-[#5E0006]/5 to-transparent">
                        <CardContent className="p-6">
                            <div className="flext items-center justify-between mb-4">
                                <div className="w-12 h-12 rounted-xl bg-[#D53E0F]/10 flex items-center justify-center">
                                    <Briefcase className="w-6 h-6 text-[#D53E0F]" />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-[#1a1a1a] mb-1"></div>
                            <div className="text-sm text-[#717182]">Job Matches</div>
                            <div className="mt-3 text-xs text-[#717182]"> new this week</div>
                        </CardContent>
                    </Card> */}

                    {/* <Card className="border-2 border-[#5E0006]/20 bg-gradient-to-br from-[#5E0006]/5 to-transparent">
                        <CardContent className="p-6">
                            <div className="flext items-center justify-between mb-4">
                                <div className="w-12 h-12 rounted-xl bg-blue-500/10 flex items-center justify-center">
                                    <Target className="w-6 h-6 text-blue-500" />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-[#1a1a1a] mb-1"></div>
                            <div className="text-sm text-[#717182]">Skills Match</div>
                            <div className="mt-3 text-xs text-[#717182]"></div>
                        </CardContent>
                    </Card> */}

                    <Card className="border-2 border-[#5E0006]/20 bg-white">
                        <CardContent className="p-6">
                            <div className="flext items-center justify-between mb-4">
                                <div className="w-12 h-12 rounted-xl bg-green-500/10 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-green-500" />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-[#1a1a1a] mb-1">{stats.resumeCount}</div>
                            <div className="text-sm text-[#717182]">Resume Analyzed</div>
                            <div className="mt-3 text-xs text-[#717182]">This month</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Resume Score Card */}
                    <Card className="lg:col-span-2 gap-0 border border-[#5E0006]/10 bg-[#ffffff] shadow-sm">
                        <CardHeader className="bg-[#ffffff]">
                            <CardTitle className="flex items-center justify-between ">
                                <span className="text-[#1a1a1a]">Resume Performance</span>
                                <Link href="#">
                                    <Button variant="ghost" size="sm" className="text-[#1a1a1a]">
                                        View Details
                                        <ArrowRight className="w-4 h-4 ml-2"/>
                                    </Button>
                                </Link>
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="bg-[#ffffff]">
                            <div className="space-y-6 ">
                                <div className="text-center py-8">
                                    <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#5E0006]/20 to-[#D53E0F]/20 mb-4">
                                        <div className="text-5xl font-bold text-[#5E0006]">
                                            {stats.resumeScore}
                                        </div>
                                    </div>
                                    <p className="text-center text-[#717182]">
                                        Your resume is performing well across key metrics.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t mt-4 items-center">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600 mb-1 ">{analysis?.ats_score ?? '--'}</div>
                                        <div className="text-xs text-[#717182]">ATS Score</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1 ">{analysis?.format_quality != null ? `${analysis.format_quality}%` : '--'}</div>
                                        <div className="text-xs text-[#717182]">Format Quality</div>
                                    </div>
                                </div>

                                <Link href="#" className="block mt-5">
                                    <Button className="w-full bg-[#5E0006] hover:bg-[#5E0006]/90 text-[#ffffff]" size="lg">
                                        <Upload className="w-5 h-5 mr-2" />
                                        Update New Resume
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    {/* AI Suggestions Panel */}
                    <Card className="border border-[#5E0006]/10 bg-[#ffffff] shadow-sm"> 
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-[#1a1a1a]">
                                <Lightbulb className="w-5 h-5 text-[#5E0006]" />
                                AI Suggestions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {analysis?.suggestions?.slice(0, 4).map((suggestion, index) => (
                                    <div key={index} className="p-3 bg-[#EED9B9]/20 rounded-lg text-sm text-[#1a1a1a] border border-[#EED9B9]/30">
                                        {suggestion}
                                    </div>
                                ))}
                                <Link href="#">
                                    <Button variant="outline" className="w-full mt-4">
                                        View All Suggestions
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Skills Breakdown */}
                    <Card className="border border-[#5E0006]/10 bg-[#ffffff] shadow-sm ">
                        <CardHeader>
                            <CardTitle className='text-[#1a1a1a]'>Skill Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {analysis?.skills.length ? (
                                    <div className="flex flex-wrap gap-2">
                                        {analysis.skills.map((skill, index) => (
                                        <Badge key={index} className="bg-[#5E0006]/10 text-[#5E0006] border border-[#5E0006]/20">
                                            {skill}
                                        </Badge>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-sm text-[#717182] text-center py-10">
                                        {hasResumes ? 'No skills extracted yet.' : 'Upload a resume to see skill insights.'}
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card className="border border-[#5E0006]/10 bg-[#ffffff] shadow-sm">
                        <CardHeader>
                            <CardTitle className='text-[#1a1a1a]'>
                                <Calendar className="w-5 h-5 text-[#5E0006] mr-2 mb-2" />
                                Recent Activity
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                                    <div className="text-sm text-[#717182]">On going development</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    

                </div>

            </div>
           
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};

