import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Partners = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Life Insurance Companies with proper logos
  const lifeInsurance = [
    { name: "LIC", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766946582/Lic-removebg-preview_zwhztx.png" },
    { name: "HDFC Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932568/HDFC_Life-removebg-preview_roonq6.png" },
    { name: "ICICI Prudential", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932569/ICICIPrudential-removebg-preview_kafum0.png" },
    { name: "SBI Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932575/sbilife-removebg-preview_frimpq.png" },
    { name: "Kotak Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932568/Kotak_Life-removebg-preview_jrwgri.png" },
    { name: "TATA AIA", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932577/TataAIALife-removebg-preview_xntjb4.png" },
    { name: "Aditya Birla Sun Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932561/Aditya-Birla-Sun-Life-Insurance-removebg-preview_ggglxt.png" },
    { name: "Bajaj Allianz Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932562/bajaj-removebg-preview_j3zjnq.png" },
    { name: "PNB MetLife", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932569/PNBMetLife-removebg-preview_whzbdm.png" },
    { name: "Reliance Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932570/Reliance-removebg-preview_xs5glq.png" },
    { name: "Axis Max Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932562/Axis_Max-removebg-preview_cmocch.png" },
    { name: "Aviva Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932561/aviva-removebg-preview_qwqieo.png" },
    { name: "Shriram Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932576/ShriramLife-removebg-preview_gndrsj.png" },
    { name: "Bharti AXA Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932562/bharti-removebg-preview_vbzhm9.png" },
    { name: "Canara HSBC Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932563/CanaraLogo-removebg-preview_qyfui7.png" },
    { name: "Bandhan Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932562/BandhanLife-removebg-preview_pqs3zs.png" },
    { name: "Star Union", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932576/star-removebg-preview_kn29a8.png" },
    { name: "IndiaFirst Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932569/Indiafirst-removebg-preview_xbhquq.png" },
    { name: "Edelweiss Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932563/Edelweiss-removebg-preview_isfges.png" },
    { name: "Acko Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932561/Acko-removebg-preview_kcbl6v.png" },
    { name: "Go Digit Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932568/GoDigit-removebg-preview_pgxyuz.png" },
    { name: "Pramerica Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932569/pramerica-removebg-preview_rk6roy.png" },
    { name: "Generali Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932568/Generali-removebg-preview_dzw5c9.png" },
    { name: "Sahara Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932570/Sahara-removebg-preview_wiqdgm.png" },
    { name: "Credit Access", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932563/CreditAcess-removebg-preview_xdenxx.png" },
    { name: "Ageas Life", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766932561/ageas-removebg-preview_ybnel6.png" },
  ];

  // General Insurance Companies
  const generalInsurance = [
    { name: "Zuno General", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933172/zuno-general-insurance_is0uze.png" },
    { name: "TATA AIG", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933168/TATA_z9q7nj.png" },
    { name: "Universal Sompo", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933167/Universal_Sompo_General_Insurance_Company_Ltd._bbhqyq.png" },
    { name: "United India", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933167/United_India_ifqnm5.png" },
    { name: "Oriental Insurance", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933167/The_Oriental_Insurance_Company_Ltd.-removebg-preview_zqvgrk.png" },
    { name: "SBI General", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933166/SBI_General_Insurance_Company_Ltd._gru8bc.png" },
    { name: "Shriram General", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933165/Shriram-General-Insurance-_ombhli.png" },
    { name: "New India Assurance", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933166/The_New_India_Assurance_Company_Ltd.-removebg-preview_pvwdug.png" },
    { name: "Royal Sundaram", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933165/Royal_Sundaram_General_Insurance_Co._Ltd._t1stun.png" },
    { name: "Liberty General", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933158/Liberty-General-Insurance-Logo_r2hdvl.png" },
    { name: "Raheja QBE", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933158/Raheja_lrhrju.png" },
    { name: "Reliance General", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933159/reliance-general-insurance-logo_bld2jq.png" },
    { name: "IFFCO-TOKIO", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933158/IFFCO-TOKIO_General_Insurance_cdx0pl.png" },
    { name: "Navi General", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933158/Navi_General_Insurance_ql6aax.png" },
    { name: "Kshema General", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933158/Kshema_General_Insurance_Ltd._xyfrdu.png" },
    { name: "Navi General Ltd", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933158/Navi_General_Insurance_Ltd._hnvfxh.png" },
    { name: "Private", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933158/Private-removebg-preview_jryv76.png" },
    { name: "ICICI Lombard", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933157/icici-lombard_f04bls.png" },
    { name: "Magma HDI", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933158/magma-removebg_qtjunf.png" },
    { name: "Godrej", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933157/Godrej_yb0ytk.png" },
    { name: "Generali", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933157/Generali_tlbqqh.png" },
    { name: "HDFC ERGO", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933157/HDFC_ERGO_General_Insurance_Co._Ltd.-removebg-preview_xbhwvy.png" },
    { name: "Cholamandalam MS", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933156/Cholamandalam_MS_General_Insurance_Co._Ltd.-removebg-preview_p5mxld.png" },
    { name: "Bajaj Allianz", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933156/Bajaj_Allianz_General_Insurance_Co._Ltd.-removebg-preview_xgzk4z.png" },
    { name: "Go Digit", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766933156/Go-Digit-Logo_pxczdw.png" },
  ];

  // Mutual Fund Companies (AMCs)
  const mutualFunds = [
    { name: "360 ONE MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/360_ONE_MUTUAL_FUND_votcpk.png" },
    { name: "Abakkus MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Abakkus_Mutual_Fund_msu5cv.png" },
    { name: "Aditya Birla Sun Life MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Aditya_Birla_Sun_Life_Mutual_Fund_gribmb.png" },
    { name: "Angel One MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Angel_One_Mutual_Fund_lyykn0.png" },
    { name: "Axis MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Axis_Mutual_Fund_jpxvr4.png", bgColor: "bg-black" },
    { name: "Bajaj Finserv MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Bajaj_Finserv_Mutual_Fund_cgv8j6.png" },
    { name: "Bandhan MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830285/Bandhan_Mutual_Fund_gbbpp2.png" },
    { name: "Bank of India MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Bank_of_India_Mutual_Fund_ijzte5.png" },
    { name: "Baroda BNP Paribas MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Baroda_BNP_Paribas_Mutual_Fund_p46or8.png" },
    { name: "Canara Robeco MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Canara_Robeco_Mutual_Fund_zwxyeb.png" },
    { name: "Capitalmind MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Capitalmind_Mutual_Fund_hjfixb.png" },
    { name: "DSP MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/DSP_Mutual_Fund_yek60i.png" },
    { name: "Edelweiss MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830287/Edelweiss_Mutual_Fund_oingif.png" },
    { name: "Franklin Templeton MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830286/Franklin_Templeton_Mutual_Fund_jdrbpr.png" },
    { name: "Goldman Sachs MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830288/Goldman_Sachs_Mutual_Fund_usiere.png", bgColor: "bg-black" },
    { name: "Groww MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830294/Groww_Mutual_Fund_uakalz.png" },
    { name: "HDFC MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830294/HDFC_Mutual_Fund_fmq6yu.png" },
    { name: "Helios MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830295/Helios_Mutual_Fund_hegrza.png" },
    { name: "HSBC MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830295/HSBC_Mutual_Fund_udqdde.png" },
    { name: "ICICI Prudential MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830295/ICICI_Prudential_Mutual_Fund_eoyhng.png" },
    { name: "IDBI MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830295/IDBI_Mutual_Fund_mbjavx.png" },
    { name: "IIFCL MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830296/IIFCL_Mutual_Fund_jtual9.png" },
    { name: "IL&FS MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830296/IL_FS_Mutual_Fund_umicx7.png" },
    { name: "Invesco MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830298/Invesco_Mutual_Fund_ydiy48.png" },
    { name: "ITI MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830300/ITI_Mutual_Fund_xwck1p.png" },
    { name: "Jio BlackRock MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Jio_BlackRock_Mutual_Fund_gd9ma4.png" },
    { name: "JM Financial MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/JM_Financial_Mutual_Fund_wddtds.png" },
    { name: "Kotak Mahindra MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Kotak_Mahindra_Mutual_Fund_xjhw3r.png" },
    { name: "LIC MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/LIC_Mutual_Fund_zzqp4s.png" },
    { name: "Mirae Asset MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Mirae_Asset_Mutual_Fund_yd70vt.png" },
    { name: "Motilal Oswal MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Motilal_Oswal_Mutual_Fund_tfvbuw.png" },
    { name: "Navi MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Navi_Mutual_Fund_fx7mjq.png" },
    { name: "Nippon India MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830301/Nippon_India_Mutual_Fund_hrarjs.png" },
    { name: "NJ MF", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766830302/NJ_Mutual_Fund_nrhe1c.png" },
    { name: "Indian Post", image: "https://res.cloudinary.com/dbznj2cof/image/upload/v1766946542/india-post-logo-png_seeklogo-304806_vkyyj3.png" },
  ];

  const MarqueeRow = ({ 
    partners, 
    label, 
    reverse = false 
  }: { 
    partners: { name: string; image: string; bgColor?: string }[]; 
    label: string;
    reverse?: boolean;
  }) => {
    const [isPaused, setIsPaused] = React.useState(false);
    const [selectedPartner, setSelectedPartner] = React.useState<string | null>(null);

    const handleCardClick = (partnerName: string) => {
      if (selectedPartner === partnerName) {
        setSelectedPartner(null);
        setIsPaused(false);
      } else {
        setSelectedPartner(partnerName);
        setIsPaused(true);
      }
    };

    return (
      <div className="mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-1 bg-primary/10 rounded-full">
            {label}
          </span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-primary/30" />
        </div>
        <div 
          className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
          style={{ 
            animationPlayState: isPaused ? 'paused' : 'running',
            width: 'max-content'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setSelectedPartner(null); }}
        >
          <div className="flex shrink-0 gap-3 sm:gap-4 md:gap-6 items-center">
            {partners.map((partner, index) => (
              <div
                key={`row-${index}`}
                onClick={() => handleCardClick(partner.name)}
                className={`flex-shrink-0 border rounded-xl px-3 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] h-16 sm:h-20 md:h-24 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                  partner.bgColor ? partner.bgColor : 'bg-muted/30'
                } ${
                  selectedPartner === partner.name 
                    ? 'border-primary bg-primary/10 scale-105' 
                    : 'border-border/60 hover:border-primary/50 hover:bg-muted/40'
                }`}
                title={partner.name}
              >
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className={`object-contain [filter:drop-shadow(0_2px_6px_hsl(var(--foreground)/0.25))] transition-all duration-300 ${
                    selectedPartner === partner.name 
                      ? 'max-h-6 sm:max-h-8 md:max-h-10 max-w-[80px] sm:max-w-[100px] md:max-w-[140px]' 
                      : 'max-h-10 sm:max-h-14 md:max-h-16 max-w-[100px] sm:max-w-[130px] md:max-w-[170px]'
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-xs text-foreground/60 font-medium text-center leading-tight">${partner.name}</span>`;
                  }}
                />
                {selectedPartner === partner.name && (
                  <span className="text-[10px] sm:text-xs font-medium text-primary mt-1 text-center leading-tight animate-fade-in">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="flex shrink-0 gap-3 sm:gap-4 md:gap-6 items-center ml-3 sm:ml-4 md:ml-6">
            {partners.map((partner, index) => (
              <div
                key={`row-dup-${index}`}
                onClick={() => handleCardClick(partner.name)}
                className={`flex-shrink-0 border rounded-xl px-3 sm:px-5 md:px-6 py-3 sm:py-4 md:py-5 min-w-[120px] sm:min-w-[150px] md:min-w-[200px] h-16 sm:h-20 md:h-24 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                  partner.bgColor ? partner.bgColor : 'bg-muted/30'
                } ${
                  selectedPartner === partner.name 
                    ? 'border-primary bg-primary/10 scale-105' 
                    : 'border-border/60 hover:border-primary/50 hover:bg-muted/40'
                }`}
                title={partner.name}
              >
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className={`object-contain [filter:drop-shadow(0_2px_6px_hsl(var(--foreground)/0.25))] transition-all duration-300 ${
                    selectedPartner === partner.name 
                      ? 'max-h-6 sm:max-h-8 md:max-h-10 max-w-[80px] sm:max-w-[100px] md:max-w-[140px]' 
                      : 'max-h-10 sm:max-h-14 md:max-h-16 max-w-[100px] sm:max-w-[130px] md:max-w-[170px]'
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<span class="text-xs text-foreground/60 font-medium text-center leading-tight">${partner.name}</span>`;
                  }}
                />
                {selectedPartner === partner.name && (
                  <span className="text-[10px] sm:text-xs font-medium text-primary mt-1 text-center leading-tight animate-fade-in">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Leading Insurers & Asset Management Company for your financial freedom.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Strong gradient overlays for smooth fade/glassmorphism effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* First row - Life Insurance */}
        <MarqueeRow partners={lifeInsurance} label="Life Insurance" />

        {/* Second row - General Insurance */}
        <MarqueeRow partners={generalInsurance} label="General Insurance" reverse />

        {/* Third row - Mutual Fund */}
        <MarqueeRow partners={mutualFunds} label="Mutual Funds & Indian Post" />
      </div>
    </section>
  );
};

export default Partners;
