import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group"
    >
      <Globe className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
      <span className="font-semibold text-foreground">
        {language === "ar" ? "EN" : "عربي"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
