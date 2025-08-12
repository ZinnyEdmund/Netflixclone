import "./Dsignup.css";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebaseConfig"; // adjust if needed
import { useNavigate } from "react-router-dom";
import Logo from '../../Images/Logo.png';

const Dsignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic check
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    if (password.length < 6) {
      alert("Password should be at least 6 characters long");
      return;
    }

    if (!email || !password || !username) {
      alert("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setLoadingMessage("Creating your account...");

    try {
      const Auth = getAuth(auth);
      const userCredential = await createUserWithEmailAndPassword(
        Auth,
        email,
        password
      );
      console.log("User created:", userCredential.user);

      // Add realistic loading stages
      setLoadingMessage("Setting up your profile...");
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setLoadingMessage("Preparing your dashboard...");
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setLoadingMessage("Almost ready...");
      await new Promise(resolve => setTimeout(resolve, 500));

      navigate("/dashboard"); // you'll build this later

    } catch (error: unknown) {
      setIsLoading(false);
      setLoadingMessage("");

     if (error instanceof Error) {
        // Handles specific Firebase errors
        const errorMessage = error.message;
        if (errorMessage.includes("email-already-in-use")) {
          alert("This email is already registered. Please use a different email or sign in.");
        } else if (errorMessage.includes("weak-password")) {
          alert("Password is too weak. Please choose a stronger password.");
        } else if (errorMessage.includes("invalid-email")) {
          alert("Please enter a valid email address.");
        } else {
          alert(errorMessage);
        }
      } else {
        alert("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="dsignup-container">
      <div className="Dsignup_logo">
        <img src={Logo} alt="Logo" />
      </div>

      <section className="DSIGNER-SECTION">
        <div className="dsign-content">
          {isLoading ? (
            // Loading screen
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <h2>Welcome to My Netflix Clone!</h2>
              <p>{loadingMessage}</p>
            </div>
          ) : (
            // Sign up form
            <>
              <h1>Sign Up</h1>
              <form className="My_Forms" onSubmit={handleSignUp}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  className="inputContent1"
                  required
                />

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="inputContent2"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password (min 6 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    className="inputContent3"
                    required
                  />
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete="new-password"
                    className="inputContent4"
                    required
                  />
                </div>
                
                <button 
                  className="signup" 
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Sign Up"}
                </button>
              </form>
              
              <p className="signup-text">
                Already have an account? <a href="/signin">Sign In</a>
              </p>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dsignup;
