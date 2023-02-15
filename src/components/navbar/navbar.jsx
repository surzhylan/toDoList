import React from 'react';
import './navbar.css'

const Navbar = ({coins}) => {
    return(
        <div className = "menubar">
            <div className='avatar'>
                <img src="snake.png" alt=''/>
            </div>
            <div className='status'>
                <div className='profile'>
                    <h3>aleka</h3>  
                    <div className='prof-small-text'>
                        <span>@surzhylan</span>
                    </div>
                </div>
                <div className='prof-money'>
                    <img src="coin.png" alt="" />
                    <span className='prof-small-text money-text'>{coins}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;