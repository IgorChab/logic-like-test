import {FC, memo} from 'react';
import styles from './SidebarItem.module.scss';
import {Tag} from "../../App.tsx";

interface SidebarItemProps {
  itemName: Tag
  isSelected: boolean
  selectTagHandler: (tag: Tag) => void
}

export const SidebarItem: FC<SidebarItemProps> = memo(({
  itemName,
  isSelected,
  selectTagHandler
}) => {
  const onClickTag = () => {
    selectTagHandler(itemName);
  };

  return (
    <div
      className={styles.sidebarItem}
      style={{ backgroundColor: isSelected ? '#5FBF77' : 'transparent' }}
      onClick={onClickTag}
    >
      {itemName}
    </div>
  );
});
