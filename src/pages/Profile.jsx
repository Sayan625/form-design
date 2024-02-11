// Import React and the profile picture and icon images
import React from 'react'
import profilepic from '../images/Ellipse 114.png'
import icon from '../images/Group 1585.png'

// Define the Profile component
const Profile = () => {
    return (
        <div className=''>
            {/* Page header */}
            <div className="p-header">
                <p style={{ padding: ' 27px 0 0 15px' }}>
                    Account Settings
                </p>
            </div>
            {/* Main container */}
            <div className="App">
                <div className="card">
                    {/* Profile section */}
                    <div className="profile">
                        {/* Profile image */}
                        <div className="profile-img">
                            <img className='img' src={profilepic} alt="" />
                            <img className='icon' src={icon} alt="" />
                        </div>
                        {/* Profile text */}
                        <div className="profile-text">
                            <p style={{ fontSize: '15px', color: '1D2226', fontWeight: 'bold', marginBottom: '6px' }}>Marry Doe</p>
                            <p style={{ fontSize: '14px', color: '1D2226' }}>Marry@Gmail.Com</p>
                        </div>
                    </div>
                    {/* Profile description */}
                    <div className="profile-desc">
                        <p style={{fontSize:'14px', textAlign:'left'}}>
                            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                        </p>
                    </div>
                </div>
                {/* Footer */}
                <div className="footer">
                </div>
            </div>
        </div>
    )
}

// Export the Profile component
export default Profile
