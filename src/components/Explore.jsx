import PropTypes from 'prop-types';

const Explore = ({ title, placesAPI }) => {
    return (
        <>
            <div className='relative my-7 md:mt-3'>
                <div className='travigo-container'>
                    <div className='flex items-center justify-center text-center mb-11 md:mb-7'>
                        <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter
                        drop-shadow-lg text-slate-900'>
                            {title}
                        </h1>
                    </div>
                    <div className='grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        {placesAPI?.map((item, i) => (
                            <div key={i} className='flex items-center gap-5 sm:gap-3 rounded-lg hover:bg-emerald-200
                            transition-all duration-300 cursor-pointer hover:scale-105'>
                                <div className='flex items-center'>
                                    <img src={item.placeImg} alt="place" className='w-20 h-20 sm:w-16 sm:h-16 rounded-lg 
                                    filter drop-shadow-lg' />
                                </div>
                                <div className='flex items-start flex-col text-sky-900'>
                                    <h1 className='text-lg sm:text-sm font-bold'>
                                        {item.location}
                                    </h1>
                                    <p className='font-normal lg:text-sm sm:text-xs text-base'>
                                        {item.distance}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

Explore.propTypes = {
    title: PropTypes.string,
    placesAPI: PropTypes.any
};

export default Explore;
