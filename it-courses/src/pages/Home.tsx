import React from "react";
import Search from "../components/Search";
import CourseList from "../components/CourseList";

const Home: React.FC = () => {
  return (
    <div>
      <h1>IT-Курси</h1>
      <Search />
      <CourseList />
    </div>
  );
};

export default Home;