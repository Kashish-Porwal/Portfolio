import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
    {
        degree: 'Bachelor of Technology',
        institution: 'Jaypee Institute of Information Technology',
        year: '2022 - 2026',
        location: 'Noida',
        description: 'Electronics and Communication Engineering',
        cgpa: '8.4',
    },
    {
        degree: 'Higher Secondary Education',
        institution: 'Ritual Public School',
        year: '2020 - 2021',
        percentage: '96.8',
    },
    {
        degree: 'Secondary Education',
        institution: 'Hyundan Model School',
        year: '2019 - 2020',
        percentage: '87.8',
    },
];

const Education = () => {
    return (
        <section id="education" className="py-20 px-8 relative min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto w-full">

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-display font-bold mb-12 text-center md:text-left"
                >
                    EDUCATION
                </motion.h2>

                <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-8">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            
                            <div className="absolute -left-[5px] top-6 w-2.5 h-2.5 rounded-full bg-accent-100 shadow-[0_0_10px_#00ff9d]" />

                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-accent-200 transition-colors">{item.degree}</h3>
                                    <div className="flex items-center gap-2 text-accent-200 text-xs font-mono bg-accent-400/10 px-2 py-1 rounded-full">
                                        <Calendar className="w-3 h-3" />
                                        {item.year}
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-gray-400 mb-3 flex-wrap text-sm">
                                    <GraduationCap className="w-4 h-4 text-accent-100" />
                                    <span className="font-medium text-white/80">{item.institution}</span>

                                    {item.location && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-gray-600 mx-1" />
                                            <MapPin className="w-4 h-4 text-accent-100" />
                                            <span>{item.location}</span>
                                        </>
                                    )}
                                </div>

                                {item.description && (
                                    <p className="text-gray-300 text-sm leading-relaxed mb-3 border-l-2 border-accent-400/30 pl-4">
                                        {item.description}
                                    </p>
                                )}

                                {(item.cgpa || item.percentage) && (
                                    <div className="flex gap-4 mt-2">
                                        {item.cgpa && (
                                            <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/5">
                                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">CGPA</span>
                                                <p className="text-lg font-bold text-accent-100 leading-none mt-0.5">{item.cgpa}</p>
                                            </div>
                                        )}
                                        {item.percentage && (
                                            <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/5">
                                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">Grade</span>
                                                <p className="text-lg font-bold text-accent-100 leading-none mt-0.5">{item.percentage}%</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
