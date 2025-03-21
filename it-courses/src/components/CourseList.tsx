import React from "react";
import { courses } from "../data/courses";

const CourseList: React.FC = () => {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <a href={course.url} target="_blank" rel="noopener noreferrer">
            {course.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;