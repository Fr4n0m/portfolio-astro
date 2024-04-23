import React from "react";
import "../styles/styles.css";
import Header from "../components/header/HeaderComponent";

const App = () => {
  return (
    <>
      <main>
        <Header />

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

        <div className="background">
          <img src="/assets/images/background.webp" alt="Background" />
          <div className="text">
            <h2>Hi! I'm Fran.</h2>
            <h3>a full stack web developer</h3>
          </div>
        </div>

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
              <img src="/assets/images/github.webp" alt="Github" />
              <h1>GitHub</h1>
            </article>

            <article className="mobile">
              <img src="/assets/images/mobile.webp" alt="Mobile" />
              <h1>Mobile</h1>
            </article>
          </div>

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
                        Filmax is a film website project for codeSpace and it's
                        my first time with HTML & CSS ;)
                      </p>
                      <button className="view-more-button"> VIEW MORE </button>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className="footer-container">
          <div className="footer-logo">
            <img src="/assets/images/logo.webp" alt="Fran" />
            <h2>Francisco Rodríguez © 2023</h2>
            <a href="">About me</a>
          </div>

          <div className="info-container">
            <span></span>
            <nav>
              <ul className="more-buttons">
                <li>MORE</li>
                <li>
                  <button>
                    <img
                      className="svg-icon"
                      src="/assets/icons/github.svg"
                      alt="GitHub"
                    />
                    <span className="text">GitHub</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img
                      className="svg-icon"
                      src="/assets/icons/linkedin.svg"
                      alt="LinkeIn"
                    />
                    <span className="text">LinkedIn</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img
                      className="svg-icon"
                      src="/assets/icons/figma.svg"
                      alt="Figma"
                    />
                    <span className="text">Figma</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img
                      className="svg-icon"
                      src="/assets/icons/cv.svg"
                      alt="CV"
                    />
                    <span className="text">CV</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img
                      className="svg-icon"
                      src="/assets/icons/posts.svg"
                      alt="Posts"
                    />
                    <span className="text">Posts</span>
                  </button>
                </li>
              </ul>
            </nav>

            <nav>
              <ul className="contacts-buttons">
                <li>CONTACTS</li>
                <li>
                  <button>
                    <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" />
                    <span className="text">WhatsApp</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img src="/assets/icons/email.svg" alt="Email" />
                    <span className="text">Email</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img src="/assets/icons/twitter.svg" alt="Twitter" />
                    <span className="text">Twitter</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img src="/assets/icons/facebook.svg" alt="Facebook" />
                    <span className="text">Facebook</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img src="/assets/icons/tiktok.svg" alt="TikTok" />
                    <span className="text">TikTok</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="tell-me">
            <h1>Tell me about...</h1>
            <div className="input-container">
              <input
                type="text"
                name="text"
                className="input-footer"
                placeholder="write a message"
              />
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default App;
