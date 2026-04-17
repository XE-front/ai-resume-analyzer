import { Link } from "@inertiajs/react";
import { Button} from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Brain, Target, TrendingUp, Sparkles, CheckCircle, BarChart } from "lucide-react";

export default function Welcome() {
    const features = [
        {
            icon: BarChart,
            title: "Resume Scoring",
            description: "Get an instant AI-powered score for your resume based on industry standards and ATS compatibility."
        },
        {
            icon: Target,
            title: "Skill Gap Analysis",
            description: "Identify the skills you're missing and get personalized recommendations to improve your resume."
        },
        {
            icon: CheckCircle,
            title: "Job Matching",
            description: "Get matched with jobs that align with your skills and experience."
        },
        {
            icon: Sparkles,
            title: "AI Suggestions",
            description: "Get personalized AI-powered suggestions to enhance your resume and increase your chances of landing interviews."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header */}
            <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between" >
                    <div className="flex items-center gap-2">
                        <Brain className="w-8 h-8 text-[#5E0006]"/>
                        <span className="text-xl font-semibold text-[#5E0006]">ResumeAnalyzer</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#features" className="text-sm text-[#1a1a1a] transition-colors">
                             Features
                        </a>
                        <a href="#how-it-works" className="text-sm text-[#1a1a1a] transition-colors">
                            How It Works
                        </a>
                        <Link href="/login"> 
                            <Button variant="outline" size="sm" className="bg-[#5E0006]">Log In</Button>
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EED9B9]/90 rounded-full text-sm mb-6">
                            <Sparkles className="w-4 h-4 text-[#5E0006]"/>
                            <span className="text-[#1a1a1a]">Powered by Advanced AI</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                            Analyze Your Resume with AI
                        </h1>
                        <p className="text-lg md:text-xl text-[#717182] mb-8 leading-relaxed">
                            Get insights, improve your resume, and match with jobs instantly using intelligent analysis platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/analyze">
                                <Button size="lg" className="bg-[#5E0006] text-white hover:bg-[#4a0004]">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-8 flex items-center gap-6 text-sm text-[#717182]">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#5E0006]"/>
                                <span className="text-[#5E0006]">No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-[#5E0006]"/>
                                <span className="text-[#5E0006]">Free Analysis</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gradient-to-br from-[#5E0006]/18 via-accent/10 to-[#EED9B9]/20 rounded-3xl p-8 md:p-12">
                            <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-[#717182] mb-1">Resume Score</span>
                                    <TrendingUp className="w-5 h-5 text-[#5E0006]"/>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-[#5E0006]">85</span>
                                    <span className="text-sm text-[#717182] mb-1">/ 100</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-[#5E0006] to-[#D53E0F] rounded-full" style={{ width: '85%' }}></div>
                                </div>
                                <div className="pt-4 space-y-2 ">
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-[#D53E0F]"></div>
                                        <span className="text-[#1a1a1a]">Strong technical skills</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-[#D53E0F]"></div>
                                        <span className="text-[#1a1a1a]">Good formatting</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-[#D53E0F]"></div>
                                        <span className="text-[#1a1a1a]">Add more achievement</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                        Features for the Job Seekers
                    </h2>
                    <p className="text-lg text-[#717182] max-w-2xl mx-auto">
                        Everything you need to create the perfect resume and land your dream job.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-white hover:border-[#5E0006]/20 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="w-12 h-12 rounded-xl bg-[#5E0006]/10 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-[#5E0006]"/>
                                </div>
                                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#717182] leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>    
                        </Card>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                            How It Works    
                        </h2>
                        <p className="text-lg text-[#717182] max-w-2xl mx-auto">
                            Get Started in three simple steps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { step: "1", title: "Upload Your Resume", description: "Easily upload your resume in PDF or Word format to get started." },
                            { step: "2", title: "Get Instant Analysis", description: "Receive an instant AI-powered analysis of your resume and provides detailed insights." },
                            { step: "3", title: "Get Results", description: "View your score, suggestions, and matching jobs." },
                        ].map((item, index) => (
                        <div key={index} className="relative">
                            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">
                                {item.step}
                            </h3>
                            <h4 className="text-lg font-medium text-[#1a1a1a] mb-2">
                                {item.title}
                            </h4>
                            <p className="text-sm text-[#717182] leading-relaxed">
                                {item.description}
                            </p>
                            {index < 2 && (
                                <div className="hidden md:block absolute top-8 -right-4 w-8 h-8.5 bg-[#5E0006]/2"></div>
                            )}
                        </div>
                        ))}
                    </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#5E0006] to-[#D53E0F] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Improve Your Resume?
                    </h2>
                    <p className="text-lg mb-8 text-white/90">
                        Get started with ResumeAnalyzer and take the first step towards landing your dream job.
                    </p>
                    <Link href="/analyze">
                        <Button size="lg" variant="secondary" className="bg-white text-[#5E0006] hover:bg-white-100">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </section>

            {/* FooteR  */}
            <footer className="bg-white border-t">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Brain className="w-6 h-6 text-[#5E0006]"/>
                                <span className="text-lg font-semibold text-[#5E0006]">ResumeAnalyzer</span>
                            </div>
                            <p className="text-sm text-[#717182]">
                                AI-powered resumme analysis and job matching platform.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-[#1a1a1a]">Product</h4>
                            <ul className="space-y-2 text-sm text-[#717182]">
                                <li><a href="/features" className=" hover:text-[#5E0006] transition-colors">Features</a></li>
                                <li><a href="/faq" className=" hover:text-[#5E0006] transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-[#1a1a1a]">Company</h4>
                            <ul className="space-y-2 text-sm text-[#717182]">
                                <li><a href="/about" className=" hover:text-[#5E0006] transition-colors">About</a></li>
                                <li><a href="/contact" className=" hover:text-[#5E0006] transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4 text-[#1a1a1a]">Legal</h4>
                            <ul className="space-y-2 text-sm text-[#717182]">
                                <li><a href="/privacy" className=" hover:text-[#5E0006] transition-colors">Privacy Policy</a></li>
                                <li><a href="/terms" className=" hover:text-[#5E0006] transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className=" mt-8 pt-8 text-center text-sm text-[#717182]">
                        <p>&copy; {new Date().getFullYear()} ResumeAnalyzer. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )

}