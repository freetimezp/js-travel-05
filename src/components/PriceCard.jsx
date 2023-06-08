import PropTypes from 'prop-types';

const PriceCard = ({ plan: { planicon, title, text, plantype, plancontent, buttonText } }) => {
   return (
      <div className='p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-100 shadow-md shadow-slate-300
      hover:scale-105 transition-all duration-300'>
         <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
               <div className='grid items-center'>
                  <img src={planicon} alt="plan" className='w-14 h-14 lg:w-12 lg:h-12 object-cover' />
               </div>
               <div className='grid items-center'>
                  <h1 className='text-gray-900 font-semibold text-lg filter drop-shadow-lg lg:text-base 
                  md:text-sm'>
                     {title}
                  </h1>
                  <p className='text-slate-900 font-normal text-sm lg:text-xs'>
                     {text}
                  </p>
               </div>
            </div>
            <div className='grid items-center'>
               <h1 className='text-gray-900 font-bold text-lg filter drop-shadow-lg lg:text-base 
                  md:text-sm'>
                  {plantype}
               </h1>
            </div>
         </div>

         <div className='h-[0.1vh] bg-slate-200 my-5'></div>

         <div className='grid items-center gap-3 px-5'>
            {plancontent?.map((item, i) => (
               <div key={i} className='flex items-center justify-start gap-5'>
                  <div className='grid items-center'>
                     <img src={item.iconbox} alt="icon" className='lg:w-5 lg:h-5' />
                  </div>
                  <div className='grid items-center'>
                     <h1 className='font-normal text-lg text-gray-900 filter drop-shadow-lg lg:text-base
                     hover:text-emerald-400 transition-all duration-300 cursor-pointer'>
                        {item.text}
                     </h1>
                  </div>
               </div>
            ))}
         </div>

         <div className='grid items-center justify-items-center mt-7 text-base'>
            <button className="button-emrald" type="button">
               {buttonText}
            </button>
         </div>
      </div>
   );
};

PriceCard.propTypes = {
   plan: PropTypes.any
};

export default PriceCard;
