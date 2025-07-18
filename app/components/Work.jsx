import { assets, workData } from '@/assets/assets';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
            } else if (project.platform === 'drive') {
                setThumb(`https://drive.google.com/thumbnail?id=${project.videoId}`);
            }
        };


        fetchThumbnail();
    }, [project]);

    return (
        <div className='rounded-lg overflow-hidden shadow-md group transition-transform hover:scale-[1.015]'>
            {/* Image container */}
            <div
                className='h-[250px] bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: thumb ? `url(${thumb})` : undefined,
                    backgroundColor: '#eee'
                }}
            />

            {/* Text container below the image */}
            <div className='bg-white px-5 py-4 flex items-center justify-between'>
                <div>
                    <h2 className='font-semibold text-base md:text-lg'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>

                {project.link && (
                    <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-red-600 transition'
                    >
                        <Image src={assets.send_icon} alt='external-link' className='w-5' />
                    </a>
                )}
            </div>
        </div>
    );
};

const Work = () => {
    const cardsPerRow = 3;
    const rowsToShow = 3;
    const cardsToShowInitially = cardsPerRow * rowsToShow;

    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll ? workData : workData.slice(0, cardsToShowInitially);

    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>Portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                This is a selection of my work across short films, commercials, music videos, corporate projects, and more.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {visibleProjects.map((project, index) => (
                    <ThumbnailCard key={index} project={project} />
                ))}
            </div>

            {!showAll && workData.length > cardsToShowInitially && (
                <div className='text-center'>
                    <button
                        onClick={() => setShowAll(true)}
                        className='mt-6 px-6 py-2 border border-black rounded-md font-semibold hover:bg-black hover:text-white transition'
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Work;
