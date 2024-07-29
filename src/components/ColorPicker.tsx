import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";

const ColorPicker = () => {
  return (
    <div className="flex-col space-y-2">
      <Label>Color</Label>
      <div className="flex space-x-2">
        <Button size="smIcon" className="rounded-full bg-red-600" />
        <Button size="smIcon" className="rounded-full bg-blue-600" />
        <Button size="smIcon" className="rounded-full bg-green-600" />
      </div>
    </div>
  );
};

export default ColorPicker;
