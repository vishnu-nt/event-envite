import React from "react";
import { Link } from "react-router-dom";
import landingPageImg from "../assests/images/landing-page-image.svg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 md:px-24">
        <div className="grid grid-cols-12 gap-6 items-center text-center lg:text-left">
          <div className="hidden lg:block col-span-6">
            <img src={landingPageImg} alt="" className="" />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:text-right">
            <header>
              <h1 className="text-purple text-5xl leading-tight font-bold">
                Imagine if <br />
                <span className="text-gradient">Snapchat </span> <br />
                had events.
              </h1>
              <p className="text-gray-1 my-8 text-2xl md:w-5/6 lg:w-full mx-auto">
              Easily host and share events with your friends across any social media.
              </p>
            </header>
            <img src={landingPageImg} alt="" className="my-4 block lg:hidden mx-auto" />
            <Link to="/create">
                <button className="btn btn-primary text-white lg:px-16 w-full lg:w-auto">
                    🎉 Create my event
                </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
