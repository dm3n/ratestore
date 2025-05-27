
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface CDRate {
  institution: string;
  apy: string;
  minDeposit: string;
  term: string;
  rating: number;
}

interface CDRatesTableProps {
  rates: CDRate[];
  title: string;
}

export const CDRatesTable = ({ rates, title }: CDRatesTableProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bank/Credit Union</TableHead>
              <TableHead>APY</TableHead>
              <TableHead>Min Deposit</TableHead>
              <TableHead>Term</TableHead>
              <TableHead>Rating</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rates.map((rate, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{rate.institution}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {rate.apy}
                  </Badge>
                </TableCell>
                <TableCell>{rate.minDeposit}</TableCell>
                <TableCell>{rate.term}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {renderStars(rate.rating)}
                    <span className="ml-1 text-sm text-gray-600">({rate.rating})</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
