import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = () => {
  return (
    <section className="flex flex-col items-start gap-2.5 px-4 md:px-[150px] py-20 w-full bg-[#f6fde5]">
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 w-full">
          <Card className="flex-1 lg:max-w-[1049px] border-[#dcdfe4] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <CardContent className="p-5">
              <div className="flex flex-col min-h-[327px] items-start justify-between">
                <div className="flex flex-col items-start gap-3 w-full">
                  <div className="inline-flex items-center gap-2">
                    <div className="relative w-[54px] h-[54px] bg-[url(https://c.animaapp.com/mm91avyrvgFAYy/img/image-1-1.png)] bg-[100%_100%]">
                      <img
                        className="absolute top-[calc(50.00%_-_27px)] left-0 w-[54px] h-[54px]"
                        alt="Logo overlay"
                        src="https://c.animaapp.com/mm91avyrvgFAYy/img/image-2-3.png"
                      />
                    </div>
                    <img
                      className="w-[132px] h-6"
                      alt="Brand logo"
                      src="https://c.animaapp.com/mm91avyrvgFAYy/img/image-2-2.png"
                    />
                  </div>
                  <p className="font-global-tokens-headings-h-5 font-[number:var(--global-tokens-headings-h-5-font-weight)] text-[#2c3e5d] text-[length:var(--global-tokens-headings-h-5-font-size)] tracking-[var(--global-tokens-headings-h-5-letter-spacing)] leading-[var(--global-tokens-headings-h-5-line-height)] [font-style:var(--global-tokens-headings-h-5-font-style)]">
                    Working together to protect our planet and build a
                    sustainable future.
                  </p>
                </div>
                <Button className="inline-flex items-center gap-[18px] px-[25px] py-[19px] h-auto bg-[#d1f57c] hover:bg-[#c5e970] rounded-[300px] text-[#172b4d] [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-lg">
                  Contact Us
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="flex-1 flex items-center justify-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="w-full max-w-[500px] aspect-video rounded-md overflow-hidden">
              <video
                className="w-full h-full object-cover"
                src="/garden-video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <div className="relative w-full max-w-[1625px] h-80 flex items-center justify-center">
            <h2 className="absolute top-0 left-0 h-80 flex items-center [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#546232] text-[clamp(120px,20vw,320px)] tracking-[0.0375em] leading-none whitespace-nowrap">
              Plant
            </h2>
            <img
              className="absolute top-[94px] left-[47.6%] w-[165px] h-[177px] transform -translate-x-1/2"
              alt="Decorative leaf O"
              src="https://c.animaapp.com/mm91avyrvgFAYy/img/o.png"
            />
            <h2 className="absolute top-0 right-0 h-80 flex items-center [font-family:'Bricolage_Grotesque',Helvetica] font-bold text-[#546232] text-[clamp(120px,20vw,320px)] tracking-[0.0375em] leading-none whitespace-nowrap">
              rium
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
