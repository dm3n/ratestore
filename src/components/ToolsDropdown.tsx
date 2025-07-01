
import { useState } from "react";
import { ChevronDown, Calculator, PiggyBank, TrendingUp, Home, FileText, DollarSign } from "lucide-react";
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
    name: "Mortgage Calculator",
    description: "Calculate monthly payments and total costs",
    icon: Calculator,
    href: "/tools/mortgage-calculator",
    category: "calculators"
  },
  {
    name: "Refinance Calculator",
    description: "Compare current vs new loan terms",
    icon: TrendingUp,
    href: "/refinance",
    category: "calculators"
  },
  {
    name: "Renewal Calculator",
    description: "Compare renewal options and maximize savings",
    icon: RefreshCw,
    href: "/tools/renewal",
    category: "calculators"
  },
  {
    name: "Affordability Calculator",
    description: "Determine how much house you can afford",
    icon: Home,
    href: "/tools/affordability",
    category: "planning"
  },
  {
    name: "Down Payment Calculator",
    description: "Plan your down payment strategy",
    icon: PiggyBank,
    href: "/tools/down-payment",
    category: "planning"
  },
  {
    name: "Amortization Schedule",
    description: "View detailed payment breakdown",
    icon: FileText,
    href: "/tools/amortization",
    category: "analysis"
  },
  {
    name: "Extra Payment Calculator",
    description: "See impact of additional payments",
    icon: DollarSign,
    href: "/tools/extra-payment",
    category: "analysis"
  }
];

const categoryLabels = {
  calculators: "Calculators",
  planning: "Planning Tools",
  analysis: "Analysis Tools"
};

export function ToolsDropdown() {
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
        {/* View All Link */}
        <DropdownMenuItem asChild className="p-0 mb-2">
          <Link 
            to="/tools"
            className="flex items-center gap-3 p-3 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer border border-primary/20"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-md flex items-center justify-center">
              <Calculator className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-primary">View All Calculators</div>
              <div className="text-xs text-muted-foreground mt-0.5">Browse our complete suite of tools</div>
            </div>
          </Link>
        </DropdownMenuItem>
        
        {Object.entries(groupedTools).map(([category, categoryTools], index) => (
          <div key={category}>
            <DropdownMenuSeparator className="my-2" />
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
