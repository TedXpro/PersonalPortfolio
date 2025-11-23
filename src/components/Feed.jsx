import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { blogs } from "../constants";

const BlogCard = ({ index, title, description, date, image, link }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
    >
        <div className='relative w-full h-[230px]'>
            <img
                src={image}
                alt={title}
                className='w-full h-full object-cover rounded-2xl'
            />
        </div>

        <div className='mt-5'>
            <p className='text-secondary text-[14px]'>{date}</p>
            <h3 className='text-white font-bold text-[24px] mt-2'>{title}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>

            {/* Read More button hidden for now
      <div className='mt-4'>
        <a 
          href={link} 
          target='_blank' 
          rel='noreferrer'
          className='text-[#915EFF] font-medium text-[16px] hover:text-white transition-colors'
        >
          Read More &rarr;
        </a>
      </div>
      */}
        </div>
    </motion.div>
);

const Feed = () => {
    return (
        <div className={`mt-12 bg-black-100 rounded-[20px]`}>
            <div
                className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
            >
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>What I'm Learning</p>
                    <h2 className={styles.sectionHeadText}>Blog & Insights.</h2>
                </motion.div>
            </div>
            <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
                {blogs.map((blog, index) => (
                    <BlogCard key={blog.title} index={index} {...blog} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feed, "");
