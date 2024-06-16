import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import list from "../../public/list.json";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
  // const [book, setBook] = useState([]);
  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4001/book");
  //       console.log(res.data);
  //       setBook(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-2 px-4">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :) </span>{" "}
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            maiores quae in optio porro? Libero enim recusandae obcaecati totam
            delectus natus aliquam possimus cumque. Illo explicabo facere sunt
            quasi rerum!
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-8 mb-8 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

// export default Course;

// import React from "react";

// function Course() {
//   return <div>Course</div>;
// }

export default Course;
