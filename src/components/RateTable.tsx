
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useExternalRates } from "@/hooks/useExternalRates";

interface RateTableProps {
  transactionType?: 'purchase' | 'refinance' | 'renewal' | 'heloc';
  province?: string;
  termFilter?: number;
  maxResults?: number;
}

export function RateTable({ 
  transactionType = 'purchase', 
  province = 'ON', 
  termFilter, 
  maxResults = 10 
}: RateTableProps) {
  const { rates, isLoading, error, lastUpdated } = useExternalRates({
    transactionType,
    province: province as any,
    term: termFilter,
    rateType: "all"
  });

  if (error) {
    return (
      <div className="rounded-lg border bg-card shadow-sm p-6">
        <div className="text-center text-muted-foreground">
          <p>Unable to load rates at this time.</p>
          <p className="text-sm mt-2">Error: {error}</p>
        </div>
      </div>
    );
  }

  const displayRates = rates.slice(0, maxResults);

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <div className="p-6">
        <h3 className="text-xl font-semibold">Today's Mortgage Rates</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Compare rates from top lenders 
          {lastUpdated && ` - Updated ${lastUpdated.toLocaleDateString()}`}
          {isLoading && " - Loading..."}
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Lender</TableHead>
            <TableHead>Rate</TableHead>
            <TableHead>Term</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead className="hidden lg:table-cell">Amortization</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell><div className="h-4 bg-muted animate-pulse rounded"></div></TableCell>
                <TableCell><div className="h-4 bg-muted animate-pulse rounded w-16"></div></TableCell>
                <TableCell><div className="h-4 bg-muted animate-pulse rounded w-12"></div></TableCell>
                <TableCell className="hidden md:table-cell"><div className="h-4 bg-muted animate-pulse rounded w-16"></div></TableCell>
                <TableCell className="hidden lg:table-cell"><div className="h-4 bg-muted animate-pulse rounded w-12"></div></TableCell>
                <TableCell className="text-right"><div className="h-8 bg-muted animate-pulse rounded w-20 ml-auto"></div></TableCell>
              </TableRow>
            ))
          ) : displayRates.length > 0 ? (
            displayRates.map((rate) => (
              <TableRow key={rate.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {rate.isBigBank && <Badge variant="outline" className="bg-primary/10 text-primary">Big Bank</Badge>}
                    {rate.lender}
                  </div>
                </TableCell>
                <TableCell className="font-semibold">{rate.rate.toFixed(2)}%</TableCell>
                <TableCell>{rate.termDisplay}</TableCell>
                <TableCell className="hidden md:table-cell capitalize">{rate.type}</TableCell>
                <TableCell className="hidden lg:table-cell">{rate.amortization} years</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" className="whitespace-nowrap">
                    <span className="hidden sm:inline mr-1">Get Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                No rates available for the selected criteria
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
