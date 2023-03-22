type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  classNameList: string;
};

export default function List<T>({ items, renderItem, classNameList }: ListProps<T>) {
  return <div className={classNameList}>{items.map(renderItem)}</div>;
}
