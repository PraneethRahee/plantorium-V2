import { memo } from "react";
import { Button } from "../ui/button";

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
      <span className={spanClassName}>
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

