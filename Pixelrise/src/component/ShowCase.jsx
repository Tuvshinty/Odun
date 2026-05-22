import React from 'react';
import ferrari from '../video/ferrari.mp4';
const ShowCase = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-black">
      
      {/* Background Media Engine */}
      <video 
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-117" 
        src={ferrari}
      />

      {/* Pinecone-style Subtle Colored Ambient Glow Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Hero Interactivity Overlays */}
      <div className="absolute inset-0 flex flex-col items-center justify-between text-center pt-36 pb-28 z-20 text-white px-4">
        
        {/* Header Text & Typography Elements */}
        <div className="mt-8 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Building Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Products & Brands</span>
          </h1>
          <p className="text-sm md:text-base font-normal tracking-wide text-gray-400 max-w-sm mx-auto">
            Full-Stack Developer & UI Designer focused on high-performance minimalist architecture.
          </p>
        </div>
        
        {/* Core Call to Actions (Balanced Positioning) */}
         <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md px-6">
          <a 
            href="#projects"
            className="px-12 py-2.5 bg-white text-gray-950 font-medium text-sm rounded shadow hover:bg-gray-100 transition-colors duration-200 text-center flex items-center justify-center select-none"
          >
            View Projects
          </a>
          <a 
            href="#contact"
            className="px-12 py-2.5 bg-black/40 text-white font-medium text-sm rounded border border-transparent backdrop-blur-sm hover:bg-black/60 transition-colors duration-200 text-center flex items-center justify-center select-none"
          >
            Let's Start
          </a>
        </div>

      </div>
    </div>
  );
};

export default ShowCase;