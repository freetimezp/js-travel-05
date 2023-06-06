import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import logo from '../images/logo.png';
import menu from '../images/menu.svg';

const Navbar = ({ navlinks }) => {
    return (
        <>
            <header className='flex items-center justify-center w-auto h-auto absolute top-7 left-0 right-0'>
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
                            duration-200 active:scale-90'>
                                <img src={menu} alt="menu toggler" className='object-cover shadow-sm filter' />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

Navbar.propTypes = {
    navlinks: PropTypes.any,
};

export default Navbar;
