import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-primary/30 border-b border-white/10"
        >
            <div className="text-2xl font-display font-bold tracking-tighter">
                PORTFOLIO<span className="text-accent-100">.</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
                {['About', 'Skills', 'Work', 'Experience', 'Education', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-accent-300 transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-300 transition-all group-hover:w-full"></span>
                    </a>
                ))}
            </div>
            <MagneticButton>
                <button className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-accent-200 hover:text-white transition-all duration-300">
                    Let's Talk
                </button>
            </MagneticButton>
        </motion.nav>
    );
};

export default Navbar;
