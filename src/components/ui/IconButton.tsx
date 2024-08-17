import { Button, ButtonProps } from "@/components/ui/Button";
import { cloneElement, forwardRef, ReactElement } from "react";

const IconButton = forwardRef<
  HTMLButtonElement,
  ButtonProps & { srText: string }
>(({ className, children, srText, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={className}
      {...props}
    >
      {cloneElement(children as ReactElement, { className: "size-5" })}
      <span className="sr-only">{srText}</span>
    </Button>
  );
});

export default IconButton;
