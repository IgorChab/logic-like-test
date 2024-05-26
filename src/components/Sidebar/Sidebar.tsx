import {FC, useCallback, useState, memo} from 'react';
import styles from './Sidebar.module.scss';
import {SidebarItem} from "../SidebarItem/SidebarItem.tsx";
import {Tag} from "../../App.tsx";

interface SidebarProps {
  items: readonly Tag[]
  onSelectTag: (tag: Tag) => void
}

export const Sidebar: FC<SidebarProps> = memo(({ items, onSelectTag }) => {
  const [selectedItem, setSelectedItem] = useState<Tag>("Все темы");

  const selectTagHandler = useCallback((tag: Tag) => {
    setSelectedItem(tag);
    onSelectTag(tag);
  },[onSelectTag])

  return (
    <div className={styles.sidebar}>
      {items.map((item) => (
        <SidebarItem
          itemName={item}
          isSelected={selectedItem === item}
          selectTagHandler={selectTagHandler}
          key={item}
        />
      ))}
    </div>
  );
});
