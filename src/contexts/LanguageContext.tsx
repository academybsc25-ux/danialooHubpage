import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ar" | "en";

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

const translations: Translations = {
  connectWithMe: { ar: "تواصل معي", en: "Connect With Me" },
  comingSoon: { ar: "قريباً", en: "Coming Soon" },
  paidCourses: { ar: "دوراتي المدفوعة", en: "My Paid Courses" },
  accessPremiumCourses: { ar: "الوصول للدورات المميزة", en: "Access Premium Courses" },
  myPartners: { ar: "شركائي", en: "My Partners" },
  cryptoTools: { ar: "أدوات الكريبتو", en: "Crypto Tools" },
  paymentSolutions: { ar: "حلول الدفع", en: "Payment Solutions" },
  cryptoInfluencer: { ar: "مؤثر ومعلم في عالم الكريبتو", en: "Crypto Influencer & Educator" },
  allRightsReserved: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
  mexcDesc: { ar: "منصة تداول عالمية", en: "Global crypto exchange" },
  gateDesc: { ar: "منصة تداول آمنة", en: "Secure crypto trading platform" },
  binanceDesc: { ar: "أكبر منصة تداول في العالم", en: "World's largest crypto exchange" },
  academyDesc: { ar: "تعلم استراتيجيات تداول الكريبتو", en: "Learn crypto trading strategies" },
  smartContractDesc: { ar: "بناء العقود الذكية بسهولة", en: "Build smart contracts easily" },
  solCleanerDesc: { ar: "تنظيف محفظة سولانا", en: "Clean up your Solana wallet" },
  telemetryDesc: { ar: "تتبع محفظتك", en: "Track your crypto portfolio" },
  blumDesc: { ar: "تداول آلي للكريبتو", en: "Automated crypto trading" },
  bubblesDesc: { ar: "تصور حركة السوق", en: "Visualize crypto market movements" },
  myProjects: { ar: "مشاريعي", en: "My Projects" },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("ar");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
