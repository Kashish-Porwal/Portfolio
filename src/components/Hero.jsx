import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
    const meshRef = useRef();
    const { viewport } = useThree();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Mouse interaction
        const x = (state.mouse.x * viewport.width) / 2;
        const y = (state.mouse.y * viewport.height) / 2;

        meshRef.current.position.x = x * 0.5;
        meshRef.current.position.y = y * 0.5;

        meshRef.current.rotation.x = t * 0.2 + y * 0.1;
        meshRef.current.rotation.y = t * 0.3 + x * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere args={[1, 100, 200]} scale={2.5} ref={meshRef}>
                <MeshDistortMaterial
                    color="#7000ff"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

const Hero = () => {
    return (
        <section className="h-screen w-full flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} color="#00ff9d" intensity={2} />
                    <pointLight position={[10, 10, 5]} color="#ff00ff" intensity={2} />
                    <AnimatedSphere />
                </Canvas>
            </div>

            <div className="relative z-10 text-center pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-7xl md:text-9xl font-display font-bold mb-4 tracking-tighter mix-blend-difference"
                >
                    KASHISH
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-100 to-accent-300">
                        PORWAL
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-xl md:text-2xl font-light text-gray-300 tracking-widest"
                >
                    Creative thinking × Modern development.
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
