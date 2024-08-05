import { Button, ButtonProps } from "@/components/ui/Button";
import { cloneElement, forwardRef, Ref, ReactElement } from "react";

const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className={className}
        {...props}
      >
        {cloneElement(children as ReactElement, { className: "size-5" })}
      </Button>
    );
  },
);

export default IconButton;
