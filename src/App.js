import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
