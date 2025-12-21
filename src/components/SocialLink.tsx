import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  color?: "primary" | "secondary";
}

const SocialLink = ({ href, icon, label, color = "primary" }: SocialLinkProps) => {
  const colorClasses = color === "primary" 
    ? "border-primary/50 text-primary hover:bg-primary/20 hover:border-primary hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)]" 
    : "border-secondary/50 text-secondary hover:bg-secondary/20 hover:border-secondary hover:shadow-[0_0_25px_hsl(var(--secondary)/0.5)]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 px-6 py-4 rounded-xl border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${colorClasses}`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-medium">{label}</span>
    </a>
  );
};

export default SocialLink;
