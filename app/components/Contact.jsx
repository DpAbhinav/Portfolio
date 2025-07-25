import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Contact = () => {
  const [result,setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a8bd5fa2-1146-430d-a292-248b1b75b5ac");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-gray-100'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Connect With Me
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Get In Touch
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'd love to hear from you ! If you have any <span className='text-red-600'>work</span> related <span className='text-red-600'>request</span>, query, comments, or feedback - feel free to reach out using the form below 🫡
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8'>
          <input name='Name' type="text" placeholder='Enter Your Name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
          <input name='Email' type="email" placeholder='Enter Your Email' suppressHydrationWarning required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
        </div>
        <textarea name='Message' rows='6' placeholder='Your Message Goes Here' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>
        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>
          Submit
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </button>

        <p className='mt-4'>{result}</p>
      </form>

    </div>
  )
}

export default Contact
