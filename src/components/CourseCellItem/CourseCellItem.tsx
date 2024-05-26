import {FC} from 'react';
import styles from './CourseCellItem.module.scss';
import {Course} from "../../types/course.ts";

interface CourseCellItemProps {
  course: Course
}

export const CourseCellItem: FC<CourseCellItemProps> = ({ course }) => {
  return (
    <div className={styles.courseCellItem}>
      <div className={styles.imageWrapper} style={{ backgroundColor: course.bgColor }}>
        <img src={course.image} alt={course.name} className={styles.image} />
      </div>
      <div className={styles.courseName}>
        {course.name}
      </div>
    </div>
  );
};
