import PropTypes from 'prop-types';

const Memory = ({ memory: { title, text, subtitle, img, experience } }) => {
   return (
      <>
         <div className='relative my-16 md:mb-7'>
            <div className='travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse'>
               <div className='flex items-center justify-start lg:justify-center w-full max-w-md'>
                  <img src={img} alt="memory" className='w-auto h-[55vh] object-fill' />
               </div>
               <div className='grid items-center w-full max-w-2xl lg:text-center'>
                  <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>
                     {title}
                  </h1>
                  <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg'>
                     {subtitle}
                  </h1>
                  <p className='text-base my-5 sm:text-sm'>
                     {text}
                  </p>
                  <div className='grid items-center grid-cols-3 gap-7 xl:gap-3'>
                     {experience?.map((item, i) => (
                        <div key={i} className='bg-gradient-to-b from-emerald-500 to-green-300 shadow-lg shadow-emerald-200 rounded-lg h-auto w-auto flex items-center justify-center flex-col text-slate-900 text-center py-7 
                        px-5 xl:p-5 filter cursor-pointer hover:scale-110 transition-all duration-500'>
                           <h1 className='text-3xl xl:text-2xl sm:text-xl font-bold drop-shadow-lg'>
                              {item.number}
                           </h1>
                           <p className='text-lg xl:text-base sm:text-sm xsm:text-xs font-medium'>
                              {item.title}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

Memory.propTypes = {
   memory: PropTypes.any
};

export default Memory;
