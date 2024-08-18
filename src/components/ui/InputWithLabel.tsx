import { ComponentProps, forwardRef, Ref, ReactNode, useId, memo } from "react";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";

type Props = {
  label: ReactNode | string;
  labelProps?: ComponentProps<typeof Label>;
  className?: string;
} & ComponentProps<typeof Input>;

const InputWithLabel = forwardRef(
  (
    { label, labelProps, className, ...inputProps }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    const id = useId();

    return (
      <span className={cn("flex flex-col space-y-2", className)}>
        <Label htmlFor={id} {...labelProps}>
          {label}
        </Label>
        <Input id={id} ref={ref} {...inputProps} />
      </span>
    );
  },
);

export default memo(InputWithLabel);
