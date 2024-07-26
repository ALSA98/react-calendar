import { ComponentProps, forwardRef, Ref, ReactNode, useId } from "react";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";

type Props = {
  switchProps: ComponentProps<typeof Switch>;
  label: ReactNode | string;
  labelProps?: ComponentProps<typeof Label>;
  className?: string;
};

const SwitchWithLabel = forwardRef(
  (props: Props, ref: Ref<HTMLButtonElement>) => {
    const id = useId();

    return (
      <div className={cn("flex items-center space-x-2", props.className)}>
        <Switch id={id} ref={ref} {...props.switchProps} />
        <Label htmlFor={id} {...props.labelProps}>
          {props.label}
        </Label>
      </div>
    );
  },
);

export default SwitchWithLabel;
