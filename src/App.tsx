import {useCallback, useEffect, useRef, useState} from "react";
import axios from "axios";
import {Sidebar} from "./components/Sidebar/Sidebar.tsx";
import {CoursesCell} from "./components/CoursesCell/CoursesCell.tsx";
import {Course} from "./types/course.ts";
import './index.scss';

const sidebarItems = [
  "Все темы",
  "Логика и мышление",
  "Загадки",
  "Головоломки",
  "Путешествия"
] as const;

export type Tag = typeof sidebarItems[number];

function App() {
  const initialCourses = useRef<Course[]>();
  const [data, setData] = useState<Course[]>();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<Course[]>('https://logiclike.com/docs/courses.json');
        setData(response.data)
        initialCourses.current = response.data;
      } catch (err) {
        console.log('err', err);
      }
    }

    fetchCourses();
  }, []);

  const onSelectTag = useCallback((tag: Tag) => {
    if (tag === "Все темы") {
      setData(initialCourses.current);

      return;
    }

    const filteredCourses = initialCourses.current?.filter((course) => course.tags.includes(tag));
    setData(filteredCourses);
  }, [])

  return (
    <div className="app">
      <Sidebar items={sidebarItems} onSelectTag={onSelectTag} />
      <CoursesCell courses={data} />
    </div>
  )
}

export default App
