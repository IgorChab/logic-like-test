import {FC} from 'react';
import styles from './CoursesCell.module.scss';
import {CourseCellItem} from "../CourseCellItem/CourseCellItem.tsx";
import {Course} from "../../types/course.ts";

interface CoursesCellProps {
  courses?: Course[]
}

export const CoursesCell: FC<CoursesCellProps> = ({ courses }) => {
  return (
    <div className={styles.coursesCell}>
      {courses?.map((course) => (
        <CourseCellItem course={course} key={course.id} />
      ))}
    </div>
  );
};
