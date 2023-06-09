import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import logo from '../images/logo.png';
import menu from '../images/menu.svg';

import PopupMenu from './PopupMenu';

const Navbar = ({ navlinks }) => {
    const [popupMenu, setPopupMenu] = useState(false);
    const [navState, setNavState] = useState(false);

    const onTogglePopup = () => {
        setPopupMenu(!popupMenu);
    }

    const onNavScroll = () => {
        if (window.scrollY > 50) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);

    return (
        <>
            <header className={`nav-default ${navState && 'nav-sticky'}`}>
                <nav className='flex items-center justify-between travigo-container'>
                    <NavLink to={`/`} className="flex items-center">
                        <img src={logo} alt="logo" className='w-22 h-9 object-fill' />
                    </NavLink>
                    <ul className='flex items-center lg:hidden gap-7'>
                        {navlinks?.map((item, i) => (
                            <li key={i}>
                                <NavLink to={`#${item.id}`} className="text-lg text-slate-900">
                                    {item.link}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <ul className='flex items-center lg:hidden'>
                        <li>
                            <button type="button" className='button-emrald px-7 text-base'>
                                Join Us
                            </button>
                        </li>
                    </ul>
                    <ul className='hidden lg:flex items-center'>
                        <li>
                            <button type='button' className='flex items-center justify-center transition-all 
                            duration-200 active:scale-90 cursor-pointer' onClick={onTogglePopup}>
                                <img src={menu} alt="menu toggler" className='object-cover shadow-sm filter' />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

            <PopupMenu navlinks={navlinks} popupMenu={popupMenu} />
        </>
    );
};

Navbar.propTypes = {
    navlinks: PropTypes.any,
};

export default Navbar;
