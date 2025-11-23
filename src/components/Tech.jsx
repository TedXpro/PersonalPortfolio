import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 overflow-hidden'>
      <div className='flex gap-10 animate-marquee whitespace-nowrap'>
        {[...technologies, ...technologies].map((technology, index) => (
          <div className='w-28 h-28 flex-shrink-0' key={`${technology.name}-${index}`}>
            <img src={technology.icon} alt={technology.name} className='w-full h-full object-contain' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
