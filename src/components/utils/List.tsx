import { memo, ReactNode } from "react";

type Props<T> = {
  items: readonly T[];
  getKey?: (item: T, index: number) => string | number;
  children: (item: T, key: string | number, index: number) => ReactNode;
};

const defaultGetKey = (item: any, index: number) =>
  (item.id || item.value || item.key || index) as string | number;

const List = <T,>({ items, getKey = defaultGetKey, children }: Props<T>) => {
  return (
    <>
      {items.map((item, index) => {
        const itemJSX = children(item, getKey(item, index), index);
        return itemJSX;
      })}
    </>
  );
};

export default memo(List) as typeof List;
