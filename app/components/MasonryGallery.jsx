'use client';
import React from "react";

const images = [
    "https://picsum.photos/id/1015/400/600",
    "https://picsum.photos/id/1016/400/500",
    "https://picsum.photos/id/1018/400/450",
    "https://picsum.photos/id/1021/400/300",
    "https://picsum.photos/id/1022/400/650",
    "https://picsum.photos/id/1025/400/400",
    "https://picsum.photos/id/1027/400/550",
    "https://picsum.photos/id/1035/400/350",
];

export default function MasonryGallery() {
    return (
        <>
            <div id="gallery" className='w-full px-[12%] py-10 scroll-mt-20'>
                <h4 className='text-center mb-2 text-lg font-Ovo'>

                </h4>
                <h2 className='text-center text-5xl font-Ovo'>
                    Frame Graph <span className="font-bold text-red-600 "> . </span>
                </h2>
            </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4 space-y-4">
            {images.map((src, idx) => (
                <div
                    key={idx}
                    className="relative overflow-hidden rounded-xl shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl hover:-translate-y-1 group"
                >
                    <img
                        src={src}
                        alt={`Masonry image ${idx}`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
        </>
    );
}