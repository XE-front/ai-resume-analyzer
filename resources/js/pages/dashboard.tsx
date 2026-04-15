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

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="space-y-6">
                {/* Stats Cards */}
                <div className="my-5 mx-5 grid md:grid-cols-4 gap-6">
                    <Card className="border-2 border-[#5E0006]/20 bg-gradient-to-br from-[#5E0006]/5 to-transparent">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 rounted-xl bg-[#5E0006]/10 flex items-center justify-center">
                                    <Award className="w-6 h-6 text-[#5E0006]" />
                                </div>
                                <TrendingUp className="w-5 h-5 text-[#5E0006]" />
                            </div>
                            <div className="text-3xl font-bold text-[#1a1a1a] mb-1"></div>
                            <div className="text-sm text-[#717182]">Resume Score</div>
                            <div className="mt-3 text-xs text-[#5E0006]"> from last update</div>
                        </CardContent>
                    </Card>

                    <Card className="border-2 border-[#5E0006]/20 bg-gradient-to-br from-[#5E0006]/5 to-transparent">
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
                    </Card>

                    <Card className="border-2 border-[#5E0006]/20 bg-gradient-to-br from-[#5E0006]/5 to-transparent">
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
                    </Card>

                    <Card className="border-2 border-[#5E0006]/20 bg-gradient-to-br from-[#5E0006]/5 to-transparent">
                        <CardContent className="p-6">
                            <div className="flext items-center justify-between mb-4">
                                <div className="w-12 h-12 rounted-xl bg-green-500/10 flex items-center justify-center">
                                    <FileText className="w-6 h-6 text-green-500" />
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-[#1a1a1a] mb-1"></div>
                            <div className="text-sm text-[#717182]">Resume Analyzed</div>
                            <div className="mt-3 text-xs text-[#717182]">This month</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Resume Score Card */}
                    <Card className="lg:col-span-2 gap-0 bg-[#ffffff]">
                        <CardHeader className="bg-[#ffffff]">
                            <CardTitle className="flex items-center justify-between ">
                                <span className="text-[#1a1a1a]">Resume Performance</span>
                                <Link href="#">
                                    <Button variant="ghost" size="sm">
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
                                            87
                                        </div>
                                    </div>
                                    <p className="text-center text-[#717182]">
                                        Your resume is performing well across key metrics.
                                    </p>
                                </div>
                           

                                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t mt-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600 mb-1 ">A+</div>
                                        <div className="text-xs text-[#717182]">ATS Score</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1 ">92%+</div>
                                        <div className="text-xs text-[#717182]">Format Quality</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-[#5E0006] mb-1 ">A+</div>
                                        <div className="text-xs text-[#717182]">Keyword Match</div>
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
                    <Card className="bg-[#ffffff]"> 
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-[#1a1a1a]">
                                <Lightbulb className="w-5 h-5 text-[#5E0006]" />
                                AI Suggestions
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <div className="p-3 bg-[#EED9B9]/20 rounded-lg text-sm text-[#1a1a1a] border border-[#EED9B9]/30">
                                    Suggestions
                                </div>
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
                    <Card className="bg-[#ffffff]">
                        <CardHeader>
                            <CardTitle className='text-[#1a1a1a]'>Skill Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-[#1a1a1a]">Python</span>
                                        <span className="text-sm text-[#717182]">90%</span>
                                    </div>
                                    <Progress value={90} className="h-2" />
                                </div>
                                 <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium text-[#1a1a1a]">Java</span>
                                        <span className="text-sm text-[#717182]">80%</span>
                                    </div>
                                    <Progress value={80} className="h-2" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card className="bg-[#ffffff]">
                        <CardHeader>
                            <CardTitle className='text-[#1a1a1a]'>
                                <Calendar className="w-5 h-5 text-[#5E0006] mr-2 mb-2" />
                                Recent Activity
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
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

