import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";

import { EVENT_COLORS } from "@/context/EventContext";
import List from "@/components/utils/List";
import { cn } from "@/lib/utils";

type Props = {
  selected?: (typeof EVENT_COLORS)[number];
};

const ColorPicker = ({ selected }: Props) => {
  const activeClasses =
    "after:absolute after:size-3 after:rounded-full after:bg-background after:content-['']";

  return (
    <div className="flex-col space-y-2">
      <Label>Color</Label>

      <div className="flex space-x-2">
        <List items={EVENT_COLORS as unknown as string[]}>
          {(color) => (
            <Button
              size="smIcon"
              className={cn(
                "relative rounded-full hover:opacity-75",
                color === selected && activeClasses,
              )}
              style={{ backgroundColor: color }}
            />
          )}
        </List>
      </div>
    </div>
  );
};

export default ColorPicker;
