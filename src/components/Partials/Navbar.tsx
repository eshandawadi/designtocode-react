import React from 'react';
import  "../Partials/Navbar.scss"
import { NavLink } from 'react-router-dom';

 export const Navbar = () => {
    return (
        
        <div>
           <div className='Navbar-container'>
               <div className='navbar'>
                   <div className='logo'>
                     PoemNet

                          
                   </div>
                   
                   <div className='input-container'>
                   <i className="fa-solid fa-magnifying-glass"></i>
                

                
                 <input type="text" placeholder='search'></input>
                   </div>
                  

                <div className='Navlinks'>
                    <div className='Navlink'>Categories</div>
                    <div className='Navlink'>Login </div>
                    <div className='Navlink'><button className="registerBtn">Register</button></div>

                    
                </div>
               </div>

           </div>
        </div>
    );
};

