import { Brain } from 'lucide-react';

export default function AppLogo() {
    return (
        <>
            <div className="flex items-center justify-center">
                <Brain className="size-8 text-[#5E0006]" />
            </div>
            <div className=" grid flex-1 text-left text-md">
                <span className="mb-0.5 truncate leading-tight font-semibold text-[#1a1a1a]">
                    ResumeAnalyzer
                </span>
            </div>
        </>
    );
}
