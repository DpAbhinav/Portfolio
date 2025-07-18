import React from 'react'
import Image from 'next/image'
import { assets, infoList } from '@/assets/assets'
const About = () => {
  return (

    <div className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
        <hr className="my-4 border-t border-gray-300" />
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        About Me
      </h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
                I’m Abhinav Raj, a Cinematographer dedicated to crafting clean, cinematic visuals with intent and impact. With over four years of experience behind the camera, I’ve worked across a diverse slate of projects — from short films and ad commercials to music videos, corporate films, and podcast shoots. <br />
                I aim to elevate every frame — capturing what matters with bold, refined, and cinematic clarity.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, title, description,extras},index)=>
                  (<li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1  hover:shadow-[4px_4px_0_#000] duration-500' >
                    <Image src={icon} alt={title} className='w-7 mt-3 '/>
                    <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                    <p className='text-gray-600 text-sm'>{description}</p>
                    <p className='text-gray-600 text-sm '>
                      {extras}
                    </p>
                  </li>))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
