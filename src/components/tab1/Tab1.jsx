import React from 'react'
import './style.css'

const Tab1 = () => {
    return (
        <div className='tab-wrapper'>
            <div className='container'>
                <div className='tab-1-content'>
                    <div>
                        <p className='text-lg'>
                            If you decide Netflix isn't for you - no problem. No
                            commitment. Cancel online anytime.
                        </p>
                        <button className='btn btn-lg'>
                            watch free for 30 days
                        </button>
                    </div>
                    <img
                        src='https://i.ibb.co/J2xDJV7/tab-content-1.png'
                        alt=''
                    />
                </div>
            </div>
        </div>
    )
}

export default Tab1
