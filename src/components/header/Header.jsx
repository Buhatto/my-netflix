import React from 'react'
import './style.css'

const Header = () => {
    return (
        <div className='showcase'>
            <div class='showcase-top'>
                <img src='https://i.ibb.co/r5krrdz/logo.png' alt='' />
                <button className='btn btn-login'>Sign in</button>
            </div>
            <div className='showcase-content'>
                <h1>See what's next</h1>
                <p>watch anywhere. cancel anytime</p>
                <button className='btn-xl btn'>Watch free for 30 days</button>
            </div>
        </div>
    )
}

export default Header
