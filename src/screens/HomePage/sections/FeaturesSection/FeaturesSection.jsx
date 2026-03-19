import { Badge } from "../../../../components/ui/badge";

const partnerLogos = [
  { name: "Notion", src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Google", src: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png" },
  { name: "Slack", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" },
  { name: "Spotify", src: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png" },
  { name: "Stripe", src: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "GitHub", src: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" },
  { name: "Airbnb", src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
];

export const FeaturesSection = () => {
  return (
    <section
      id="about"
      className="flex w-full items-start justify-center h-[100dvh] md:h-auto pt-16 pb-8 md:py-[60px] bg-[#f6fde5] overflow-hidden"
    >
      <div className="flex flex-col flex-1 max-w-xs md:max-w-none mx-auto items-center gap-6 md:gap-10 px-4 md:px-[150px] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <Badge
          variant="outline"
          className="inline-flex items-center justify-center gap-2 px-4 py-1.5 md:py-3 rounded-[999px] border-[#172b4d] bg-transparent hover:bg-transparent"
        >
          <span className="[font-family:'Funnel_Sans',Helvetica] font-semibold text-[16px] leading-[120%] tracking-[0] text-[#172b4d] align-middle">
            Trusted Partners
          </span>
        </Badge>

        <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[28px] md:text-[40px] lg:text-[60px] leading-[120%] tracking-[0] text-[#172b4d] text-center align-middle max-w-[16rem] sm:max-w-[20rem] md:max-w-none">
          Work with Havier to tackle your toughest.
        </h2>

        <div className="w-full mt-4 md:mt-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] pb-2 md:pb-8">
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-3 lg:flex lg:flex-wrap justify-center items-center">
          {partnerLogos.map((logo, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 md:px-6"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="w-[80px] h-[80px] md:w-[72px] md:h-[72px] lg:w-[54px] lg:h-[54px] object-contain opacity-100 md:opacity-80 grayscale"
              />
              {/* <span className="text-[13px] font-bold tracking-wide uppercase whitespace-nowrap text-[#4a7c10] opacity-60">
                {logo.name}
              </span> */}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
