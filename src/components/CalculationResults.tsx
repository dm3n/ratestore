
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
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: totalInterest },
  ];

  // Colors for the pie chart
  const COLORS = ["#4f46e5", "#f97316"];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="bg-primary/5 rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Payment Summary</CardTitle>
        <CardDescription>Estimated monthly payment and loan breakdown</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {/* Monthly Payment */}
          <div className="rounded-lg border bg-card p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Monthly Payment</div>
              <div className="text-2xl font-bold">{formatMonthlyPayment(monthlyPayment)}</div>
            </div>
          </div>

          {/* Loan Breakdown */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Wallet className="h-5 w-5 mr-2 text-primary" />
                <div className="text-sm font-medium">Loan Amount</div>
              </div>
              <div className="font-medium">{formatCurrency(loanAmount)}</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-orange-500" />
                <div className="text-sm font-medium">Total Interest</div>
              </div>
              <div className="font-medium">{formatCurrency(totalInterest)}</div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <BadgeDollarSign className="h-5 w-5 mr-2 text-green-600" />
                <div className="text-sm font-medium">Total Cost</div>
              </div>
              <div className="font-medium">{formatCurrency(totalPayment)}</div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-medium mb-1 flex justify-between">
                <span>Principal vs. Interest</span>
                <span>{Math.round((loanAmount / totalPayment) * 100)}% Principal</span>
              </div>
              <Progress value={(loanAmount / totalPayment) * 100} className="h-2" />
            </div>
          </div>

          {/* Payment Breakdown Chart */}
          <div className="pt-4">
            <h3 className="text-sm font-medium mb-2">Payment Breakdown</h3>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
