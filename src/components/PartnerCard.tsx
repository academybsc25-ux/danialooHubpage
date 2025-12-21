import { ReactNode } from "react";

interface PartnerCardProps {
  href: string;
  name: string;
  description: string;
  icon?: ReactNode;
}

const PartnerCard = ({ href, name, description, icon }: PartnerCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-cyber group block"
    >
      <div className="flex items-start gap-4">
        {icon && <span className="text-3xl text-primary">{icon}</span>}
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <svg
          className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </a>
  );
};

export default PartnerCard;
