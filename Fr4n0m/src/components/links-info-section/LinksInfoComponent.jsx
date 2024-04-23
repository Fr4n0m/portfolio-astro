import React from "react";

const LinksInfo = () => {
  return (
    <>
      <section>
        <div className="info">
          <article className="ai">
            <img src="/assets/images/ai.webp" alt="Ai" />
            <h1>AI</h1>
          </article>

          <article className="articles">
            <img src="/assets/images/articles.webp" alt="Articles" />
            <h1>Articles</h1>
          </article>

          <article className="github">
            <a href="https://github.com/Fr4n0m">
              <img src="/assets/images/github.webp" alt="Github" />
              <h1>GitHub</h1>
            </a>
          </article>

          <article className="mobile">
            <img src="/assets/images/mobile.webp" alt="Mobile" />
            <h1>Mobile</h1>
          </article>
        </div>
      </section>
    </>
  );
};

export default LinksInfo;
