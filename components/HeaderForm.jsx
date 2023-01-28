import React from 'react'
import Image from "next/image"

function HeaderForm() {
  return (
    <>
    <div className='FormContainer bg-white h-[350px] rounded-2xl w-[300px] shadow-2xl p-4' style={{zIndex:10}}>
        <h1 className='font-extrabold text-[#65AEFF] mt-[20px]'>Get Started Now</h1>
<p className='text-sm'>Well deposit your earnings into your PayPal account. Our platform is free. Well never charge you for anything without your consent.</p>
   <div className='form mt-[10px]'>
    <div >
        <input type="email" placeholder="Enter email" className='shadow-2xl'/>
    </div>
<br/>
    <div className='shadow-2xl bg-white ' >
        <input type="email" placeholder="Enter password" className='shadow-2xl w-[200px] p-2 '/>
    </div>

    <div>
    <button className='border-[1px] border-[#80BFFF] p-2 flex items-center justify-center gap-[10px] bg-[#3293FF] text-sm text-white w-[250px] mt-[15px]'> <Image src="/bi_paypal 2.png" width={20} height={50} alt="logo"/>Get Paid to your Paypal</button>
        
    </div>

    <p className='text-sm'>By Signing up I agree to the Terms of Service and Privacy Policy.</p>

   </div>
   
    </div>
    </>
  )
}

export default HeaderForm
