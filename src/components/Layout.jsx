import React from 'react';
import Navbar from './Navbar';
import NoiseOverlay from './NoiseOverlay';
import ScrollProgress from './ScrollProgress';
import ParticlesBackground from './ParticlesBackground';
import SmoothScroll from './SmoothScroll';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-primary text-white font-sans selection:bg-accent-200 selection:text-white overflow-x-hidden">
            <SmoothScroll />
            <ScrollProgress />
            <NoiseOverlay />
            <ParticlesBackground />
            <Navbar />
            <main className="relative z-10">
                {children}
            </main>
            <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(112,0,255,0.1),transparent_50%)]"></div>
        </div>
    );
};

export default Layout;
