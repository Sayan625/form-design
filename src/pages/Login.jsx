// Import React and Link component from react-router-dom
import React from 'react'
import { Link } from 'react-router-dom'

// Define the Login component
const Login = () => {
    return (
        // Main container with class 'App'
        <div className='App'>
            {/* Title */}
            <p className='title' style={{ width: '188px', marginBottom: '14px' }}>Signin to your PopX account</p>
            {/* Text description */}
            <p className='text-desc' style={{ width: '232px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

            {/* Form inputs */}
            <div style={{ marginTop: "24px" }}>
                <div className="input-grp">
                    <span className='input-label text-p'>Email address</span>
                    <input className="input" type="email" placeholder='Enter email address' />
                </div>
                <div className="input-grp">
                    <span className='input-label text-p'>Password</span>
                    <input className="input" type="password" placeholder='Enter email address' />
                </div>
                {/* Login button */}
                <Link className='btn text-white btn-disabled' to='/profile'> Login</Link>
            </div>
        </div>
    )
}

// Export the Login component
export default Login
