import React ,{memo}    from 'react'
import { Link } from 'react-router-dom'

const img1 =  require( '../Asset/Logo.jpg')


const Hearder = ():JSX.Element => {
  return (
  <>
  
   <div className='border-2 border-b-gray-300  justify-between overflow-hidden  flex'>
  <div className="cols-start ml-3"> <img src={img1} alt="" className='bg-black border-red-600 w-[50px] h-auto' loading='lazy'/> <p className='font-semibold' >Aoxo   </p></div>
  {/* <div className="cols-start-2"> </div> */}
  <div className="">
<div className="float-right">
<button className='  hover:bg-[#947967] active:bg-[#947967] hover:text-[#f1f1f1] font-semibold focus:ring focus:text-[#f1f1f1] rounded-md px-4 transition duration-700 py-2 mr-2'> <Link to='/'>Home</Link> </button>
<button className=' hover:bg-[#947967] active:bg-[#947967]  hover:text-[#f1f1f1] font-semibold focus:ring focus:text-[#f1f1f1] rounded-md px-4 transition duration-700 py-2 mr-2'> <Link to='/story'>Story</Link> </button>
<button className='hover:bg-[#947967] active:bg-[#947967]  hover:text-[#f1f1f1] font-semibold focus:ring focus:text-[#f1f1f1] rounded-md px-4 transition duration-700 py-2 mr-2'> <Link to='/color'>color</Link> </button>
<button className='hover:bg-[#947967] active:bg-[#947967]  hover:text-[#f1f1f1] font-semibold focus:ring focus:text-[#f1f1f1] rounded-md px-4 transition duration-700 py-2 mr-2'> <Link to='/font'>Font</Link> </button>
<button className='hover:bg-[#947967] active:bg-[#947967]  hover:text-[#f1f1f1] font-semibold focus:ring focus:text-[#f1f1f1] rounded-md px-4 transition duration-700 py-2 mr-2'> <Link to='/logo'>logo</Link> </button>
<button className='hover:bg-[#947967] active:bg-[#947967]  hover:text-[#f1f1f1] font-semibold focus:ring focus:text-[#f1f1f1] rounded-md px-4 transition duration-700 py-2 '> <Link to='/contact'>contact us</Link> </button>
{/* <button className='hover:bg-[#947967] active:bg-[#947967]  hover:text-[#f1f1f1] font-semibold focus:ring focus:text-[#f1f1f1] rounded-md px-4 transition duration-700 py-2 mr-2'> <Link to='/thank'>Thank You</Link> </button> */}

</div>
</div>

</div></>
  )
}

export default memo(Hearder) 