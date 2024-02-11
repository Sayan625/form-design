// Import React and Link component from react-router-dom
import React from 'react'
import { Link } from 'react-router-dom'

// Define the Main component
const Main = () => {
    return (
        // Main container with class 'App'
        <div className='App'>
            {/* Main page container */}
            <div className='main-page-container'>
                {/* Title */}
                <p className='title' style={{marginBottom:'10px'}}>Welcome to PopX</p>
                {/* Text description */}
                <p className='text-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            {/* Main page button group */}
            <div className='main-page-btn-grp'>
                {/* Link to signup page */}
                <Link className='btn text-white p-color' to='/signup'>Create Account</Link>
                {/* Link to login page */}
                <Link className='btn s-color' to='/login'>Already Registered? Login</Link>
            </div>
        </div>
    )
}

// Export the Main component
export default Main
