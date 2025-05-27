
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

interface SavingsRate {
  id: string;
  institution: string;
  accountType: string;
  apy: number;
  minimumDeposit: number;
  featured: boolean;
  bonus?: string;
}

const savingsRates: SavingsRate[] = [
  {
    id: "1",
    institution: "Marcus by Goldman Sachs",
    accountType: "High Yield Savings",
    apy: 4.50,
    minimumDeposit: 0,
    featured: true,
  },
  {
    id: "2",
    institution: "Ally Bank",
    accountType: "Online Savings",
    apy: 4.25,
    minimumDeposit: 0,
    featured: false,
  },
  {
    id: "3",
    institution: "Capital One 360",
    accountType: "Performance Savings",
    apy: 4.15,
    minimumDeposit: 0,
    featured: false,
    bonus: "New customer bonus"
  },
  {
    id: "4",
    institution: "Discover Bank",
    accountType: "Online Savings",
    apy: 4.00,
    minimumDeposit: 0,
    featured: true,
  },
  {
    id: "5",
    institution: "CIT Bank",
    accountType: "Platinum Savings",
    apy: 3.85,
    minimumDeposit: 100,
    featured: false,
  }
];

export function SavingsRatesTable() {
  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <div className="p-6">
        <h3 className="text-xl font-semibold">Today's Best Savings Rates</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Compare high-yield savings accounts - Updated daily
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Institution</TableHead>
            <TableHead>Account Type</TableHead>
            <TableHead>APY</TableHead>
            <TableHead className="hidden md:table-cell">Min. Deposit</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {savingsRates.map((rate) => (
            <TableRow key={rate.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  {rate.featured && (
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  )}
                  {rate.institution}
                </div>
              </TableCell>
              <TableCell>
                <div>
                  {rate.accountType}
                  {rate.bonus && (
                    <Badge variant="secondary" className="ml-2 text-xs">
                      {rate.bonus}
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell className="font-semibold text-green-600">
                {rate.apy.toFixed(2)}%
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {rate.minimumDeposit === 0 ? "No minimum" : `$${rate.minimumDeposit.toLocaleString()}`}
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm" className="whitespace-nowrap">
                  <span className="hidden sm:inline mr-1">Learn More</span>
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
