import { ComponentProps, forwardRef, Ref, ReactNode, useId } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";

type Props = {
  label: ReactNode | string;
  labelProps?: ComponentProps<typeof Label>;
  className?: string;
} & ComponentProps<typeof Checkbox>;

const CheckboxWithLabel = forwardRef(
  (
    { label, labelProps, className, ...checkboxProps }: Props,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const id = useId();

    return (
      <span className={cn("flex items-center space-x-2", className)}>
        <Checkbox id={id} ref={ref} {...checkboxProps} />
        <Label htmlFor={id} {...labelProps}>
          {label}
        </Label>
      </span>
    );
  },
);

export default CheckboxWithLabel;
