
import { useState } from "react";
import { ChevronDown, Calculator, TrendingUp, DollarSign, PiggyBank, Target, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Tool {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  category: "calculators" | "planning" | "analysis";
}

const tools: Tool[] = [
  {
    name: "Compound Interest Calculator",
    description: "Calculate compound growth over time",
    icon: Calculator,
    href: "/tools/compound-interest",
    category: "calculators"
  },
  {
    name: "Debt Payoff Calculator",
    description: "Plan your debt elimination strategy",
    icon: TrendingUp,
    href: "/tools/debt-payoff",
    category: "calculators"
  },
  {
    name: "ROI Calculator",
    description: "Calculate return on investment",
    icon: BarChart3,
    href: "/tools/roi-calculator",
    category: "analysis"
  },
  {
    name: "Retirement Calculator",
    description: "Plan for your retirement needs",
    icon: Target,
    href: "/tools/retirement",
    category: "planning"
  },
  {
    name: "Emergency Fund Calculator",
    description: "Determine your emergency savings goal",
    icon: PiggyBank,
    href: "/tools/emergency-fund",
    category: "planning"
  },
  {
    name: "Loan Comparison Tool",
    description: "Compare different loan options",
    icon: DollarSign,
    href: "/tools/loan-comparison",
    category: "analysis"
  }
];

const categoryLabels = {
  calculators: "Financial Calculators",
  planning: "Planning Tools",
  analysis: "Analysis Tools"
};

export function FinancialToolsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {} as Record<string, Tool[]>);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary cursor-pointer outline-none">
        <span>Tools</span>
        <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-2 bg-background border shadow-lg" align="start" sideOffset={8}>
        {Object.entries(groupedTools).map(([category, categoryTools], index) => (
          <div key={category}>
            {index > 0 && <DropdownMenuSeparator className="my-2" />}
            <DropdownMenuLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 py-1">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              {categoryTools.map((tool) => (
                <DropdownMenuItem key={tool.name} asChild className="p-0">
                  <Link 
                    to={tool.href}
                    className="flex items-start gap-3 p-3 rounded-md hover:bg-accent transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                      <tool.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-foreground">{tool.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{tool.description}</div>
                    </div>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
