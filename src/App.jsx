import React, { useState } from 'react'
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
import FAQ from './components/faqs/faq';

function App() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Function to validate the email
  function validateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  // Function to submit waitlist data
  function joinWaitlist() {
    if (!email) {
      setError("Please enter your email");
      return;
    }
    
    if (validateEmail(email) === false) {
      setError("Please enter a valid email");
      return;
    }
    
    setLoading(true);
    setError(null);
    setMessage(null);
    
    const data = {
      email: email,
      waitlist_id: 26022, // Replace with your actual waitlist ID
    };

    fetch("https://api.getwaitlist.com/api/v1/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === false) {
          setError(data.error || "Failed to join the waitlist. Please try again.");
        } else {
          setMessage("Successfully added to the waitlist!");
          setEmail(""); // Clear the email input
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("Something went wrong. Please try again later.");
        setLoading(false);
      });
  }

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
          <input
            type="text"
            placeholder="Enter your email"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="primary"
            onClick={joinWaitlist}
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
        </div>
        
        {error && (
          <span
            style={{
              color: "#ff4d4d",
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "10px",
            }}
          >
            {error}
          </span>
        )}

        {message && (
          <span
            style={{
              color: "#2ecc71",
              textAlign: "left",
              fontSize: "14px",
              fontWeight: "500",
              marginTop: "10px",
            }}
          >
            {message}
          </span>
        )}
      </div>

      <div className="hero-image-container">
        <img src={heroImage} alt="heroImage" className="hero-image" />
      </div>

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
                Master every topic! Challenge yourself and track your progress along the way!
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

      <div className="faq-container">
        <FAQ />
      </div>

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