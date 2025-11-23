import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, useScroll } from '@react-three/drei';
import * as THREE from 'three';

const Geometries = () => {
    const group = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.x = t * 0.1;
        group.current.rotation.y = t * 0.15;
    });

    return (
        <group ref={group}>
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[5, 5, -10]} rotation={[0, 0, Math.PI / 4]}>
                    <octahedronGeometry args={[2, 0]} />
                    <meshStandardMaterial color="#00ff9d" wireframe={false} transparent opacity={0.6} roughness={0.2} metalness={0.8} />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                <mesh position={[-5, -5, -15]} rotation={[Math.PI / 3, 0, 0]}>
                    <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
                    <meshStandardMaterial color="#7000ff" wireframe={false} transparent opacity={0.6} roughness={0.2} metalness={0.8} />
                </mesh>
            </Float>

            <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[8, -2, -20]}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color="#00ffff" wireframe={false} transparent opacity={0.6} roughness={0.2} metalness={0.8} />
                </mesh>
            </Float>

            <Float speed={1.8} rotationIntensity={2} floatIntensity={1.5}>
                <mesh position={[-8, 8, -12]}>
                    <dodecahedronGeometry args={[1.8, 0]} />
                    <meshStandardMaterial color="#ff00ff" wireframe={false} transparent opacity={0.6} roughness={0.2} metalness={0.8} />
                </mesh>
            </Float>
        </group>
    );
};

const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Geometries />
            </Canvas>
        </div>
    );
};

export default FloatingShapes;
