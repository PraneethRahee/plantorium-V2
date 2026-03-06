import { ArrowUpRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const socialLinks = [
  {
    name: "Instagram",
    hoverClass: "hover:text-[#E4405F]",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    hoverClass: "hover:text-[#1877F2]",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    hoverClass: "hover:text-[#0A66C2]",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
  {
    name: "X",
    hoverClass: "hover:text-black",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export const FooterSection = () => {
  return (
    <footer className="relative w-full bg-[#f6fde5] overflow-hidden">
      <div className="px-6 md:px-[150px] pt-[80px] pb-[20px]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6 max-w-[500px]">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 shrink-0">
                <div className="w-14 h-14 rounded-full bg-[url(https://c.animaapp.com/mm91avyrvgFAYy/img/image-1.png)] bg-[100%_100%]">
                  <img
                    className="w-14 h-14 rounded-full"
                    alt="Plantorium logo"
                    src="https://c.animaapp.com/mm91avyrvgFAYy/img/image-2-1.png"
                  />
                </div>
              </div>
              <span className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#2d3b18] text-3xl leading-tight">
                Plantorium
              </span>
            </div>

            <p className="[font-family:'Funnel_Sans',Helvetica] text-[#2d3b18]/60 text-lg leading-relaxed">
              Working together to protect our planet and build a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-2 border-t border-l border-[#c5d0ab]">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className={`flex items-center justify-center w-[260px] h-[140px] border-b border-r border-[#c5d0ab] text-[#2d3b18] hover:bg-[#e8f0cc] transition-all duration-300 ${social.hoverClass} [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:hover:scale-150`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <Button className="group w-fit inline-flex items-center gap-4 px-8 py-4 h-auto bg-[#d1f57c] rounded-[300px] hover:bg-[#c5e970] transition-all duration-300 border border-[#b5d96a]">
            <span className="relative inline-flex overflow-hidden [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#2d3b18] text-lg tracking-[0] leading-[1.2]">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                Contact Us
              </div>
              <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Contact Us
              </div>
            </span>
            <ArrowUpRightIcon className="w-4 h-4 text-[#2d3b18] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>
      </div>

      <div className="relative h-[200px] md:h-[320px] overflow-hidden pointer-events-none select-none">
        <p
          className="[font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#3d4f1f] leading-[100%] whitespace-nowrap text-[160px] md:text-[240px] text-center capitalize"
          style={{ letterSpacing: "12px" }}
        >
          Plant
          <span
            className="inline bg-cover bg-center"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            o
          </span>
          rium
        </p>
      </div>
    </footer>
  );
};
