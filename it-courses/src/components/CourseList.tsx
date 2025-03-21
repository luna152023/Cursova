import React from "react";
import { courses } from "../data/courses";

const CourseList: React.FC = () => {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <img src={course.image} alt={course.name} width="150" />
          <br />
          <a href={course.url} target="_blank" rel="noopener noreferrer">
            {course.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;