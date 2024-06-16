import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "..//..//public/list.json";
import Cards from "./Cards";
import axios from "axios";

function Freebook() {
  // const [book, setBook] = useState([]);
  // useEffect(() => {
  //   const getBook = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:4001/book");
  //       console.log(res.data.filter((data) => data.category === "Free"));
  //       setBook(res.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getBook();
  // }, []);

  const filterData = list.filter((data) => data.category === "Free");
  //   console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-00 px-4">
        <div>
          <h1 className="font-semibold text-x1 pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod
            explicabo a voluptatibus? Eligendi ea deleniti fugiat? Et, ratione.
            Consequuntur ea obcaecati similique incidunt rem velit labore amet
            animi odit?
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
