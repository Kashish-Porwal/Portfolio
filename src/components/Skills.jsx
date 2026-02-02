import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import FloatingShapes from './FloatingShapes';
import Skills3D from './Skills3D';

const skillCategories = [
    {
        title: 'Languages',
        skills: ['C++', 'JavaScript','TypeScript', 'Python']
    },
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'PostgreSQL']
    },
    {
        title: 'Core CS',
        skills: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'DBMS']
    },
    {
        title: 'Core ECE',
        skills: ['Assembly Language', 'Digital Logic Design']
    },
    {
        title: 'Tools and Technologies',
        skills: ['Git','Github','Postman','VS CODE','MATLAB','Keil','Proteus']
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-8 relative overflow-hidden min-h-screen flex items-center">
            <FloatingShapes />
            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-display font-bold mb-8"
                        >
                            TECHNICAL
                            <br />
                            <span className="text-accent-100">ARSENAL</span>
                        </motion.h2>

                        <div className="space-y-4">
                            {skillCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <h3 className="text-lg font-bold mb-2 text-accent-200 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent-200"></span>
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 hover:bg-white/10 hover:border-accent-100/50 hover:text-white transition-all cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="h-[450px] w-full relative bg-gradient-to-b from-transparent via-accent-400/5 to-transparent rounded-full flex items-center justify-center"
                    >
                        <div className="absolute inset-0 z-10">
                            <Skills3D />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
