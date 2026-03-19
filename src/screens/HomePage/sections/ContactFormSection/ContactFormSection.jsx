import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { PlayIcon, PauseIcon, CheckCircleIcon, AlertCircleIcon, LoaderIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

const EMAILJS_SERVICE_ID = "service_qsz2plw";
const EMAILJS_TEMPLATE_ID = "template_1b7nthe";
const EMAILJS_PUBLIC_KEY = "xn8DCCXCOS0sNoNC0";

const formFields = [
  { placeholder: "Your Name", type: "text", name: "from_name" },
  { placeholder: "Email Address", type: "email", name: "reply_to" },
  { placeholder: "Company Name", type: "text", name: "company_name" },
];

export const ContactFormSection = () => {
  const videoRef = useRef(null);
  const formRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [sendStatus, setSendStatus] = useState("idle");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sendStatus === "sending") return;

    setSendStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSendStatus("success");
      formRef.current.reset();
      setTimeout(() => setSendStatus("idle"), 4000);
    } catch {
      setSendStatus("error");
      setTimeout(() => setSendStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen flex items-stretch px-6 md:px-[150px] py-10 md:py-[80px] bg-white"
    >
      <div className="w-full flex items-center translate-y-[-0.5rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[60px] items-start lg:items-center w-full">
          <div className="order-2 lg:order-1 flex flex-col gap-8">
            <header className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="[font-family:'Bricolage_Grotesque',Helvetica] font-medium text-[28px] md:text-[36px] lg:text-[60px] leading-[120%] tracking-[0] text-[#172b4d] align-middle">
                  Speak With Our Team
                </h2>
                <p className="[font-family:'Funnel_Sans',Helvetica] font-normal text-[16px] md:text-[18px] lg:text-[24px] leading-[120%] tracking-[0] text-[#758195] align-middle">
                  Tell us about your project, enquiry, or capability
                  requirements. A member of our team will respond promptly.
                </p>
              </div>
            </header>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="hidden" name="to_name" value="Plantorium" />
              {formFields.map((field, index) => (
                <Input
                  key={index}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  className="h-[44px] md:h-[50px] lg:h-[60px] rounded-md border border-[#DCDFE4] font-global-tokens-body-b-2 font-[number:var(--global-tokens-body-b-2-font-weight)] text-[#758195] text-xs md:text-sm lg:text-[length:var(--global-tokens-body-b-2-font-size)] tracking-[var(--global-tokens-body-b-2-letter-spacing)] leading-[var(--global-tokens-body-b-2-line-height)] [font-style:var(--global-tokens-body-b-2-font-style)]"
                />
              ))}

              <Textarea
                name="message"
                placeholder="Your Message"
                required
                className="h-[110px] md:h-[130px] lg:h-[160px] rounded-md border border-[#DCDFE4] font-global-tokens-body-b-2 font-[number:var(--global-tokens-body-b-2-font-weight)] text-[#758195] text-xs md:text-sm lg:text-[length:var(--global-tokens-body-b-2-font-size)] tracking-[var(--global-tokens-body-b-2-letter-spacing)] leading-[var(--global-tokens-body-b-2-line-height)] [font-style:var(--global-tokens-body-b-2-font-style)] resize-none"
              />

              <div className="flex items-center gap-3">
                <Button
                  type="submit"
                  disabled={sendStatus === "sending"}
                  className="group/btn inline-flex items-center gap-3 md:gap-[14px] lg:gap-[18px] px-4 py-3 md:px-5 md:py-4 lg:px-[25px] lg:py-[19px] h-auto bg-[#d1f57c] rounded-[300px] hover:bg-[#c5e970] transition-all duration-300 w-fit disabled:opacity-70"
                >
                  <span className="relative inline-flex overflow-hidden [font-family:'Bricolage_Grotesque',Helvetica] font-semibold text-[#172b4d] text-sm md:text-base lg:text-lg tracking-[0] leading-[1.2]">
                    {sendStatus === "sending" ? (
                      <div className="flex items-center gap-2">
                        <LoaderIcon className="w-4 h-4 animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover/btn:translate-y-[-160%] group-hover/btn:skew-y-12">
                          Submit
                        </div>
                        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover/btn:translate-y-0 group-hover/btn:skew-y-0">
                          Submit
                        </div>
                      </>
                    )}
                  </span>
                  {sendStatus !== "sending" && (
                    <img
                      className="w-3.5 h-3.5 transition-transform duration-500 group-hover/btn:scale-150 group-hover/btn:rotate-45"
                      alt="Icon"
                      src="https://c.animaapp.com/mm91avyrvgFAYy/img/icon.svg"
                    />
                  )}
                </Button>

                {sendStatus === "success" && (
                  <span className="flex items-center gap-2 text-green-600 [font-family:'Funnel_Sans',Helvetica] text-sm font-medium animate-fade-in">
                    <CheckCircleIcon className="w-4 h-4" />
                    Message sent successfully!
                  </span>
                )}
                {sendStatus === "error" && (
                  <span className="flex items-center gap-2 text-red-500 [font-family:'Funnel_Sans',Helvetica] text-sm font-medium animate-fade-in">
                    <AlertCircleIcon className="w-4 h-4" />
                    Failed to send. Please try again.
                  </span>
                )}
              </div>
            </form>
          </div>

          <div className="order-1 lg:order-2 w-full max-w-[480px] aspect-[4/3] md:aspect-[4/4] lg:aspect-[4/5] rounded-md overflow-hidden relative group mx-auto">
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
