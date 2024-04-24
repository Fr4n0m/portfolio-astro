import React from "react";

function Hero() {
  return (
    <>
      <div className="background w-max h-screen flex justify-center items-center">
        <img
          src="/assets/images/background.webp"
          alt="Background"
          className="h-screen w-full"
        />

        <div className="text w-full absolute flex flex-col justify-center items-center">
          <h2>Hi! I'm Fran.</h2>
          <h3>a full stack web developer committed to details</h3>
        </div>
      </div>
    </>
  );
}

export default Hero;
