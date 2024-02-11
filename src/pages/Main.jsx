import React from 'react'
import { Link } from 'react-router-dom'


const Main = () => {
    return (
        <div className='App'>
            <div className='main-page-container'>
                <p className='title' style={{marginBottom:'10px'}}>Welcome to PopX</p>
                <p className='text-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className='main-page-btn-grp'>
                <Link className='btn text-white p-color' to='/signup'>Create Account</Link>
                <Link className='btn s-color' to='/login'>Already Registered? Login</Link>
            </div>

        </div>
    )
}

export default Main