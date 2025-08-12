import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./signuppage/Signin";
import Signup from "./signuppage/Signup";
import Mydashboard from "./Mydashboard/Mydashboard";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Mydashboard" element={<Mydashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
