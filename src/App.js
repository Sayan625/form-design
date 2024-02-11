// Import CSS file and necessary components from react-router-dom
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// Import page components
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

// Define the main App component
function App() {
  return (
    // Main container
    <div className="">
      {/* Router component to enable routing */}
      <Router>
        {/* Routes component to define routes */}
        <Routes>
          {/* Route for the profile page */}
          <Route path="/profile" element={<Profile />} />
          {/* Route for the main page */}
          <Route path="/" element={<Main />} />
          {/* Route for the login page */}
          <Route path="/login" element={<Login />} />
          {/* Route for the signup page */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

// Export the App component
export default App;
