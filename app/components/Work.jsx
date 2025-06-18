// import { assets, workData } from '@/assets/assets'
// import React from 'react'
// import Image from 'next/image'
// import { useEffect, useState } from 'react';



// const Work = () => {
//   const ThumbnailCard = ({ project }) => {
//   const [thumb, setThumb] = useState(null);

//   useEffect(() => {
//     const fetchThumbnail = async () => {
//       if (project.platform === 'vimeo') {
//         try {
//           const res = await fetch(
//             `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${project.videoId}`
//           );
//           const data = await res.json();
//           setThumb(data.thumbnail_url);
//         } catch (err) {
//           console.error('Vimeo thumbnail fetch error:', err);
//         }
//       } else if (project.platform === 'youtube') {
//         setThumb(`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`);
//       }
//     };

//     fetchThumbnail();
//   }, [project]);

//   return (
//     <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
//       <h4 className='text-center mb-2 text-lg font-Ovo'>
//         My Portfolio
//       </h4>
//       <h2 className='text-center text-5xl font-Ovo'>
//         My Latest Work
//       </h2>

//       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
//         This is a selection of my work across short films, commercials, music videos, corporate projects, and more.
//       </p>

      

//         <div className='grid [grid-template-columns:repeat(auto-fit,_minmax(200px,_1fr))] my-10 gap-5'>
//   {workData.map((project, index) => (
//     // <div
//     //   key={index}
//     //   className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//     //   style={{ backgroundImage: `url(${project.bgImage})` }}
//     // >
//     <div
//       className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
//       style={{
//         backgroundImage: thumb ? `url(${thumb})` : undefined,
//         backgroundColor: '#eee'
//       }}
//     >
//       {/* link section */}
//       {project.link ? (
//         <a
//           href={project.link}
//           target='_blank'
//           rel='noopener noreferrer'
//           className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'
//         >
//           <div>
//             <h2 className='font-semibold'>{project.title}</h2>
//             <p className='text-sm text-gray-700'>{project.description}</p>
//           </div>
//           <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
//             <Image src={assets.send_icon} alt='external-link' className='w-5' />
//           </div>
//         </a>
//       ) : (
//         // fallback if link is empty
//         <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between'>
//           <div>
//             <h2 className='font-semibold'>{project.title}</h2>
//             <p className='text-sm text-gray-700'>{project.description}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   ))}
// </div>


//         {/* <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-black hover:text-white duration-500'>Show More 
//             <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4'/>
//         </a> */}

//     </div>

//   )
// }

// export default Work


import { assets, workData } from '@/assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// ✅ Move this outside of Work
const ThumbnailCard = ({ project }) => {
  const [thumb, setThumb] = useState(null);

  useEffect(() => {
    const fetchThumbnail = async () => {
      if (project.platform === 'vimeo') {
        try {
          const res = await fetch(
            `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${project.videoId}`
          );
          const data = await res.json();
          setThumb(data.thumbnail_url);
        } catch (err) {
          console.error('Vimeo thumbnail fetch error:', err);
        }
      } else if (project.platform === 'youtube') {
        setThumb(`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`);
      }
    };

    fetchThumbnail();
  }, [project]);

  return (
    <div
      className='h-[250px] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
      style={{
        backgroundImage: thumb ? `url(${thumb})` : undefined,
        backgroundColor: '#eee'
      }}
    >
      {project.link ? (
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'
        >
          <div>
            <h2 className='font-semibold'>{project.title}</h2>
            <p className='text-sm text-gray-700'>{project.description}</p>
          </div>
          <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
            <Image src={assets.send_icon} alt='external-link' className='w-5' />
          </div>
        </a>
      ) : (
        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between'>
          <div>
            <h2 className='font-semibold'>{project.title}</h2>
            <p className='text-sm text-gray-700'>{project.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        This is a selection of my work across short films, commercials, music videos, corporate projects, and more.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {workData.map((project, index) => (
          <ThumbnailCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work;
