import profileImage from "@/assets/danialoo-profile.jpg";
import SocialLink from "@/components/SocialLink";
import PartnerCard from "@/components/PartnerCard";
import { Sparkles, Bot, BarChart3 } from "lucide-react";
import { 
  TikTokIcon, 
  YouTubeIcon, 
  TelegramIcon, 
  BinanceIcon, 
  GateIcon, 
  RedotPayIcon,
  MEXCIcon,
  CryptoBubblesIcon,
  SmartContractIcon,
  PaidCoursesIcon
} from "@/components/icons/BrandIcons";

const Index = () => {
  const socialLinks = [
    { href: "https://www.tiktok.com/@danialoo5", icon: <TikTokIcon className="w-6 h-6" />, label: "TikTok", color: "secondary" as const },
    { href: "https://youtube.com/@danialoocrypto", icon: <YouTubeIcon className="w-6 h-6" />, label: "YouTube", color: "primary" as const },
    { href: "https://t.me/danialoocrypto", icon: <TelegramIcon className="w-6 h-6" />, label: "Telegram", color: "primary" as const },
  ];

  const partners = [
    { href: "https://www.mexc.com/acquisition/custom-sign-up?shareCode=mexc-2rEsx", name: "MEXC", description: "Global crypto exchange", icon: <MEXCIcon className="w-6 h-6" /> },
    { href: "https://www.gate.com/signup?ref_type=103&ref=UQARAF9X", name: "Gate.io", description: "Secure crypto trading platform", icon: <GateIcon className="w-6 h-6" /> },
    { href: "https://accounts.binance.com/ar/register?ref=YL1K0MEE", name: "Binance", description: "World's largest crypto exchange", icon: <BinanceIcon className="w-6 h-6" /> },
    { href: "https://100tokensacademy.site/", name: "100 Tokens Academy", description: "Learn crypto trading strategies", icon: <PaidCoursesIcon className="w-6 h-6" /> },
    { href: "https://bnb-smart-contract-builder.vercel.app/", name: "BNB Smart Contract", description: "Build smart contracts easily", icon: <SmartContractIcon className="w-6 h-6" /> },
  ];

  const tools = [
    { href: "https://sol-cleaner.com/?ref=K2fS25GG_", name: "Sol Cleaner", description: "Clean up your Solana wallet", icon: <Sparkles className="w-6 h-6" /> },
    { href: "https://app.telemetry.io/@91fib", name: "Telemetry", description: "Track your crypto portfolio", icon: <BarChart3 className="w-6 h-6" /> },
    { href: "https://t.me/BlumCryptoTradingBot?start=FckH4EeI5m", name: "Blum Trading Bot", description: "Automated crypto trading", icon: <Bot className="w-6 h-6" /> },
    { href: "https://cryptobubbles.net/", name: "Crypto Bubbles", description: "Visualize crypto market movements", icon: <CryptoBubblesIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary blur-2xl opacity-50 animate-pulse-glow" />
            <img
              src={profileImage}
              alt="Danialoo Crypto"
              className="relative w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-primary/50 glow-border animate-float"
            />
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">DANIALOO</span>{" "}
            <span className="text-primary glow-text">CRYPTO</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
            Crypto Influencer & Educator
          </p>
        </header>

        {/* Social Media Links */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="font-display text-2xl font-semibold text-center mb-8 text-foreground">
            Connect With Me
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} {...link} />
            ))}
          </div>
        </section>

        {/* Paid Courses Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h2 className="font-display text-2xl font-semibold text-center mb-8 text-foreground">
            My <span className="text-primary glow-text">Paid Courses</span>
          </h2>
          <div className="flex justify-center">
            <a
              href="https://t.me/danialoocrypto/2927"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber flex items-center gap-3 text-lg px-8 py-4"
            >
              <PaidCoursesIcon className="w-7 h-7" />
              <span>Access Premium Courses</span>
            </a>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h2 className="font-display text-2xl font-semibold text-center mb-8 text-foreground">
            My <span className="text-secondary glow-text-pink">Partners</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {partners.map((partner) => (
              <PartnerCard key={partner.name} {...partner} />
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h2 className="font-display text-2xl font-semibold text-center mb-8 text-foreground">
            Crypto <span className="text-primary glow-text">Tools</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {tools.map((tool) => (
              <PartnerCard key={tool.name} {...tool} />
            ))}
          </div>
        </section>

        {/* Payment Platform */}
        <section className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <h2 className="font-display text-2xl font-semibold text-center mb-8 text-foreground">
            Payment <span className="text-secondary glow-text-pink">Solutions</span>
          </h2>
          <div className="flex justify-center">
            <a
              href="https://wap.redotpay.com/en/invite/?referralId=heb8p"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-pink flex items-center gap-3 text-lg"
            >
              <RedotPayIcon className="w-6 h-6" />
              <span>RedotPay</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Danialoo Crypto. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
