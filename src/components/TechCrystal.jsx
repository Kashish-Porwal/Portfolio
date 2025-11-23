import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

const TechCrystal = () => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = t * 0.2;
        meshRef.current.rotation.y = t * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={meshRef} scale={2.5}>
                <octahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="#00ff9d"
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.1}
                    distort={0.4}
                    speed={2}
                />
            </mesh>
            <mesh scale={3} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                <torusGeometry args={[1.2, 0.02, 16, 100]} />
                <meshStandardMaterial color="#7000ff" emissive="#7000ff" emissiveIntensity={2} toneMapped={false} />
            </mesh>
            <mesh scale={3.5} rotation={[-Math.PI / 4, -Math.PI / 4, 0]}>
                <torusGeometry args={[1.4, 0.02, 16, 100]} />
                <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} toneMapped={false} />
            </mesh>
        </Float>
    );
};

export default TechCrystal;
