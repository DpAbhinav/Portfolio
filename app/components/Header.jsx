import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='Abhinav' className='rounded-full w-40'/>
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'> Hi I'm  <span className='text-red-600'><u>Abhinav Raj</u></span> <Image src={assets.hand_icon} alt='hand-wave' className='w-6'/></h3>
      <h1 className='text-3-xl sm:text-6xl lg:text-[66px] font-Ovo'>
          Crafting Stories In Light And Motion 📽️
      </h1>
      <p className='max-w-2xl mx-auto font-Ovo'>
        Over years, I’ve brought stories to life—frame by frame—through the lens of cinematic precision and creative vision.
        Every shot is meant to move the eye, the heart, and the soul. 

      </p>
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-black hover:text-white duration-500'>My resume<Image src={assets.download_icon} alt='download' className='w-4'/></a> 
      </div>

    </div>
  )
}

export default Header
