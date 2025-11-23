import React from "react";
import Tilt from "react-awesome-reveal";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="bg-tertiary p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-secondary hover:text-white text-2xl">&times;</button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <img src={project.image} alt={project.name} className="w-full h-auto rounded-xl object-cover" />
            <div className="mt-4 flex gap-2">
              <a href={project.source_code_link} target="_blank" rel="noreferrer" className="bg-black-100 py-2 px-4 rounded-lg text-white text-sm hover:bg-black-200 transition-colors">
                View Source Code
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-white font-bold text-[32px]">{project.name}</h2>
            <p className="mt-4 text-secondary text-[16px] leading-[26px]">{project.detailed_description || project.description}</p>

            {project.challenges && (
              <div className="mt-6">
                <h4 className="text-white font-bold text-[20px]">Challenges</h4>
                <ul className="list-disc list-inside mt-2 text-secondary">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.stack_details && (
              <div className="mt-6">
                <h4 className="text-white font-bold text-[20px]">Tech Stack</h4>
                <ul className="list-disc list-inside mt-2 text-secondary">
                  {project.stack_details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = React.useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. Click on a project to see more details.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <div key={`project-${index}`} onClick={() => setSelectedProject(project)} className="cursor-pointer">
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default SectionWrapper(Works, "");
