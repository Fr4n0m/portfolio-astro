import React from "react";

const ScrollUp = () => {
  return (
    <>
      <a href="#header">
        <button className="scroll-button">
          <div className="scroll-button-box">
            <span className="button-elem">
              <img src="/assets/icons/scrollup.svg" alt="Scroll up" />
            </span>
            <span className="button-elem">
              <img src="/assets/icons/scrollup.svg" alt="Scroll up" />
            </span>
          </div>
        </button>
      </a>
    </>
  );
};

export default ScrollUp;
