import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/DropdownMenu";

import { EllipsisVerticalIcon } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import { memo, ReactNode } from "react";
import List from "@/components/utils/List";

type Props = {
  items: {
    label: String;
    prepend?: ReactNode;
    append?: ReactNode;
    onClick: () => void;
  }[];
  className?: string;
};

const EllipsisMenu = ({ items, className }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <IconButton srText="Options" className={className}>
          <EllipsisVerticalIcon />
        </IconButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <List items={items}>
          {(item, key) => (
            <DropdownMenuItem key={key} onClick={item.onClick}>
              {item.prepend}
              {item.label}
              {item.append}
            </DropdownMenuItem>
          )}
        </List>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(EllipsisMenu, () => true);
