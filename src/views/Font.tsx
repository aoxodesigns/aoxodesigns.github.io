import React, {memo} from 'react'
const font = require('../Asset/font.jpg')
const font1 = require('../Asset/font2.jpg')
const font2 = require('../Asset/font3.jpg')
const Font = () => {
  return (
    <><div className="w-screen bg-[#947967] text-[#333333]">
   <div className="container   m-auto py-2 ">
       <h1 className='m-auto text-center font-semibold text-4xl py-6  text-[#f1f1f1]' > Her is our Font palette 💬💬   </h1>
  <div className="my-6 border-4" > <img src={font} alt="not happening" loading='lazy' />
  </div>
  <div className=" my-6 border-4" data-aos="fade-right"> <img src={font1} alt="not happening"  />
  </div>
  <div className="my-6 border-4"  data-aos="fade-left"  > <img src={font2} alt="not happening"  />
  </div>
</div>
</div></>
  )
}

export default memo( Font)