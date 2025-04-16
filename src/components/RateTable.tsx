
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LenderRate {
  id: string;
  lender: string;
  rate: number;
  apr: number;
  monthlyCost: number;
  loanType: string;
  featured: boolean;
}

const lenderRates: LenderRate[] = [
  {
    id: "1",
    lender: "LoanStart",
    rate: 5.625,
    apr: 5.843,
    monthlyCost: 1725,
    loanType: "30-year fixed",
    featured: true,
  },
  {
    id: "2",
    lender: "WealthBank",
    rate: 5.75,
    apr: 5.93,
    monthlyCost: 1751,
    loanType: "30-year fixed",
    featured: false,
  },
  {
    id: "3",
    lender: "HomeFirst",
    rate: 5.5,
    apr: 5.685,
    monthlyCost: 1703,
    loanType: "30-year fixed",
    featured: false,
  },
  {
    id: "4",
    lender: "CitiMortgage",
    rate: 4.875,
    apr: 5.125,
    monthlyCost: 1587,
    loanType: "15-year fixed",
    featured: true,
  },
];

export function RateTable() {
  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <div className="p-6">
        <h3 className="text-xl font-semibold">Today's Mortgage Rates</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Compare rates from top lenders - Updated April 16, 2025
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Lender</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead>APR</TableHead>
            <TableHead className="hidden md:table-cell">Monthly Cost</TableHead>
            <TableHead className="hidden lg:table-cell">Loan Type</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lenderRates.map((rate) => (
            <TableRow key={rate.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {rate.featured && <Badge variant="outline" className="bg-primary/10 text-primary">Featured</Badge>}
                  {rate.lender}
                </div>
              </TableCell>
              <TableCell className="font-semibold">{rate.rate}%</TableCell>
              <TableCell>{rate.apr}%</TableCell>
              <TableCell className="hidden md:table-cell">${rate.monthlyCost}/mo</TableCell>
              <TableCell className="hidden lg:table-cell">{rate.loanType}</TableCell>
              <TableCell className="text-right">
                <Button size="sm" className="whitespace-nowrap">
                  <span className="hidden sm:inline mr-1">Get Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
