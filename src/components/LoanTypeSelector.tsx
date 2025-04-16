
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Building, Briefcase } from "lucide-react";

interface LoanType {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const loanTypes: LoanType[] = [
  {
    id: "purchase",
    name: "Purchase",
    icon: <Home className="h-5 w-5" />,
  },
  {
    id: "refinance",
    name: "Refinance",
    icon: <Building className="h-5 w-5" />,
  },
  {
    id: "equity",
    name: "Home Equity",
    icon: <Briefcase className="h-5 w-5" />,
  },
];

interface LoanTypeSelectorProps {
  onSelect: (loanType: string) => void;
}

export function LoanTypeSelector({ onSelect }: LoanTypeSelectorProps) {
  const [selectedType, setSelectedType] = useState<string>("purchase");

  const handleSelect = (loanTypeId: string) => {
    setSelectedType(loanTypeId);
    onSelect(loanTypeId);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-medium text-sm">Loan Purpose</h3>
      <div className="flex flex-wrap gap-2">
        {loanTypes.map((type) => (
          <Button
            key={type.id}
            variant={selectedType === type.id ? "default" : "outline"}
            className={cn(
              "flex-1 flex items-center gap-2",
              selectedType === type.id
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10"
            )}
            onClick={() => handleSelect(type.id)}
          >
            {type.icon}
            {type.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
