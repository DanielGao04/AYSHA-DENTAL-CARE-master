import React from "react";
import { Link } from "react-router-dom";
import banner from "../../images/Orchard3.png";

const Banner = () => {
  return (
    <div
      className="md:w-90 bg-center md:bg-cover md:bg-no-repeat md:bg-center py-20 md:py-20 lg:py-20 xl:py-28 md:shadow-xl md:z-6"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        shrink: 0,
        grow: 0

      }}
    >
      <div className="container text-center text-white py-0 md:mt-40 md:py-40 ">
        <h1 className="text-3xl capitalize mb-0 mt-64 font-semibold md:mb-5 md:mt-52 text-white md:text-8xl">
          Eat Wisely, Smile Nicely
        </h1>
        <p className="mb-10 text-gray-200 text-md md:text-2xl md:mx-auto md:mb-8 md:w-2/3 ">
          Discover the smart way to find the perfect dentist.
          Get matched with a great dentist today. It's time for a healthy smile.
        </p>
        <div>
          <Link
            to="/appointment"
            className="bg-sky-800 text-white px-6 py-4 font-medium rounded hover:bg-sky-700 transition"
          >
            Make an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
