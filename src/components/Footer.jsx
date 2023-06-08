import PropTypes from 'prop-types';

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
    return (
        <footer className='bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7'>
            <div className='grid items-center grid-cols-3 justify-items-center'>
                {titles?.map((item, i) => (
                    <div key={i} className='grid items-center justify-items-center'>
                        <h1 className='text-xl lg:text-base uppercase font-semibold'>
                            {item.title}
                        </h1>
                    </div>
                ))}
                {links?.map((list, i) => (
                    <ul key={i} className='grid items-center justify-items-center gap-1'>
                        {list?.map((el, index) => (
                            <li key={index} className='text-sm sm:text-xs cursor-pointer'>
                                {el.link}
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className='w-7/12 lg:w-[95vw] m-auto mt-9'>
                <div className='h-[0.1vh] bg-black/30 my-7 md:my-5'></div>
                <div className='flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse'>
                    <p className='text-sm md:text-center'>
                        Copyright <sup className='text-base font-bold'>&copy;</sup>
                        All Rights Reserved 2023 <span className='font-semibold'>Freetime</span>
                    </p>
                    <div className='flex items-center gap-3'>
                        {sociallinks?.map((social, i) => (
                            <img src={social.icon} alt="social" key={i} className='w-5 h-5 cursor-pointer 
                            transform hover:-translate-y-1 transition-all duration-300' />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    footerAPI: PropTypes.any
};

export default Footer;
