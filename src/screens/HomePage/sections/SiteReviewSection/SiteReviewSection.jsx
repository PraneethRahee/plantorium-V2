import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const orbitImages = [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&q=80",
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=200&q=80",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=200&q=80",
  "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=200&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=200&q=80",
];

const rings = [
  { r: 250, angle: 180, size: 55 },
  { r: 350, angle: 210, size: 60 },
  { r: 450, angle: 170, size: 65 },
  { r: 550, angle: 190, size: 55 },
  { r: 650, angle: 200, size: 60 },
];

const CENTER_X = 900;
const CENTER_Y = 400;

// Mobile-specific center so only upper halves peek from the bottom
const MOBILE_CENTER_X = 450;
const MOBILE_CENTER_Y = 700;

// Mobile-specific ring positions so images sit at varied points on the arcs
const mobileRings = [
  { r: 250, angle: 220, size: 55 },
  { r: 350, angle: 260, size: 60 },
  { r: 450, angle: 300, size: 65 },
  { r: 550, angle: 280, size: 55 },
];

export const SiteReviewSection = () => {
  return (
    <section className="relative w-full bg-[#546232] overflow-hidden min-h-[75dvh] md:min-h-[450px] flex items-start md:items-center">
      {/* Mobile & tablet rings - bottom semicircles */}
      <div className="block md:hidden absolute inset-x-0 bottom-0 h-[55%] w-full pointer-events-none">
        <svg
          className="h-full w-full"
          viewBox="0 0 900 600"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
        >
          {mobileRings.map((ring, i) => {
            const rad = (ring.angle * Math.PI) / 180;
            const cx = MOBILE_CENTER_X + ring.r * Math.cos(rad);
            const cy = MOBILE_CENTER_Y + ring.r * Math.sin(rad);
            return (
              <g key={i}>
                <clipPath id={`orbit-clip-mobile-${i}`}>
                  <circle cx={cx} cy={cy} r={ring.size / 2} />
                </clipPath>
                <circle
                  cx={MOBILE_CENTER_X}
                  cy={MOBILE_CENTER_Y}
                  r={ring.r}
                  stroke="rgba(200,255,120,0.25)"
                  strokeWidth="1"
                />
                <image
                  href={orbitImages[i]}
                  x={cx - ring.size / 2}
                  y={cy - ring.size / 2}
                  width={ring.size}
                  height={ring.size}
                  clipPath={`url(#orbit-clip-mobile-${i})`}
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Desktop rings - original layout */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-[65vw] pointer-events-none">
        <svg
          className="absolute right-0 top-0 h-full w-full"
          viewBox="0 0 900 600"
          preserveAspectRatio="xMaxYMid slice"
          fill="none"
        >
          {rings.map((ring, i) => {
            const rad = (ring.angle * Math.PI) / 180;
            const cx = CENTER_X + ring.r * Math.cos(rad);
            const cy = CENTER_Y + ring.r * Math.sin(rad);
            return (
              <g key={i}>
                <clipPath id={`orbit-clip-${i}`}>
                  <circle cx={cx} cy={cy} r={ring.size / 2} />
                </clipPath>
                <circle
                  cx={CENTER_X}
                  cy={CENTER_Y}
                  r={ring.r}
                  stroke="rgba(200,255,120,0.25)"
                  strokeWidth="1"
                />
                <image
                  href={orbitImages[i]}
                  x={cx - ring.size / 2}
                  y={cy - ring.size / 2}
                  width={ring.size}
                  height={ring.size}
                  clipPath={`url(#orbit-clip-${i})`}
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="relative z-10 px-6 md:px-[150px] py-[80px] flex w-full justify-center md:justify-start">
        <div className="flex flex-col gap-10 max-w-[600px] w-full">
          <div className="flex flex-col gap-5 translate-y-[-1rem] animate-fade-in opacity-0 text-left">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[28px] leading-[120%] tracking-[0] align-middle text-white md:font-global-tokens-headings-h-1 md:font-[number:var(--global-tokens-headings-h-1-font-weight)] md:text-[length:var(--global-tokens-headings-h-1-font-size)] md:tracking-[var(--global-tokens-headings-h-1-letter-spacing)] md:leading-[var(--global-tokens-headings-h-1-line-height)] md:[font-style:var(--global-tokens-headings-h-1-font-style)]">
              Let&apos;s review your
              <br />
              site requirement
            </h2>
            <p className="whitespace-normal md:whitespace-nowrap [font-family:'Funnel_Sans',Helvetica] font-normal text-[16px] leading-[120%] tracking-[0] text-[#F1F2F4] align-middle md:text-[24px] md:text-white/70">
              Share basic details we&apos;ll assess feasibility and next step
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <Button className="group inline-flex justify-center items-center gap-[12px] md:gap-[18px] px-[18px] py-[14px] md:px-[25px] md:py-[19px] h-auto bg-[#d1f57c] rounded-[300px] hover:bg-[#c5e970] transition-all duration-300 w-full md:w-auto">
              <span className="relative inline-flex overflow-hidden [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#172b4d] text-sm md:text-lg tracking-[0] leading-[120%]">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Schedule Discussion
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Schedule Discussion
                </div>
              </span>
              <ArrowUpRightIcon className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#172b4d] transition-transform duration-500 group-hover:scale-150 group-hover:rotate-45" />
            </Button>

            <Button
              variant="outline"
              className="group/outline inline-flex justify-center items-center gap-[12px] md:gap-[18px] px-[18px] py-[14px] md:px-[25px] md:py-[19px] h-auto bg-transparent border border-white/40 rounded-[300px] hover:bg-white/10 transition-all duration-300 w-full md:w-auto"
            >
              <span className="relative inline-flex overflow-hidden [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-white text-sm md:text-lg tracking-[0] leading-[120%]">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover/outline:translate-y-[-160%] group-hover/outline:skew-y-12">
                  Request Call Back
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover/outline:translate-y-0 group-hover/outline:skew-y-0">
                  Request Call Back
                </div>
              </span>
              <ArrowUpRightIcon className="w-3 h-3 md:w-3.5 md:h-3.5 text-white/60 transition-transform duration-500 group-hover/outline:scale-150 group-hover/outline:rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
