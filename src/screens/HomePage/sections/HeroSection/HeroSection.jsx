import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "../../../../components/ui/button"; 
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const navigationItems = [{ label: "Home" }, { label: "About Us" }, { label: "Projects" }];

const sliderImages = [
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80",
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&q=80",
  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80",
  "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=1920&q=80",
];

const statsData = [ 
  {
    value: "100+",
    label: "Over All Project",
  },
  {
    value: "30+",
    label: "Commercial & Residential",
  },
  {
    value: "12+",
    label: "Years of Experience",
  },
  {
    value: "100%",
    label: "Customer  Satisfaction",
  },
];

export const HeroSection = () => {
  const slidesRef = useRef([]);
  const currentSlideIndex = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const slides = slidesRef.current.filter(Boolean);
    if (slides.length === 0) return;

    slides.forEach((slide, index) => {
      if (index !== 0) {
        const img = slide.querySelector("img");
        if (img) {
          gsap.set(img, { scale: 2, top: "4em" });
        }
      }
    });

    function showSlide(index) {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const slide = slides[index];
      const img = slide.querySelector("img");

      gsap.to(img, {
        scale: 1,
        top: "0%",
        duration: 2,
        ease: "power3.inOut",
      });

      gsap.to(slide, {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
        duration: 2,
        ease: "power4.inOut",
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    }

    function resetToFirst() {
      if (isAnimating.current) return;
      isAnimating.current = true;

      for (let i = slides.length - 1; i >= 1; i--) {
        const slide = slides[i];
        const img = slide.querySelector("img");

        gsap.to(img, {
          scale: 2,
          top: "4em",
          duration: 2,
          ease: "power3.inOut",
        });

        gsap.to(slide, {
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
          duration: 2,
          ease: "power4.inOut",
          onComplete:
            i === 1
              ? () => {
                  isAnimating.current = false;
                }
              : undefined,
        });
      }

      currentSlideIndex.current = 0;
    }

    const autoPlay = setInterval(() => {
      if (isAnimating.current) return;

      if (currentSlideIndex.current < slides.length - 1) {
        showSlide(currentSlideIndex.current + 1);
        currentSlideIndex.current++;
      } else {
        resetToFirst();
      }
    }, 5000);

    return () => {
      clearInterval(autoPlay);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] md:min-h-screen overflow-hidden flex flex-col lg:justify-start"
    >
      <div className="absolute inset-0">
        {sliderImages.map((src, i) => (
          <div
            key={i}
            ref={(el) => (slidesRef.current[i] = el)}
            className="absolute inset-0 overflow-hidden"
            style={{
              clipPath:
                i === 0
                  ? "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)"
                  : "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
            }}
          >
            <img
              src={src}
              alt={`slide-${i + 1}`}
              className="absolute w-full h-full object-cover"
              style={{ top: 0 }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_40%,rgba(0,0,0,0.2)_100%)]" />
      <div className="relative z-10 flex flex-col h-full">
        <nav className="w-full px-3 sm:px-4 lg:px-[150px] pt-3 sm:pt-4 lg:pt-6 shrink-0 animate-fade-in opacity-0">
          <div className="flex items-center justify-between px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-3 bg-white rounded-[999px] border border-solid border-[#a7c463]">
            <div className="inline-flex items-center gap-2.5 sm:gap-3">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 bg-[100%_100%]">
                <img
                  className="absolute top-1/2 -translate-y-1/2 left-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14"
                  alt="Logo"
                  src="https://c.animaapp.com/mm91avyrvgFAYy/img/image-2-1.png"
                />
              </div>

              <img
                className="w-[100px] h-5 sm:w-[120px] sm:h-6 lg:w-[148px] lg:h-6"
                alt="Brand name"
                src="https://c.animaapp.com/mm91avyrvgFAYy/img/image-2.png"
              />
            </div>

            <div className="hidden lg:inline-flex items-center gap-[107px]">
              <nav className="inline-flex items-center gap-[29px]">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-center px-2 [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[18px] leading-[120%] tracking-[0] text-[#172b4d] text-center align-middle transition-all duration-300 hover:text-[#6b8f3c] hover:tracking-[0.08em]"
                  >
                    <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-[#6b8f3c] after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>

              <Button className="group inline-flex items-center gap-[16px] px-[22px] py-[15px] h-auto bg-[#d1f57c] rounded-[300px] hover:bg-[#c5e970] transition-all duration-300">
                <span className="relative inline-flex overflow-hidden [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-base lg:text-lg tracking-[0] leading-[1.3] text-black">
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

            <button className="flex lg:hidden items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#a7c463] bg-[#f6fde5]">
              <span className="sr-only">Open navigation</span>
              <div className="flex flex-col gap-1">
                <span className="h-0.5 w-4 bg-[#172b4d] rounded-full" />
                <span className="h-0.5 w-4 bg-[#172b4d] rounded-full" />
                <span className="h-0.5 w-4 bg-[#172b4d] rounded-full" />
              </div>
            </button>
          </div>
        </nav>

        <div className="relative flex flex-col flex-1 justify-end lg:justify-start px-4 pb-8 pt-4 sm:px-6 md:px-8 md:pb-12 lg:px-[150px] lg:pt-8 lg:pb-6">
          <div className="inline-flex flex-col items-start gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h1 className="max-w-[26rem] sm:max-w-[32rem] md:max-w-[40rem] lg:max-w-[852px] [font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[40px] md:text-[48px] lg:text-[72px] leading-[1.1] lg:leading-[100%] tracking-[0] text-white align-middle mb-4 md:mb-6">
              Reliable Planting 
              Execution
            </h1>

            <Button className="group w-full md:w-auto justify-center inline-flex items-center gap-2 md:gap-[18px] px-8 md:px-[25px] py-4 md:py-[19px] h-auto bg-[#d1f57c] rounded-full hover:bg-[#c5e970] transition-all duration-300 mb-6 md:mb-8">
              <span className="relative inline-flex overflow-hidden [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-black text-base sm:text-lg tracking-[0] leading-[21.6px]">
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

          <Card
            className="flex flex-col lg:flex-row items-stretch
            gap-3 sm:gap-4 lg:gap-0
            p-3 sm:p-4 lg:p-6
            bg-[#f6fde5] border-0 shadow-none rounded-none
            mb-4 sm:mb-6 md:mb-8
            translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]
            max-w-[710px] w-full lg:w-auto
            max-h-[44dvh] sm:max-h-[46dvh] md:max-h-none
            overflow-hidden"
          >
            <CardContent className="flex flex-col items-start gap-2.5 sm:gap-3 lg:gap-4 p-0">
              <img
                className="w-[96px] h-4 sm:w-[120px] sm:h-5 lg:w-[136px] lg:h-6"
                alt="Company logo"
                src="https://c.animaapp.com/mm91avyrvgFAYy/img/68353460ec4b1d80f6269120-marquee-logo-05-svg.svg"
              />

              <blockquote
                className="max-w-[540px]
                [font-family:'Bricolage_Grotesque',Helvetica] font-normal
                text-xs sm:text-sm md:text-base lg:text-[18px]
                leading-relaxed sm:leading-[150%] lg:leading-[120%]
                tracking-[0] text-[#2c3e5d] align-middle
                line-clamp-4 sm:line-clamp-5 md:line-clamp-6"
              >
                &quot;We came to them with a complex logistics
                <br />
                challenge. Not only did they understand it faster
                <br />
                than anyone else, they built a solution that&apos;s
                <br />
                saving us time, money, and emissions—every
                <br />
                single day.&quot;
              </blockquote>
            </CardContent>

            <div className="hidden lg:block mx-6 w-px self-stretch border-l border-dashed border-[#a7c463]" />

            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-3 sm:gap-4 lg:gap-8 lg:w-[193.09px] px-0 lg:px-8 py-1.5 sm:py-2 lg:py-0">
              <div className="w-[52px] h-[72px] sm:w-[60px] sm:h-[80px] lg:w-[72px] lg:h-[95px] rounded-[200px] bg-[url(https://c.animaapp.com/mm91avyrvgFAYy/img/682fc478e24a522dd72e41e2-customer-03-webp.png)] bg-cover bg-[50%_50%]" />

              <div className="self-stretch [font-family:'Funnel_Sans',Helvetica] font-semibold text-xs sm:text-sm lg:text-[16px] leading-[140%] lg:leading-[120%] tracking-[0] text-[#172b4d] align-middle">
                mark rowland
                <br />
                director of communications
              </div>
            </div>
          </Card>

          <div className="lg:hidden grid grid-cols-2 gap-4 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            {statsData.map((stat, index) => (
              <div key={index} className="space-y-1 px-3 py-2">
                <div className="font-medium text-2xl sm:text-3xl text-white">
                  {stat.value}
                </div>
                <div className="font-medium text-xs sm:text-sm text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

<div
  className="hidden lg:flex mt-auto mb-4 lg:mb-6 shrink-0
  w-full
  flex-wrap lg:flex-nowrap items-stretch
  py-4 lg:py-6
  bg-[#12121252] backdrop-blur-[2px]
  translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
>
  {statsData.map((stat, index) => (
    <div
      key={index}
      className="flex items-stretch flex-1 basis-1/2 lg:basis-auto
      border-b lg:border-b-0 border-white/15 last:border-b-0"
    >
      <div className="flex flex-col justify-center gap-5 px-4 py-3 lg:py-0">
        <div className="font-medium text-3xl lg:text-[54px] text-white whitespace-nowrap">
          {stat.value}
        </div>
        <div className="font-medium text-base lg:text-[28px] text-white">
          {stat.label}
        </div>
      </div>

      {index < statsData.length - 1 && (
        <div className="hidden lg:block w-px self-stretch bg-white/20" />
      )}
    </div>
  ))}
</div>
        </div>
      </div>
    </section>
  );
};
