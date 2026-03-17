import { Button } from "../../../../components/ui/button";

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=900&q=80",
    alt: "Garden landscape design",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80",
    alt: "Modern courtyard planting",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80&sat=-50",
    alt: "Lush green garden path",
  },
  {
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=900&q=80&sat=50",
    alt: "Urban planting project",
  },
  {
    src: "https://images.unsplash.com/photo-1438109491414-7198515b166b?w=900&q=80",
    alt: "Botanical installation",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80&sat=20",
    alt: "Residential landscape",
  },
];

const colLeft = projectImages.slice(0, 3);
const colRight = projectImages.slice(3, 6);

const IMAGE_HEIGHT = 220;
const GAP = 16;
const VISIBLE_COUNT = 3;
const containerHeight = VISIBLE_COUNT * IMAGE_HEIGHT + (VISIBLE_COUNT - 1) * GAP;

export const LatestProjectSnapshotSection = () => {
  return (
    <section className="w-full flex items-stretch lg:translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .snapshot-scroll-up {
          animation: scroll-up 15s linear infinite;
        }
        .snapshot-scroll-down {
          animation: scroll-down 15s linear infinite;
        }
      `}</style>

      {/* Mobile & Tablet layout */}
      <div className="w-full h-screen bg-[#546232] px-6 py-8 md:px-10 md:py-10 lg:hidden">
        <div className="flex flex-col h-full gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[28px] leading-[120%] tracking-[0] text-white align-middle">
              Latest Project Snapshot
            </h2>
            <p className="[font-family:'Funnel_Sans',Helvetica] font-normal text-[16px] leading-[120%] tracking-[0] text-[#F1F2F4] align-middle">
              Share basic details we&apos;ll assess feasibility and next step
            </p>
          </div>

          <div className="flex justify-center">
            <Button className="group inline-flex items-center justify-center gap-[12px] px-6 py-[14px] h-auto bg-[#d1f57c] rounded-[999px] hover:bg-[#c5e970] transition-all duration-300 w-full">
              <span className="relative inline-flex overflow-hidden [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#172b4d] text-base md:text-lg leading-[1.2]">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Contact Us
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Contact Us
                </div>
              </span>
              <img
                className="w-3.5 h-3.5 transition-transform duration-500 group-hover:scale-150 group-hover:rotate-45"
                alt="Icon"
                src="https://c.animaapp.com/mm91avyrvgFAYy/img/icon.svg"
              />
            </Button>
          </div>

          <div className="mt-4 flex-1 min-h-0">
            <div className="h-full grid grid-cols-2 grid-rows-3 gap-3">
              {projectImages.map((img, i) => (
                <div key={i} className="w-full h-full rounded-lg overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout (unchanged) */}
      <div className="hidden lg:flex w-full h-screen bg-[#546232] px-6 md:px-[150px] items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center w-full">
          <div className="flex flex-col gap-[54px]">
            <div className="flex flex-col gap-5">
              <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[72px] leading-[100%] tracking-[-2px] text-white align-middle">
                Latest Project Snapshot
              </h2>
              <p className="[font-family:'Funnel_Sans',Helvetica] font-normal text-[24px] leading-[120%] tracking-[0] text-white align-middle">
                Share basic details we&apos;ll assess feasibility and next step
              </p>
            </div>

            <Button className="group inline-flex items-center gap-[18px] px-[25px] py-[19px] h-auto bg-[#d1f57c] rounded-[300px] hover:bg-[#c5e970] transition-all duration-300 w-fit">
              <span className="relative inline-flex overflow-hidden [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#172b4d] text-lg tracking-[0] leading-[21.6px]">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Contact Us
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Contact Us
                </div>
              </span>
              <img
                className="w-3.5 h-3.5 transition-transform duration-500 group-hover:scale-150 group-hover:rotate-45"
                alt="Icon"
                src="https://c.animaapp.com/mm91avyrvgFAYy/img/icon.svg"
              />
            </Button>
          </div>

          <div className="overflow-hidden" style={{ height: containerHeight }}>
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="scroll-col overflow-hidden">
                <div className="snapshot-scroll-up flex flex-col">
                  {[...colLeft, ...colLeft].map((img, i) => (
                    <div
                      key={i}
                      className="w-full shrink-0 rounded-lg overflow-hidden"
                      style={{ height: IMAGE_HEIGHT, marginBottom: GAP }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="scroll-col overflow-hidden">
                <div className="snapshot-scroll-down flex flex-col">
                  {[...colRight, ...colRight].map((img, i) => (
                    <div
                      key={i}
                      className="w-full shrink-0 rounded-lg overflow-hidden"
                      style={{ height: IMAGE_HEIGHT, marginBottom: GAP }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
