import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/DropdownMenu";

import { EllipsisVerticalIcon, Trash2Icon } from "lucide-react";
import IconButton from "./IconButton";

type Props = {
  className?: string;
};

const EllipsisMenu = ({ className }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton className={className}>
          <EllipsisVerticalIcon />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <Trash2Icon className="me-2 size-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EllipsisMenu;
