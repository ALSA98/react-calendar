import { Label } from "@/components/ui/Label";

import List from "@/components/utils/List";
import { cn } from "@/lib/utils";
import { useId } from "react";
import { CheckIcon } from "lucide-react";
import { EVENT_COLORS } from "@/types";
import { bgColorClasses } from "@/constants/colors";

type Props = {
  selected?: (typeof EVENT_COLORS)[number];
  onChange: (color: (typeof EVENT_COLORS)[number]) => void;
};

const ColorPicker = ({ selected, onChange }: Props) => {
  const id = useId();

  return (
    <span className="flex-col space-y-2">
      <Label>Color</Label>

      <span className="flex space-x-2">
        <List items={EVENT_COLORS}>
          {(color) => (
            <span key={color}>
              <input
                type="radio"
                name="color"
                value={color}
                id={`${id}-${color}`}
                checked={selected === color}
                className="hidden"
                onChange={() => onChange(color)}
              />
              <label
                htmlFor={`${id}-${color}`}
                className={cn(
                  "relative block size-8 cursor-pointer rounded-full transition-all duration-200",
                  bgColorClasses[color],
                )}
              >
                <span className="sr-only">{color}</span>
                {selected === color && (
                  <CheckIcon className="absolute start-1.5 top-1.5 size-5 text-white" />
                )}
              </label>
            </span>
          )}
        </List>
      </span>
    </span>
  );
};

export default ColorPicker;
