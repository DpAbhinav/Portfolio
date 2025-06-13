import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <div className='w-max flex items-center gap-2 mx-auto'> 
            <Image src={assets.mail_icon} alt='' className='w-6 mx-auto mb-2'/>
            rajabhinav201@gmail.com
            <a href="https://wa.me/qr/J32NDAU7X33YF1" target='_blank' className='ml-3'><Image src={assets.whatsapp} alt='' className='w-7'/></a>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p> © By Abhinav Raj</p>
            <ul className='flex items-center gap-10 justify-center mt-4sm:mt-0'>
                <li>
                    <a target='_blank' href="https://www.instagram.com/dp_abhinav?utm_source=qr&igsh=NWV2aHVxZnMzd3E1">Instagram</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com/in/abhinav-raj-2b840b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>
                </li>
                <li>
                    <a target='_blank' href="https://vimeo.com/showcase/11186058?share=copy&fbclid=PAZXh0bgNhZW0CMTEAAackAMqS7PMa9iuQLCNChQeY7skmXbfDXokoLrVQ97jV1jaIQRZJ3cAzb4rPBw_aem_s2_tB37Lv5JgcAA-MDZncQ">Vimeo</a>
                </li>
            </ul>
      </div>
    </div>
  )
}

export default Footer
