import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Badge } from "../../../../components/ui/badge";
import BackgroundIcon from "../../../../assets/Background.svg";
import { SECTION_X_PADDING } from "../../../../constants/layoutSpacing";

const features = [
  {
    title: "Site-First Decisions",
    description: "We adapt to the reality of the terrain.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
  },
  {
    title: "Practical Plant Judgement",
    description: "Selecting species that actually survive.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
  },
  {
    title: "Clean Coordination",
    description: "Seamless integration with other vendors.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
  },
  {
    title: "Defined Responsibility",
    description: "No gray areas in ownership.",
    image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&q=80",
  },
];

export const ProjectAndInquirySection = () => {
  const badgeText = "Who We Work With";
  const heading = "Work with Havier to tackle your toughest.";
  const subheading =
    "No over-promising. We deliver exactly what's needed for commercial viability and aesthetic endurance.";

  const [activeIndex, setActiveIndex] = useState(0);
  const featureRefs = useRef([]);
  const animatedIn = useRef(new Set());
  const imageRef = useRef(null);
  const prevIndex = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const observers = [];

    featureRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          const id = index;

          if (entry.isIntersecting) {
            setActiveIndex(index);

            if (!animatedIn.current.has(id)) {
              gsap.fromTo(
                el,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
              );
              animatedIn.current.add(id);
            }
          }
        },
        { threshold: 0.4, rootMargin: "-20% 0px -20% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    if (prevIndex.current === activeIndex) return;
    const img = imageRef.current;
    if (!img) return;

    gsap.fromTo(
      img,
      { opacity: 0, scale: 1.1, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    prevIndex.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    featureRefs.current.forEach((el, index) => {
      if (!el) return;
      gsap.to(el, {
        opacity: index === activeIndex ? 1 : 0,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, [activeIndex]);

  return (
    <section
      id="projects"
      className={`flex flex-col w-full items-center justify-center ${SECTION_X_PADDING} pt-12 md:pt-[120px] pb-16 md:pb-[120px] bg-white overflow-x-clip`}
    >
      <header className="flex flex-col items-center gap-6 mb-[120px] translate-y-[-1rem] animate-fade-in opacity-0">
        <Badge
          variant="outline"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 lg:py-3 rounded-[300px] border-[#172b4d] lg:border-[#44546f] h-auto"
        >
          <span className="[font-family:'Funnel_Sans',Helvetica] lg:[font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[16px] lg:text-[18px] leading-[120%] lg:leading-[18px] tracking-[0] text-[#172b4d] lg:text-[#44546f] align-middle lg:capitalize">
            {badgeText}
          </span>
        </Badge>

        <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[28px] lg:text-[60px] leading-[120%] tracking-[0] text-[#172b4d] text-center align-middle">
          {heading}
        </h2>

        <p className="max-w-3xl [font-family:'Bricolage_Grotesque',Helvetica] lg:[font-family:'Funnel_Sans',Helvetica] font-normal text-[18px] lg:text-[24px] leading-[120%] tracking-[0] text-[#172b4d] lg:text-[#758195] text-center align-middle">
          {subheading}
        </p>
      </header>

      {/* Mobile & tablet: stacked image + text cards */}
      <div className="w-full mb-[80px] lg:hidden space-y-10">
        {features.map((feature, index) => (
          <article key={index} className="flex flex-col gap-3">
            <div className="w-full rounded-md overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[220px] sm:h-[260px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center justify-center w-[48px] h-[48px] sm:w-[48px] sm:h-[48px] rounded-md overflow-hidden">
                <img
                  src={BackgroundIcon}
                  alt={`${feature.title} icon`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[24px] leading-[120%] tracking-[0] text-[#172b4d] align-middle">
                {feature.title}
              </h3>
              <p className="[font-family:'Funnel_Sans',Helvetica] font-normal text-[16px] leading-[120%] tracking-[0] text-[#758195] align-middle">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop: original scroll-synced layout */}
      <div className="w-full mb-[120px] hidden lg:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[120px] items-start">
          <div className="order-2 lg:order-1 flex flex-col gap-[350px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            {features.map((feature, index) => (
              <article
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="flex flex-col gap-5 opacity-0 translate-y-10"
              >
                <div className="flex flex-col gap-[54px] justify-end h-full">
                  <div className="flex flex-col gap-3">
                    <div className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-md overflow-hidden lg:w-[72px] lg:h-[72px] lg:rounded-[6px]">
                      <img
                        src={BackgroundIcon}
                        alt={`${feature.title} icon`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[24px] md:text-[28px] lg:text-[54px] leading-[120%] tracking-[0] text-[#172b4d] align-middle">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'Funnel_Sans',Helvetica] font-normal text-[16px] md:text-[18px] lg:text-[24px] leading-[120%] tracking-[0] text-[#758195] align-middle">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="order-1 lg:order-2 lg:sticky lg:top-[120px] self-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="w-full aspect-[782/640] rounded-md overflow-hidden">
              {features[activeIndex] && (
                <img
                  ref={imageRef}
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
