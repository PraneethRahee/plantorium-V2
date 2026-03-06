import { useRef, useState } from "react";
import { PlayIcon, PauseIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

const formFields = [
  { placeholder: "Your Name", type: "text" },
  { placeholder: "Email Address", type: "email" },
  { placeholder: "Company Name", type: "text" },
];

export const ContactFormSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="w-full px-6 md:px-[150px] py-[120px] bg-white">
      <div className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[120px] items-center">
          <div className="flex flex-col gap-[62px]">
            <header className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="font-global-tokens-headings-h-2 font-[number:var(--global-tokens-headings-h-2-font-weight)] text-[#172b4d] text-[length:var(--global-tokens-headings-h-2-font-size)] tracking-[var(--global-tokens-headings-h-2-letter-spacing)] leading-[var(--global-tokens-headings-h-2-line-height)] [font-style:var(--global-tokens-headings-h-2-font-style)]">
                  Speak With Our Team
                </h2>
                <p className="font-global-tokens-body-b-1 font-[number:var(--global-tokens-body-b-1-font-weight)] text-[#758195] text-[length:var(--global-tokens-body-b-1-font-size)] tracking-[var(--global-tokens-body-b-1-letter-spacing)] leading-[var(--global-tokens-body-b-1-line-height)] [font-style:var(--global-tokens-body-b-1-font-style)]">
                  Tell us about your project, enquiry, or capability
                  requirements. A member of our team will respond promptly.
                </p>
              </div>
            </header>

            <form className="flex flex-col gap-6">
              {formFields.map((field, index) => (
                <Input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="h-[60px] rounded-md border-[#dcdfe4] font-global-tokens-body-b-2 font-[number:var(--global-tokens-body-b-2-font-weight)] text-[#758195] text-[length:var(--global-tokens-body-b-2-font-size)] tracking-[var(--global-tokens-body-b-2-letter-spacing)] leading-[var(--global-tokens-body-b-2-line-height)] [font-style:var(--global-tokens-body-b-2-font-style)]"
                />
              ))}

              <Textarea
                placeholder="Your Message"
                className="h-[200px] rounded-md border-[#dcdfe4] font-global-tokens-body-b-2 font-[number:var(--global-tokens-body-b-2-font-weight)] text-[#758195] text-[length:var(--global-tokens-body-b-2-font-size)] tracking-[var(--global-tokens-body-b-2-letter-spacing)] leading-[var(--global-tokens-body-b-2-line-height)] [font-style:var(--global-tokens-body-b-2-font-style)] resize-none"
              />

              <Button
                type="submit"
                className="group/btn inline-flex items-center gap-[18px] px-[25px] py-[19px] h-auto bg-[#d1f57c] rounded-[300px] hover:bg-[#c5e970] transition-all duration-300 w-fit"
              >
                <span className="relative inline-flex overflow-hidden [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#172b4d] text-lg tracking-[0] leading-[21.6px]">
                  <div className="translate-y-0 skew-y-0 transition duration-500 group-hover/btn:translate-y-[-160%] group-hover/btn:skew-y-12">
                    Submit
                  </div>
                  <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover/btn:translate-y-0 group-hover/btn:skew-y-0">
                    Submit
                  </div>
                </span>
                <img
                  className="w-3.5 h-3.5 transition-transform duration-500 group-hover/btn:scale-150 group-hover/btn:rotate-45"
                  alt="Icon"
                  src="https://c.animaapp.com/mm91avyrvgFAYy/img/icon.svg"
                />
              </Button>
            </form>
          </div>

          <div className="w-full aspect-square rounded-md overflow-hidden relative group mx-auto">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/garden-video.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <Button
              type="button"
              variant="ghost"
              onClick={togglePlay}
              className="absolute left-1/2 bottom-6 -translate-x-1/2 w-[190px] h-[42px] bg-[#ffffff3d] hover:bg-[#ffffff4d] rounded-[200px] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] transition-all opacity-0 group-hover:opacity-100"
            >
              {isPlaying ? (
                <PauseIcon className="w-[13px] h-[18px] text-white fill-white mr-2" />
              ) : (
                <PlayIcon className="w-[13px] h-[18px] text-white fill-white mr-2" />
              )}
              <span className="[font-family:'Geist_Mono',Helvetica] font-medium text-white text-[13px] tracking-[0] leading-[18.2px]">
                {isPlaying ? "PAUSE" : "PLAY"}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
