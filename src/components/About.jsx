import React from 'react';
import { motion } from 'framer-motion';
import SkillsCloud from './SkillsCloud';

const About = () => {
    return (
        <section id="about" className="py-32 px-8 relative">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-display font-bold mb-12"
                >
                    Crafting My Path
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 leading-relaxed"
                    >
                        <p className="mb-4">
                            I’m a developer who enjoys building clean, intuitive, and modern digital experiences.
                        </p>
                        <p className='mb-4'>
                            I love solving problems, experimenting with ideas, and turning concepts into polished products.
                        </p>
                        <p>
                            Every project I build helps me understand code, design, and creativity a little more — and that’s what keeps me excited every day.
                        </p>
                    </motion.div>

                    <div className="h-[500px] w-full relative flex items-center justify-center">
                        <div className="w-full h-full bg-accent-400/10 rounded-full blur-3xl absolute inset-0" />
                        <img
                            src="photo.jpg"
                            alt="Profile"
                            className="w-64 h-64 object-cover rounded-full border-4 border-white/10 relative z-10 transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
