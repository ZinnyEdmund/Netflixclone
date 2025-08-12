import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

// Utility function for email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isValidEmailState, setIsValidEmailState] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const navigate = useNavigate();

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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
    // You can add actual language change logic here
  };

  return (
    <div className="content">
      <div className="sect">
        <p className="watchiee">
          Ready to watch? Enter your email to create or restart your membership.
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

      <div className="container">
        <ul className="lite">
          <li>
            <a href="mailto:support@netflixclone.com">Questions? Contact us.</a>
          </li>
        </ul>
        
        <div className="footer">
          <div className="footer-column">
            <ul>
              <li>
                <a href="https://help.netflix.com/en/node/412" target="_blank" rel="noopener noreferrer">
                  FAQ
                </a>
              </li>
              <li>
                <a href="https://ir.netflix.net/ir-overview/profile/default.aspx" target="_blank" rel="noopener noreferrer">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy
                </a>
              </li>
              <li>
                <a href="https://fast.com/" target="_blank" rel="noopener noreferrer">
                  Speed Test
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <li>
                <a href="https://help.netflix.com/en" target="_blank" rel="noopener noreferrer">
                  Help Center
                </a>
              </li>
              <li>
                <a href="https://jobs.netflix.com/" target="_blank" rel="noopener noreferrer">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); alert("Cookie preferences would open here"); }}>
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/notices" target="_blank" rel="noopener noreferrer">
                  Legal Notices
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <li>
                <a href="https://www.netflix.com/ng/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount" target="_blank" rel="noopener noreferrer">
                  Account
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/en/node/14361" target="_blank" rel="noopener noreferrer">
                  Ways to Watch
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/en/node/134094" target="_blank" rel="noopener noreferrer">
                  Corporate Information
                </a>
              </li>
              <li>
                <a href="https://www.netflix.com/ng/browse/genre/839338" target="_blank" rel="noopener noreferrer">
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <ul>
              <li>
                <a href="https://media.netflix.com/en/" target="_blank" rel="noopener noreferrer">
                  Media Center
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/legal/termsofuse" target="_blank" rel="noopener noreferrer">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="https://help.netflix.com/en/contactus" target="_blank" rel="noopener noreferrer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footing">
        <select 
          name="languages" 
          id="languages" 
          className="Lastie"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="English">English</option>
          <option value="Français">Français</option>
          <option value="Español">Español</option>
          <option value="Deutsch">Deutsch</option>
        </select>
        
        <p className="p1">Netflix Nigeria</p>
        
        <p className="p2">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" onClick={(e) => { e.preventDefault(); alert("reCAPTCHA info would show here"); }}>
            Learn More.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;