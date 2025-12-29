import { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ComingSoonLinkProps {
  icon: ReactNode;
  label: string;
}

const ComingSoonLink = ({ icon, label }: ComingSoonLinkProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="relative flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 border border-border/30 opacity-60 cursor-not-allowed">
      <span className="text-muted-foreground">{icon}</span>
      <span className="font-medium text-muted-foreground">{label}</span>
      <span className="absolute -top-2 -right-2 px-2 py-0.5 text-xs font-bold rounded-full bg-secondary text-secondary-foreground animate-pulse">
        {t("comingSoon")}
      </span>
    </div>
  );
};

export default ComingSoonLink;
