import React, { useState } from "react";
import { courses } from "../data/courses";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Пошук курсів..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id}>
            <a href={course.url} target="_blank" rel="noopener noreferrer">
              {course.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;