import { Card, CardContent } from '@/components/ui/card';
import { 
  FileText, 
  Calendar, 
  TrendingUp, 
    TrendingDown,
  Award
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

type HistoryStats = {
    totalResumes: number;
    bestScore: number | null;
    scoreImprovement: number | null;
    lastUploadAt: string | null;
};

type HistoryItem = {
    id: number;
    name: string;
    uploadedAt: string | null;
    score: number | null;
};

type HistoryPageProps = {
    stats: HistoryStats;
    resumes: HistoryItem[];
    chartPoints: { label: string | null; score: number | null }[];
};

export default function HistoryPage({ stats, resumes, chartPoints }: HistoryPageProps) {
    return (
        <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#1a1a1a] mb-2">Resume History</h2>
                <p className="text-[#717182]">
                    View and manage your past resume uploads and analysis results
                </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-4">
                <Card className="border border-[#E0E0E0] bg-[#ffffff]">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <FileText className="w-8 h-8 text-[#5E0006]/20" />
                        </div>
                        <div className="text-2xl font-bold text-[#1a1a1a] mb-1">{stats.totalResumes}</div>
                        <div className="text-sm text-[#717182]">Total Resumes</div>
                    </CardContent>
                </Card>
                <Card className="border border-[#E0E0E0] bg-[#ffffff]">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <Award className="w-8 h-8 text-green-500/20" />
                        </div>
                        <div className="text-2xl font-bold text-[#1a1a1a] mb-1">{stats.bestScore ?? '--'}</div>
                        <div className="text-sm text-[#717182]">Best Score</div>
                    </CardContent>
                </Card>
                <Card className="border border-[#E0E0E0] bg-[#ffffff]">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <TrendingUp className="w-8 h-8 text-blue-500/20" />
                        </div>
                        <div className="text-2xl font-bold text-[#1a1a1a] mb-1">
                            {stats.scoreImprovement == null
                                ? '--'
                                : stats.scoreImprovement > 0
                                    ? `+${stats.scoreImprovement}`
                                    : `${stats.scoreImprovement}`}
                        </div>
                        <div className="text-sm text-[#717182]">Score Improvement</div>
                    </CardContent>
                </Card>
                <Card className="border border-[#E0E0E0] bg-[#ffffff]">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <Calendar className="w-8 h-8 text-[#D53E0F]/20" />
                        </div>
                        <div className="text-2xl font-bold text-[#1a1a1a] mb-1">
                            {stats.lastUploadAt ?? '--'}
                        </div>
                        <div className="text-sm text-[#717182]">Last Upload</div>
                    </CardContent>
                </Card>
            </div>

            {/* Progress Chart */}
            <Card className="border border-[#E0E0E0] bg-[#ffffff]">
                <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">Progress Chart</h3>
                    {chartPoints.length ? (
                        <div className="h-52 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={chartPoints.filter((point) => point.score != null)}
                                    margin={{ top: 10, right: 16, left: 0, bottom: 10 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                                    <XAxis
                                        dataKey="label"
                                        tick={{ fill: '#717182', fontSize: 12 }}
                                        tickLine={false}
                                        axisLine={{ stroke: '#E5E7EB' }}
                                    />
                                    <YAxis
                                        domain={[0, 100]}
                                        tick={{ fill: '#717182', fontSize: 12 }}
                                        tickLine={false}
                                        axisLine={{ stroke: '#E5E7EB' }}
                                        label={{
                                            value: 'Score',
                                            angle: -90,
                                            position: 'insideLeft',
                                            fill: '#717182',
                                            fontSize: 12,
                                        }}
                                    />
                                    <Tooltip
                                        formatter={(value) => [`${value ?? '--'}`, 'Score']}
                                          labelFormatter={(label) => `Date: ${label}`}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="score"
                                        stroke="#5E0006"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        activeDot={{ r: 5 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    ) : (
                        <div className="text-sm text-[#717182]">No chart data yet.</div>
                    )}
                </CardContent>
            </Card>

            {/* Resume History List */}
            <Card className="border border-[#E0E0E0] bg-[#ffffff]">
                <CardContent className="p-6">
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-left">Resume Name</TableHead>
                                    <TableHead className="text-left">Upload Date</TableHead>
                                    <TableHead className="text-left">Score</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {resumes.length ? (
                                    resumes.map((resume, index) => {
                                        const previousScore = resumes[index + 1]?.score ?? null;
                                        const hasTrend = resume.score != null && previousScore != null;
                                        const isUp = hasTrend && (resume.score as number) > (previousScore as number);
                                        const isDown = hasTrend && (resume.score as number) < (previousScore as number);
                                        const scoreColor = isUp
                                            ? 'text-green-600'
                                            : isDown
                                                ? 'text-red-600'
                                                : 'text-[#1a1a1a]';

                                        return (
                                        <TableRow key={resume.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-5 h-5 text-[#5E0006]/10 flex items-center justify-center flex-shrink-0">
                                                        <FileText className="w-5 h-5 text-[#5E0006]" />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-[#1a1a1a]">
                                                            {resume.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2 text-[#717182]">
                                                    <Calendar className="w-4 h-4" />
                                                    <span className="text-sm">
                                                        {resume.uploadedAt ?? '--'}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-2xl font-bold ${scoreColor}`}>
                                                        {resume.score ?? '--'}
                                                    </span>
                                                    {isUp && <TrendingUp className="w-4 h-4 text-green-600" />}
                                                    {isDown && <TrendingDown className="w-4 h-4 text-red-600" />}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                        );
                                    })
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={3}>
                                            <div className="py-8 text-center text-sm text-[#717182]">
                                                No resumes uploaded yet.
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* Empty State (shown when no history is available) */}
            
        </div>
    )
}