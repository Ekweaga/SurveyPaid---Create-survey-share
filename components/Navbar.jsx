import React from 'react'
import Image from "next/image"

function Navbar() {
  return (
   <>
   <nav className='flex justify-between p-4 items-center'>
    <div>
        <Image src="/survey.png" width={150} height={100} alt="logo"/>
    </div>

    <div>
        <ul className='flex justify-between p-4 items-center gap-[20px]'>
            <li>About us</li>
            <li>How it works?</li>
            <li>Support</li>
            <li><button className='border-[1px] border-[#80BFFF] p-2 flex items-center justify-center gap-[10px]'> <Image src="/bi_paypal.png" width={20} height={50} alt="logo"/>Get Paid to your Paypal</button></li>
        </ul>
    </div>
   </nav>
   </>
  )
}

export default Navbar