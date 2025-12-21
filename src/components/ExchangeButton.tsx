import { ReactNode } from "react";

interface ExchangeButtonProps {
  href: string;
  name: string;
  color: string;
  icon?: ReactNode;
}

const ExchangeButton = ({ href, name, color, icon }: ExchangeButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
    >
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: color }}
      />
      <div 
        className="relative px-6 py-4 rounded-xl border border-border/50 bg-card/80 backdrop-blur-sm font-display font-semibold text-center transition-all duration-300 group-hover:border-transparent group-hover:scale-105 flex items-center justify-center gap-2"
        style={{ 
          boxShadow: `0 0 0 1px ${color}20`,
        }}
      >
        {icon && <span style={{ color }}>{icon}</span>}
        <span className="group-hover:text-foreground transition-colors">{name}</span>
      </div>
    </a>
  );
};

export default ExchangeButton;
