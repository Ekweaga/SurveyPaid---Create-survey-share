import React,{useState} from 'react'
import Image from "next/image"
import Link from "next/link"

function Navbar() {
    const [open, setOpen] = useState(false);
  return (
   <>
   <nav className='flex justify-between p-4 items-center'>
    <div>
        <Image src="/survey.png" width={150} height={100} alt="logo"/>
    </div>

    <div>
        <ul className='md:flex justify-between p-4 items-center gap-[20px] hidden'>
            <li>About us</li>
            <li>How it works?</li>
            <li>Support</li>
            <li><button className='border-[1px] border-[#80BFFF] p-2 flex items-center justify-center gap-[10px]'> <Image src="/bi_paypal.png" width={20} height={50} alt="logo"/>Get Paid to your Paypal</button></li>
        </ul>
    </div>

    <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
           <Image src={open ? "/icon-close.svg" :"/icon-hamburger.svg"} alt="icon" width={20} height={15}></Image>
        </div>


        <div
          className={`md:hidden text-black absolute w-2/3 h-screen z-10
      px-7 py-2 font-medium bg-white  top-0 duration-300 ${
        open ? "left-0 block" : "left-0 hidden"
      }`}
        style={{zIndex:9999999999999}}>
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px]">
                
                <li  onClick={() => setOpen(!open)}><Link href="/">Home</Link></li>
                <li  onClick={() => setOpen(!open)}>About Us</li>
                <li  onClick={() => setOpen(!open)}>How it works?</li>
                <li  onClick={() => setOpen(!open)}>Support</li>
          </ul>
        </div>
   </nav>
   </>
  )
}

export default Navbar