import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Nav = () => {
    const anActive = 'tab'
    const active = 'tab border-tab'
    return (
        <div className='tabs'>
            <div className='container'>
                <div className='nav-wrapper'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? active : anActive
                        }
                    >
                        <p className='tab-text'>Cancel at any time</p>
                    </NavLink>
                    <NavLink
                        to='/tab2'
                        className={({ isActive }) =>
                            isActive ? active : anActive
                        }
                    >
                        <p className='tab-text'>Watch anywhere</p>
                    </NavLink>
                    <NavLink
                        to='/tab3'
                        className={({ isActive }) =>
                            isActive ? active : anActive
                        }
                    >
                        <p className='tab-text'>Pick your price</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Nav
