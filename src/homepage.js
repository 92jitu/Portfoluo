import React from 'react';
import './App.css'; // Make sure to have your CSS file for custom styles

function HomePage() {
  return (
    // <div>
    //   <div classNameName="home-page" style={{height:"15000px"}}>
    //       <h1>Welcome to My Portfolio</h1>
    //       <p>This is a simple example of a portfolio homepage using React Bootstrap.</p>
    //   </div>
    // </div>
    <>
    <body>
    <section>
      <div className="icon-container">
        <div className="icon-box about" data-modal="about">
          <i className="fa-regular fa-address-card"></i>
        </div>
        <div className="icon-box projects" data-modal="projects">
          <i className="fa-solid fa-laptop-code"></i>
        </div>
        <div className="icon-box testimonial" data-modal="testimonial">
          <i className="fa-solid fa-users-rectangle"></i>
        </div>
        <div className="icon-box contact" data-modal="contact">
          <i className="fa-solid fa-envelope"></i>
        </div>
      </div>
    </section>

    <div className="popup" id="about">
      <div className="popup-container">
        <div className="popup-header">
          <div className="button-container">
            <button className="close-btn circle-btn red">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button className="close-btn circle-btn yellow">
              <i className="fa-solid fa-window-minimize"></i>
            </button>
            <button className="maximize-btn circle-btn green">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>
        <div className="popup-body about-container">
          <div className="img-frame">
            <img
              src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1f842b2d-1245-497e-9a9e-b1cdb0da1eec"
              alt="" />
          </div>
          <div className="hero-content">
            <h1>Ruth Thomson</h1>
            <p>
              I'm a front-end developer. I have dedicated myself to creating
              visually appealing and user-friendly websites. I'm always open to
              using new skill sets and I believe in the power of collaboration,
              working closely with designers and back-end developers to deliver
              cohesive and effective solutions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="popup" id="projects">
      <div className="popup-container">
        <div className="popup-header">
          <div className="button-container">
            <button className="close-btn circle-btn red">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button className="close-btn circle-btn yellow">
              <i className="fa-solid fa-window-minimize"></i>
            </button>
            <button className="maximize-btn circle-btn green">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>

        <div className="popup-body">
          <div className="skill-list">
            <h1>Skills</h1>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Vue JS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="project-container">
            <h1>Projects</h1>
            <div className="all-projects">
              <div className="project-box">
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/0c183f3d-cc94-4ed9-afea-4d33740dbf40"
                  alt="" />
                <div className="overlay">
                  <h3>Adventure Landing Page</h3>
                  <button className="more-btn">
                    <span>Learn More</span>
                  </button>
                </div>
              </div>

              <div className="project-box">
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/08c8b66f-7e24-42d9-848d-23e30f7e1968"
                  alt="" />
                <div className="overlay">
                  <h3>Landing Page Template</h3>
                  <button className="more-btn">
                    <span>Learn More</span>
                  </button>
                </div>
              </div>

              <div className="project-box">
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d6e74bee-a0f6-416e-98cc-b0985caf507f"
                  alt="" />
                <div className="overlay">
                  <h3>Travel Landing Page</h3>
                  <button className="more-btn">
                    <span>Learn More</span>
                  </button>
                </div>
              </div>

              <div className="project-box">
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/28946a23-30af-4b36-b30b-e4a3e696aaf6"
                  alt="" />
                <div className="overlay">
                  <h3>Plant Search App</h3>
                  <button className="more-btn">
                    <span>Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="popup" id="testimonial">
      <div className="popup-container">
        <div className="popup-header">
          <div className="button-container">
            <button className="close-btn circle-btn red">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button className="close-btn circle-btn yellow">
              <i className="fa-solid fa-window-minimize"></i>
            </button>
            <button className="maximize-btn circle-btn green">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>
        <div className="popup-body testimonial-container">
          <h1>Testimonials</h1>

          <div className="slider-container">
            <div className="swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="user-info">
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c3e8a2a1-ab19-4fae-be0c-92bb3b6f3122"
                      alt="" />
                    <h2>Emily Sullivan</h2>
                  </div>
                  <p>
                    Ruth makes websites look really cool and work smoothly.
                    She's turning ideas into websites that just make sense!
                  </p>
                </div>

                <div className="swiper-slide">
                  <div className="user-info">
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f54a0d84-8f52-4fa6-886f-0acb5a724130"
                      alt="" />
                    <h2>Oliver Reynolds</h2>
                  </div>
                  <p>
                    Ruth is the go-to person for making websites look awesome.
                    She pays attention to the details that make a big
                    difference.
                  </p>
                </div>

                <div className="swiper-slide">
                  <div className="user-info">
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/30f2184c-df17-4fd8-aabf-2db7cdad85e4"
                      alt="" />
                    <h2>Margaret Turner</h2>
                  </div>
                  <p>
                    Ruth's ability to transform ideas into visually appealing
                    and user-friendly websites showcases her dedication and
                    talent in the field.
                  </p>
                </div>

                <div className="swiper-slide">
                  <div className="user-info">
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f010b87b-d741-44c2-8985-133b25cce2ea"
                      alt="" />
                    <h2>Ava Mitchell</h2>
                  </div>
                  <p>
                    If you want a website that looks fantastic, Ruth is the
                    person to call. She brings creativity and tech skills
                    together seamlessly.
                  </p>
                </div>

                <div className="swiper-slide swiper-no-swiping">
                  <div className="user-info">
                    <img
                      src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/0ca59a80-3ef2-4f1e-b80a-bf957207838f"
                      alt="" />
                    <h2>Samuel Morgan</h2>
                  </div>
                  <p>
                    Ruth is a frontend genius! Her work is clean, modern, and
                    always leaves a positive impression.
                  </p>
                </div>
              </div>
              <ul className="control" id="custom-control">
                <li className="prev">
                  <ion-icon className="arrow" name="caret-back-outline"></ion-icon>
                </li>
                <li className="next">
                  <ion-icon
                    className="arrow"
                    name="caret-forward-outline"></ion-icon>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="popup" id="contact">
      <div className="popup-container">
        <div className="popup-header">
          <div className="button-container">
            <button className="close-btn circle-btn red">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <button className="close-btn circle-btn yellow">
              <i className="fa-solid fa-window-minimize"></i>
            </button>
            <button className="maximize-btn circle-btn green">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>
        <div className="popup-body contact-container">
          <h1>Contact</h1>
          <p>Hi there, you can contact with me via email.</p>
          <form>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.." />

            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your mail.." />

            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{height: "200px"}}></textarea>

            <button className="submit-btn more-btn" type="submit">
              <span>Submit <i className="fa-solid fa-paper-plane"></i></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </body>
    </>
  );
}

export default HomePage;
