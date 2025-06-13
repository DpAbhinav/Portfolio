import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <>
    <div id="gallery" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Quick Glance !
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Show Reel 2024
      </h2>
    </div>

      <div className="bg-black w-full p-4">
  <div className="max-w-6xl mx-auto">
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
      {/* Blurred Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover blur-2xl z-0"
        preload="none"
        loop
        playsInline
        autoPlay
        muted
        aria-hidden="true"
        src="/videos/ShowReel2024.mp4"
      />

      {/* Main Video */}
      <video
        className="relative z-10 w-full h-full object-cover"
        preload="metadata"
        loop
        playsInline
        autoPlay
        muted
        aria-hidden="false"
        src="/videos/ShowReel2024.mp4"
      />
    </div>
  </div>
</div>

</>
  )
}

export default Services
