import React from 'react'
const contact1 = require('../Asset/thnbak.jpg')
// const contact2 = require('../Asset/company1.jpg')
const contact = () => {
  return (
    <><div className="w-screen bg-[#947967] text-[#333333]">
    <div className="container   m-auto py-2 ">
        <h1 className='m-auto text-center font-semibold text-4xl py-6 text-[#f1f1f1]' > Thank You  👋👋   </h1>
   <div className="my-6 border-4" > <img src={contact1} alt="not happening" loading='lazy' />
   </div>
   {/* <div className=" my-6" data-aos="fade-right"> <img src={contact2} alt="not happening"  />
   </div> */}
   {/* <div className="my-6"  data-aos="fade-left"  > <img src={font2} alt="not happening"  /> */}
   </div>
 </div>
 </>
  )
}

export default contact