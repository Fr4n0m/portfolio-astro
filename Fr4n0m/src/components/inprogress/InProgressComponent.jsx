import React from "react";

const InProgress = () => {
  return (
    <section>
      <div className="in-progress">
        <h1>in progress...</h1>
        <div className="article-container">
          {Array(4)
            .fill()
            .map((_, index) => (
              <article key={index}>
                <div className="card">
                  <h1>FILMAX</h1>
                  <img src="/assets/images/filmax.webp" alt="filmax" />
                  <p>
                    Filmax is a film website project for codeSpace and it was my
                    first time with HTML & CSS ;)
                  </p>
                  <button className="view-more-button"> VIEW MORE </button>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
};

export default InProgress;
