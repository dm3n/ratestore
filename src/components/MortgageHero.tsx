import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon, TrendingUp, ArrowRight } from "lucide-react";

interface MortgageHeroProps {
  badge: {
    text: string;
    icon: LucideIcon;
    color: string; // e.g., "blue", "green", "purple"
  };
  title: string;
  subtitle?: string;
  description: string;
  rate: {
    value: string;
    label: string;
    sublabel?: string;
  };
  stats?: Array<{
    value: string;
    label: string;
    sublabel?: string;
  }>;
  cta?: {
    primary?: {
      text: string;
      href: string;
    };
    secondary?: {
      text: string;
      href: string;
    };
  };
  gradientColors?: {
    from: string;
    to: string;
  };
}

export const MortgageHero = ({
  badge,
  title,
  subtitle,
  description,
  rate,
  stats,
  cta,
  gradientColors = { from: "blue-50", to: "indigo-50" }
}: MortgageHeroProps) => {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
      teal: "bg-teal-100 text-teal-700 border-teal-200",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
      yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
      red: "bg-red-100 text-red-700 border-red-200",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getStatColor = (index: number) => {
    const colors = ["blue-600", "green-600", "purple-600", "orange-600"];
    return colors[index % colors.length];
  };

  return (
    <section className={`relative bg-gradient-to-br from-${gradientColors.from} via-white to-${gradientColors.to} py-20 overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc=')] opacity-40"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Hero Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Badge variant="outline" className={`${getColorClasses(badge.color)} px-4 py-2 text-sm`}>
              <badge.icon className="h-4 w-4 mr-2" />
              {badge.text}
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              {title}
              {subtitle && <span className="block">{subtitle}</span>}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Stats Grid or Rate Display */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            {stats && stats.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/20 text-center">
                  <div className={`text-4xl font-bold text-${getStatColor(0)} mb-2`}>{rate.value}</div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{rate.label}</div>
                  {rate.sublabel && <div className="text-xs text-muted-foreground">{rate.sublabel}</div>}
                </div>
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/20 text-center">
                    <div className={`text-4xl font-bold text-${getStatColor(index + 1)} mb-2`}>{stat.value}</div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</div>
                    {stat.sublabel && <div className="text-xs text-muted-foreground">{stat.sublabel}</div>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white/20 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{rate.value}</div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{rate.label}</div>
                  {rate.sublabel && <div className="text-xs text-muted-foreground">{rate.sublabel}</div>}
                </div>
              </div>
            )}
          </motion.div>

          {/* CTA Section */}
          {cta && (cta.primary || cta.secondary) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Compare Rates?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Don't settle for the first offer. Compare rates and save thousands on your mortgage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {cta.primary && (
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
                    <Link to={cta.primary.href}>
                      <TrendingUp className="h-5 w-5 mr-2" />
                      {cta.primary.text}
                    </Link>
                  </Button>
                )}
                {cta.secondary && (
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8">
                    <Link to={cta.secondary.href}>
                      {cta.secondary.text}
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Link>
                  </Button>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};