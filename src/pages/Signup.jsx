import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='App'>
            <p className='title' style={{ width: '188px', marginBottom: '31px' }}>Create your PopX account</p>
            <form className="container">
                <div className="">
                    <div className="input-grp">
                        <span className='input-label text-p'>Full Name</span>
                        <input className="input" type="text" placeholder='Enter email address' />
                    </div>
                    <div className="input-grp">
                        <span className='input-label text-p'>Phone number</span>
                        <input className="input" type="text" placeholder='Enter email address' />
                    </div>
                    <div className="input-grp">
                        <span className='input-label text-p'>Email address</span>
                        <input className="input" type="email" placeholder='Enter email address' />
                    </div>
                    <div className="input-grp">
                        <span className='input-label text-p'>Password</span>
                        <input className="input" type="password" placeholder='Enter email address' />
                    </div>
                    <div className="input-grp">
                        <span className='input-label text-p'>Company name</span>
                        <input className="input" type="text" placeholder='Enter email address' />
                    </div>
                    <div className="chek-box-grp" >
                        <input className="radio" type="radio" checked id='1' />
                        <label htmlFor="1" style={{ marginRight: "20px" }}>yes</label>

                        <input className="radio" type="radio" id='2' />
                        <label htmlFor="2">No</label>
                    </div>
                </div>

                <Link className='btn text-white p-color' style={{marginBottom:'30px'}} to='/profile'> Create Account</Link>
            </form>

        </div>
    )
}

export default Signup