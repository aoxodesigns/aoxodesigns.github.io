import React, {memo} from 'react'
const color= require('../Asset/color1.jpg')
const color1= require('../Asset/color2.jpg')
const color2= require('../Asset/color3.jpg')
const Color = () => {
  return (
   <><div className="w-screen bg-[#947967] text-[#333333]">
   <div className="container   m-auto py-2 ">
       <h1 className='m-auto text-center font-semibold text-4xl py-6  text-[#f1f1f1] ' > Her is our color palette 🎨🎨   </h1>
  <div className="my-6 border-4" > <img src={color} alt="not happening" loading='lazy' />
  </div>
  <div className=" my-6 border-4" data-aos="fade-right"> <img src={color1} alt="not happening"  />
  </div>
  <div className="my-6 border-4"  data-aos="fade-left"  > <img src={color2} alt="not happening"  />
  </div>
</div>
</div></>
  )
}

export default memo(Color)