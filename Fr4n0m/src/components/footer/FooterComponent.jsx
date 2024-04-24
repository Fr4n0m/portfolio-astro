import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container p-10">
          <div className="footer-logo mb-20 mr-20">
            <img src="/assets/images/logo.webp" alt="Fran" />
            <h2 className="text-nowrap">Francisco Rodríguez © 2023</h2>
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
