import React,{memo} from 'react'
const story1 = require('../Asset/company2.jpg')
const storyt2= require('../Asset/company1.jpg')
const logo= require('../Asset/Logo.jpg')
const Story = () => {
  return (
 <>
     <div className="w-screen bg-[#947967] text-[#333333]">
        <div className="container   m-auto py-2 " >
          <div className="">
            <h1 className='m-auto text-center font-semibold text-4xl py-6 text-[#f1f1f1] ' ><span> Here is our AOXO Story 📃📃  </span> </h1>
            </div>
       <div className="my-6 border-4" > <img src={story1} alt="not happening" loading='lazy' />
       </div>
       <div className=" my-6 border-4" data-aos="fade-right"> <img src={storyt2} alt="not happening"  />
       </div>
       
       </div>
    </div>
 </>
  )
}

export default memo(Story)