import Image from "next/image"

function Footer() {
  return (<>

  <footer className="p-3 bg-[#232B35] text-white relative">
    <div className="flex flex-col items-center justify-center">
      <h3 className="mt-[80px] text-sm">STAY CONNECTED</h3>
      <h1 className="text-3xl font-bold mt-[30px]">Join Our NewsLetter</h1>

      <div className="bg-white md:w-[430px] w-[330px] rounded-full p-2 flex justify-between relative h-[50px] mt-[70px]"><input type="email" className="rounded-full p-2 text-black focus:border-none focus:outline-none" placeholder="Email Address"/><button className="bg-[#3293FF] rounded-full p-2 w-[100px] absolute top-0 right-0 bottom-0 flex items-center justify-center shadow-2xl shadow-cyan-700">Join <Image src="/join.png" width={15} height={15} alt="joinicon"/></button></div>

    </div>



<div className="flex md:items-center md:justify-center mt-[150px] mb-[100px] p-3">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-[60px] md:items-center md:justify-center">
<div>
  <div>
    <h3 className="text-sm mb-[10px]">Language</h3>
    <select className="bg-[#394049] text-white p-2 w-[200px] border-[0.4px] border-[#BABDBF] rounded-md"><option>English</option></select>
  </div>
  <div className="mt-[20px]">
  <h3 className="text-sm mb-[10px]">Currency</h3>
    <select className="bg-[#394049] text-white p-2 w-[200px] border-[0.4px] border-[#BABDBF] rounded-md"><option>English</option></select>
  </div>
</div>
<div className="flex flex-col md:items-center "> 
  <h3 className="font-bold text-sm ml-[20px] md:ml-0">Company</h3>
  <ul className='flex justify-between p-4  gap-[10px] flex-col text-sm'>
            <li>About us</li>
            <li>Blog</li>
            <li>Support</li>
            <li>Press Boom</li>
         
        </ul>
</div>
<div className="flex flex-col items-center -ml-[30px] md:ml-0">
<h3 className="font-bold text-sm text-left -ml-[100px]">Help</h3>
  <ul className='flex justify-between p-4 gap-[10px] flex-col text-sm '>
            <li>Contact us</li>
            <li>FAQs</li>
            <li>Terms and Conditions</li>
            <li>Site map</li>
            <li>Terms and conditions</li>
         
        </ul>
</div>
<div>
  <h3 className="font-bold">Payment methods possible</h3>
  <div className="flex flex-col gap-[10px] mt-[15px]">
    <Image src="/Group 408.png" width={200} height={200} alt="image"/>
    <Image src="/Group 409.png" width={200} height={200} alt="image"/>
  </div>
  <div className="mt-[15px] mb-[20px]">
    <h3 className="text-sm">Company</h3>
    <p className="text-sm">Become an affilator</p>
  </div>
</div>

    </div></div>


    <div className="bg-[#1C222A]  absolute bottom-0 left-0 right-0 mt-[50px] p-4 ">

      <div className="flex justify-around mt-[20px] items-center md:gap-[340px] flex-col md:flex-row gap-[30px]">
        <div><p className="text-sm">Copyright 2021 SurveyPaid. All Rights Reserved</p></div>
        <div>  <Image src="/Group 91.png" width={130} height={200} alt="image"/></div>
      </div>

    </div>

  </footer>
    </>)

  }
export default Footer;