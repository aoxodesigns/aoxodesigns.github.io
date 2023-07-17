import React, {memo,useEffect} from 'react'
// import Aos from 'aos'
// import 'aos/dist/aos'
const home3=  require( '../Asset//home.jpg')
const home2= require( '../Asset/home2.jpg')
const home1=  require( '../Asset/hpme.jpg')

const Home = (): JSX.Element  => {
    // useEffect(()=>{
    //     Aos.init({duration:6000})
    // },[])
    return (
    <>
    <div className="w-screen bg-[#947967] text-[#333333]">
        <div className="container   m-auto py-2 ">
            <h1 className='m-auto text-center font-semibold text-4xl py-6  text-[#f1f1f1] ' > Welcome to AOXO  </h1>
       <div className="border-4" > <img src={home1} alt="not happening"  />
       </div>
       <div className=" mt-3 border-4" data-aos="fade-right" > <img src={home2} alt="not happening"  />
       </div>
       <div className="mt-3 border-4"  data-aos="fade-right"  > <img src={home3} alt="not happening"  />
       </div>
    </div>
    </div>
    </>
  )
}

export default memo(Home)