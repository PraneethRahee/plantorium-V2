import { memo } from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const swapTopClassName =
  "translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12";
const swapBottomClassName =
  "absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0";

export const ContactUsCTA = memo(({
  onClick,
  type = "button",
  disabled,
  buttonClassName,
  spanClassName,
  label = "Contact Us",
  icon,
  swapText = true,
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={buttonClassName}
      onClick={onClick}
    >
      <span
        className={cn(
          spanClassName,
          // Enforce the design spec for the button label typography.
          // Base (mobile/tab)
          "!capitalize align-middle text-[#172b4d] !tracking-[0px] !leading-[120%] !text-[16px] !font-medium ![font-family:'Funnel_Sans',Helvetica]",
          // Desktop (lg+)
          "lg:![font-family:'Bricolage_Grotesque',Helvetica] lg:!font-semibold lg:!text-[18px]"
        )}
      >
        {swapText ? (
          <>
            <div className={swapTopClassName}>{label}</div>
            <div className={swapBottomClassName}>{label}</div>
          </>
        ) : (
          label
        )}
      </span>
      {icon}
    </Button>
  );
});

