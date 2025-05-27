
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Wallet, BadgeDollarSign, Calculator } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface CalculationResultsProps {
  monthlyPayment: number;
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  totalPayment: number;
  totalInterest: number;
}

export function CalculationResults({
  monthlyPayment,
  loanAmount,
  interestRate,
  loanTerm,
  totalPayment,
  totalInterest,
}: CalculationResultsProps) {
  // Format currency
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Format for monthly payment (with cents)
  const formatMonthlyPayment = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  // Data for the pie chart
  const data = [
    { name: "Principal", value: loanAmount, color: "#3b82f6" },
    { name: "Interest", value: totalInterest, color: "#f59e0b" },
  ];

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="font-medium text-gray-900">{payload[0].name}</p>
          <p className="text-sm text-gray-600">
            {formatCurrency(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom label function to prevent overlap
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
    if (percent < 0.05) return null; // Don't show label if slice is too small
    
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-sm font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="bg-primary/5 rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Payment Summary</CardTitle>
        <CardDescription>Estimated monthly payment and loan breakdown</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Monthly Payment */}
          <div className="rounded-lg border bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-600">Monthly Payment</div>
              <div className="text-3xl font-bold text-blue-600">{formatMonthlyPayment(monthlyPayment)}</div>
            </div>
          </div>

          {/* Loan Breakdown */}
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
              <div className="flex items-center">
                <Wallet className="h-5 w-5 mr-2 text-blue-600" />
                <div className="text-sm font-medium">Loan Amount</div>
              </div>
              <div className="font-semibold">{formatCurrency(loanAmount)}</div>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
              <div className="flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-orange-500" />
                <div className="text-sm font-medium">Total Interest</div>
              </div>
              <div className="font-semibold">{formatCurrency(totalInterest)}</div>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
              <div className="flex items-center">
                <BadgeDollarSign className="h-5 w-5 mr-2 text-green-600" />
                <div className="text-sm font-medium">Total Cost</div>
              </div>
              <div className="font-semibold">{formatCurrency(totalPayment)}</div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-medium mb-2 flex justify-between">
                <span>Principal vs. Interest</span>
                <span>{Math.round((loanAmount / totalPayment) * 100)}% Principal</span>
              </div>
              <Progress value={(loanAmount / totalPayment) * 100} className="h-3" />
            </div>
          </div>

          {/* Modern Payment Breakdown Chart */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold mb-4 text-center">Payment Breakdown</h3>
            <div className="h-[280px] w-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={100}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="value"
                    stroke="#ffffff"
                    strokeWidth={3}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Custom Legend */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6">
                {data.map((entry, index) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-sm font-medium text-gray-700">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
