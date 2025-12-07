import React from "react";
import Tilt from "react-awesome-reveal";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-[var(--text-primary)] text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a highly motivated and continuously learning developer with a passion for pushing the boundaries
        of what's possible. I'm fascinated by the power of software to transform ideas into reality, and I'm
        constantly seeking new ways to expand my skillset. My current focus is on building immersive web
        experiences using React and Three.js, while leveraging my back-end experience with Go, Spring Boot,
        and .NET. I'm also actively exploring the exciting world of AI/ML, data science, and data analysis,
        and I've been applying these skills in personal projects, including a crop yield prediction model based
        on spatio-temporal analysis of agricultural data. I also have a strong foundation in core computer science
        principles, including data structures, algorithms, and computer graphics. My proficiency in languages like
        Java, C++, Python, and C# and databases like MongoDB, SQL, and PostgreSQL further strengthens my ability to
        contribute to a wide range of projects. I believe in continuous improvement and am excited to see what the
        future holds for the world of technology.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className='mt-20 flex flex-col items-center gap-10'>
        <h3 className={styles.sectionHeadText}>GitHub Stats.</h3>
        <div className='flex flex-wrap justify-center gap-5'>
          <img
            src="https://github-readme-stats.vercel.app/api?username=TedXpro&show_icons=true&theme=dark&hide_border=true&bg_color=00000000"
            alt="GitHub Stats"
            className='h-48'
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=TedXpro&layout=compact&theme=dark&hide_border=true&bg_color=00000000"
            alt="Top Languages"
            className='h-48'
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
