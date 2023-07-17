import React,{memo} from 'react'
const logo1=  require('../Asset/logo1.jpg');
const logo2=  require('../Asset/logo2.jpg');
const logo3=  require('../Asset/logo3.jpg');
const logo4=  require('../Asset/logo4.jpg');
const Logo = () => {
  return (
    <><div className="w-screen bg-[#947967] text-[#333333]">
    <div className="container   m-auto py-2 ">
        <h1 className='m-auto text-center font-semibold text-4xl py-6    text-[#f1f1f1] duration-300' > Her is our Logo representation 😍😍</h1>
   <div className="my-6 border-4 hover:bg-slate-900" > <img src={logo1} alt="not happening" loading='lazy' />
   </div>
   <div className=" my-6 border-4" data-aos="fade-right"> <img src={logo2} alt="not happening"  />
   </div>
   <div className="my-6 border-4"  data-aos="fade-left"  > <img src={logo3} alt="not happening"  />
   
   </div>
   <div className="my-6 border-4"  data-aos="fade-left"  > <img src={logo4} alt="not happening"  />
   
   </div>
 </div>
 </div></>
  )
}

export default memo(Logo)