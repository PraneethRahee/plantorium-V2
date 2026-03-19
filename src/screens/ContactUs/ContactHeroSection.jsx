import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";

const CONTACT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80";

const navigationItems = [
  { label: "Home", targetId: "home" },
  { label: "About Us", targetId: "about" },
  { label: "Projects", targetId: "projects" },
];

export const ContactHeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const hamburgerButtonRef = useRef(null);
  const firstMenuItemRef = useRef(null);

  const handleNavClick = (label) => {
    const targetId =
      label === "Home" ? "home" : label === "About Us" ? "about" : "projects";

    if (window.location.pathname === "/") {
      setIsMenuOpen(false);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate("/", {
      state: { scrollTo: targetId },
    });
    setIsMenuOpen(false);
  };

  const handleContactCta = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    const t = window.setTimeout(() => {
      firstMenuItemRef.current?.focus?.();
    }, 0);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) return;
    hamburgerButtonRef.current?.focus?.();
  }, [isMenuOpen]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* 60% height hero area containing image, nav, and text */}
      <div className="relative w-full h-[60vh] min-h-[320px]">
        {/* Background image + overlay */}
        <img
          src={CONTACT_HERO_IMAGE}
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.5)_40%,rgba(0,0,0,0.6)_100%)]" />

        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-[150px] pt-4 sm:pt-5 lg:pt-6">
        <div className="flex items-center justify-between px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-3 bg-white rounded-[300px] border border-solid border-[#a7c463]">
          <div className="inline-flex items-center gap-2.5 sm:gap-3">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 bg-[100%_100%]">
              <img
                className="absolute top-1/2 -translate-y-1/2 left-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14"
                alt="Logo"
                src="https://c.animaapp.com/mm91avyrvgFAYy/img/image-2-1.png"
                loading="eager"
                decoding="async"
              />
            </div>

            <img
              className="w-[100px] h-5 sm:w-[120px] sm:h-6 lg:w-[148px] lg:h-6"
              alt="Brand name"
              src="https://c.animaapp.com/mm91avyrvgFAYy/img/image-2.png"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="hidden lg:flex items-center gap-[80px]">
            <div className="inline-flex items-center gap-[29px]">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item.label)}
                  className="flex items-center justify-center px-2 [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[18px] leading-[120%] tracking-[0] text-[#172b4d] text-center align-middle transition-all duration-300 hover:text-[#6b8f3c]"
                >
                  <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-[#6b8f3c] after:origin-center after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <Button
              className="group inline-flex items-center gap-[16px] px-[22px] py-[15px] h-auto bg-[#d1f57c] rounded-[300px] hover:bg-[#c5e970] transition-all duration-300"
              type="button"
              onClick={handleContactCta}
            >
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

          <button
            ref={hamburgerButtonRef}
            type="button"
            aria-label="Open navigation"
            aria-expanded={isMenuOpen}
            aria-controls="contact-mobile-navigation"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="flex lg:hidden items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#a7c463] bg-[#f6fde5]"
          >
            <span className="sr-only">Open navigation</span>
            <Menu className="w-5 h-5 text-[#546232]" aria-hidden="true" />
          </button>
        </div>
      </nav>

        {/* Mobile / tablet nav drawer – match HeroSection style */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[80] bg-black/85 backdrop-blur-sm transition-opacity duration-200 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
        <aside
          id="contact-mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`fixed top-0 right-0 z-[90] h-[100dvh] w-[min(380px,90vw)] bg-[#f6fde5] border-l-2 border-solid border-[#a7c463] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${
            isMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#a7c463]/50">
            <div className="inline-flex items-center gap-2">
              <div className="relative w-8 h-8 bg-[#f6fde5] rounded-full border border-[#a7c463] flex items-center justify-center">
                <span className="sr-only">Menu</span>
                <Menu className="w-5 h-5 text-[#546232]" aria-hidden="true" />
              </div>
              <span className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[#172b4d]">
                Menu
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-full border border-[#a7c463] bg-[#f6fde5] hover:bg-[#eaf6d3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b8f3c]/50"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5 text-[#172b4d]" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-5">
            <div className="flex flex-col gap-3">
              {navigationItems.map((item, index) => (
                <button
                  key={item.label}
                  ref={index === 0 ? firstMenuItemRef : null}
                  type="button"
                  onClick={() => handleNavClick(item.label)}
                  className="w-full text-left px-5 py-4 rounded-[16px] border border-[#a7c463] bg-[#f6fde5] hover:border-[#6b8f3c] hover:bg-white transition-colors [font-family:'Bricolage_Grotesque',Helvetica] font-normal text-[18px] leading-[120%] tracking-[0] text-[#172b4d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6b8f3c]/50"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <Button
                type="button"
                className="w-full justify-center inline-flex items-center gap-[16px] px-[22px] py-[15px] h-auto bg-[#d1f57c] rounded-[300px] hover:bg-[#c5e970] transition-all duration-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleContactCta();
                }}
              >
                <span className="relative inline-flex overflow-hidden [font-family:'Funnel_Sans',Helvetica] font-medium text-[20px] leading-[120%] tracking-[0px] text-[#172b4d] align-middle">
                  Contact Us
                </span>
                <img
                  className="w-3.5 h-3.5 transition-transform duration-500 group-hover:scale-150 group-hover:rotate-45"
                  alt="Icon"
                  src="https://c.animaapp.com/mm91avyrvgFAYy/img/icon.svg"
                />
              </Button>
            </div>
          </div>
        </aside>

        {/* Hero content inside 60% image area (center on mobile/tablet, bottom on desktop) */}
        <div className="relative z-10 w-full h-full flex items-center md:items-end justify-center px-6 md:px-10 lg:px-0 pb-8 md:pb-10">
          <div className="w-full max-w-4xl flex flex-col items-center text-center gap-4 md:gap-6">
          <h1
            className="
              [font-family:'Bricolage_Grotesque',Helvetica]
              font-medium lg:font-semibold
              text-[28px] md:text-[32px] lg:text-[72px]
              leading-[120%] lg:leading-[100%]
              tracking-[0px] lg:tracking-[-0.02em]
              text-white
            "
          >
            Start the Conversation
          </h1>

          <p
            className="
              [font-family:'Funnel_Sans',Helvetica]
              font-normal
              text-[16px] md:text-[18px] lg:text-[24px]
              leading-[120%]
              tracking-[0px]
              text-white
            "
          >
            Delivering critical water infrastructure requires the right partner.
            <br />
            Let’s discuss how Killard can support your next project.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};


