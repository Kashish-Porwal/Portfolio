import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experienceData = [
    {
        role: 'Embedded/IoT Intern',
        company: 'Invoir Inc.',
        year: "Jun'25 - Jul'25",
        location: 'Remote',
        description: 'Built an Embedded Intelligence for Smart Vehicle Monitoring system using C++, Python, Keil, and Proteus. Integrated multiple sensors for real-time data acquisition, processing, and visualisation. Optimised the embedded system for efficiency, scalability, and reliability.',
        skills: ['C++', 'Python', 'Keil', 'Proteus', 'IoT', 'Embedded Systems']
    }
];

import Experience3D from './Experience3D';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-8 relative min-h-screen flex items-center justify-center bg-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[0.5fr_1.5fr] gap-8 items-center">

                <div className="hidden md:block h-[600px] w-full">
                    <Experience3D />
                </div>

                <div className="w-full ml-auto">
                   
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-display font-bold mb-12 text-center md:text-right"
                    >
                        EXPERIENCE
                    </motion.h2>

                    <div className="relative border-l border-white/10 ml-4 md:ml-auto md:border-l-0 md:border-r space-y-8 md:text-right">
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative pl-8 md:pl-0"
                            >
                                <div className="absolute -left-[5px] md:left-auto md:-right-[5px] top-6 w-2.5 h-2.5 rounded-full bg-accent-200 shadow-[0_0_10px_#d946ef]" />

                                <div className="p-8 md:p-10 rounded-3xl bg-primary border border-white/10 hover:border-accent-200/50 transition-colors group">
                            
                                   <div className="flex flex-col md:flex-row-reverse md:items-center justify-between mb-1 gap-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-accent-200 transition-colors">{item.role}</h3>
                                        <div className="flex items-center gap-2 text-accent-200 text-xs font-mono bg-accent-200/10 px-2 py-1 rounded-full md:flex-row-reverse">
                                            <Calendar className="w-3 h-3" />
                                            {item.year}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-400 mb-3 flex-wrap text-sm md:flex-row-reverse">
                                        <Briefcase className="w-4 h-4 text-accent-200" />
                                        <span className="font-medium text-white/80">{item.company}</span>

                                        {item.location && (
                                            <>
                                                <span className="w-1 h-1 rounded-full bg-gray-600 mx-1" />
                                                <MapPin className="w-4 h-4 text-accent-200" />
                                                <span>{item.location}</span>
                                            </>
                                        )}
                                    </div>

                                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 md:justify-end">
                                        {item.skills.map((skill, i) => (
                                            <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-accent-100 border border-white/5">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
