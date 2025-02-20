import React from 'react'
import logo from "./assets/images/logo.svg";
import heroImage from "./assets/images/product-hero.png";
import quizIcon from "./assets/icons/quiz.svg";
import chatIcon from "./assets/icons/chat.svg";
import uploadIcon from "./assets/icons/upload.svg";
import uploadImage from "./assets/images/uploadImage.jpg";
import flashcard from "./assets/images/flashcards.jpg";
import summary from "./assets/images/summary.jpg"
import xIcon from "./assets/icons/xicon.svg";
import github from "./assets/icons/github.svg";
import youtube from "./assets/icons/youtube.svg";
import './App.css'

function App() {
  return (
    <div className="App">


      <div className="header">
        <img src={logo} alt="" className="logo" />
        <span className="body-sm">Coming soon</span>
      </div>

      <div className="hero-section"></div>

      <div className="hero-content">

        <span className="badge">
          <span className="body-sm-md">Get 30% OFF for 6 months</span>
        </span>

        <div className="hero-copy">
          <span className="headline">
            Get your answers 100x faster with your custom AI assistant & tools
          </span>
          <span className="body-lg-rg">
            Drop your PDFs, videos, or study materials and instantly get clear summaries, flashcards, quizzes, and an AI assistant to answer your questions - like magic!
          </span>
        </div>

        <div className="input-container">
          <input type="text" placeholder="Enter your email" className="email" />
          <button className="primary">Join Waitlist</button>
        </div>

      </div>


      <div className="hero-image-container">
        <img src={heroImage} alt="heroImage" className="hero-image" />
      </div>

      {/* <div className="logo-container"></div> */}

      <div className="features-container">

        <div className="title-container">
          <span className="mono-sm">Features</span>
          <span className="sectional-title">Understand Faster, Think Deeper</span>
          <span className="body-md-rg">
            Got your study materials feeling like a maze? Our AI cuts through the complexity, turning dense content into clear summaries, flashcards and more.
          </span>
        </div>

        <div className="card-container">

          <div className="card">

            <div className="card-title-container">

              <img src={uploadIcon} alt="upload" />

              <span className="body-lg-sb">Upload & Understand</span>

              <span className="body-md-rg">
                Transform lengthy materials into crisp,
                focused summaries that capture core knowledge
                without feeling overwhelming.
              </span>


            </div>

            <img src={uploadImage} alt="uploadImage" />

          </div>

          <div className="card">

            <div className="card-title-container">

              <img src={quizIcon} alt="quiz" />

              <span className="body-lg-sb">Custom Quiz</span>

              <span className="body-md-rg">
              Tailored quizzes to test your knowledge, 
              Master every topic! Challenge yourself and track  your progress along the way!
              </span>


            </div>

            <img src={flashcard} alt="uploadImage" />

          </div>


          <div className="card">

            <div className="card-title-container">

              <img src={chatIcon} alt="upload" />

              <span className="body-lg-sb">Personalised AI assistant</span>

              <span className="body-md-rg">
               Instant insights, laser-focused answers. Your smart companion that decodes complex concepts in real-time.
              </span>


            </div>

            <img src={summary} alt="uploadImage" />

          </div>

        </div>


      </div>

      <div className="faq-container"></div>

      <div className="footer-container">
        <div className="footer-header">
          <img src={logo} alt="logo" />
          <div className="footer-actions">
            <span className="body-md-rg">Features</span>
            <span className="body-md-rg">Coming soon</span>
            <span className="body-md-rg">Docs</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="body-xs">All Rights Reserved © 2025</span>
          <div className="socials">
            <img src={xIcon} alt="x" />
            <img src={youtube} alt="x" />
            <img src={github} alt="x" />
          </div>
        </div>
      </div>



    </div>

  )
}

export default App
