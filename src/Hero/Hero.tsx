import React from 'react';
 import Heroimage from '../assets/images/Heroimage.png';
 import '../Hero/Hero.scss'

 export const Hero = () => {
    return (
        <div>
    <div className='Hero-Section'>
        <div className='Image-Area'>
            <img src={Heroimage} alt="" />
        </div>
        <div className='login-section'>
            <h1>User Login</h1>
            <div className='line'></div>
            <div className='email-input'>
            <i className="fa-solid fa-envelope"></i>
            <input type="text" placeholder='enter a name'></input>
            
            </div>
            <div className='password-section'>
            <i className="fa-solid fa-lock"></i>
            <input type="text" placeholder='enter a password'></input>
            </div>
            <div className='text-forget'>Forget your password?</div>
            <div className='login'><button className='btn-login'>Login</button></div>
            <div className='account'>Create Account</div>
        </div>
    </div>
            
        </div>
    );
    }

