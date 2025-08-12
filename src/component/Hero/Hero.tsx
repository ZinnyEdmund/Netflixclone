import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./hero.css";
import Logo from "../../Images/Logo.png";

// Utility function for email validation (moved outside component)
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isValidEmailState, setIsValidEmailState] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/Signin");
  };

  // Handle email input changes with real-time validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError("");

    if (emailValue.trim()) {
      if (isValidEmail(emailValue)) {
        setIsValidEmailState(true);
        setEmailError("");
      } else {
        setIsValidEmailState(false);
        if (emailValue.includes("@")) {
          setEmailError("Please enter a valid email address");
        }
      }
    } else {
      setIsValidEmailState(false);
    }
  };

  const handleSignUp = async () => {
    if (!email.trim()) {
      setEmailError("Email is required!");
      return;
    }

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Store email in localStorage for better UX
      localStorage.setItem("signupEmail", email);
      
      // Add small delay for professional feel
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Navigate to signup with email in state
      navigate("/Signup", { state: { email } });
    } catch (error) {
      console.error("Navigation error:", error);
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  return (
    <div className="Main">
      <div className="hero">
        <div className="container-main">
          <header className="header">
            <img src={Logo} alt="Netflix Clone Logo" />
            <button onClick={handleSignIn} className="signin-button">
              Sign In
            </button>
          </header>
        </div>

        <div className="Text-center">
          <div className="myie">
            <h1>Unlimited movies, TV shows, and more</h1>
          </div>
          <h3>Starts at ₦2,500. Cancel anytime.</h3>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>

        <div className="Sctt">
          <div className="email-input-container">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onKeyPress={handleKeyPress}
              placeholder="Email address"
              className={`inptBox inputContent ${
                emailError ? "input-error" : isValidEmailState ? "input-valid" : ""
              }`}
              disabled={isLoading}
              autoComplete="email"
              required
            />
            {emailError && <span className="error-message">{emailError}</span>}
            {isValidEmailState && !emailError && (
              <span className="success-message">✓</span>
            )}
          </div>

          <button 
            className={`StartButton ${isLoading ? "loading" : ""}`}
            onClick={handleSignUp}
            disabled={isLoading || !isValidEmailState}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner-small"></span>
                Getting Started...
              </>
            ) : (
              <>
                Get Started{" "}
                <span className="span">
                  <IoIosArrowForward />
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;