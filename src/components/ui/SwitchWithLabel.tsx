import { ComponentProps, forwardRef, Ref, ReactNode, useId } from "react";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";

type Props = {
  label: ReactNode | string;
  labelProps?: ComponentProps<typeof Label>;
  className?: string;
} & ComponentProps<typeof Switch>;

const SwitchWithLabel = forwardRef(
  (
    { label, labelProps, className, ...switchProps }: Props,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const id = useId();

    return (
      <div className={cn("flex items-center space-x-2", className)}>
        <Switch id={id} ref={ref} {...switchProps} />
        <Label htmlFor={id} {...labelProps}>
          {label}
        </Label>
      </div>
    );
  },
);

export default SwitchWithLabel;
