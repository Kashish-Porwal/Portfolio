import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const PyramidCrystal = () => {
    const groupRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3;
        }
    });

    const pyramidHeight = 3.5;
    const pyramidRadius = 2.5;
    const tilt = Math.atan(pyramidRadius / pyramidHeight); 

    return (
        <group ref={groupRef}>
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0, pyramidRadius, pyramidHeight, 4, 1]} />
                <meshPhysicalMaterial
                    color="#2a0a4a" 
                    emissive="#d946ef"
                    emissiveIntensity={0.2}
                    roughness={0.1}
                    metalness={0.9}
                    transmission={0.5}
                    thickness={2}
                    transparent
                    opacity={0.8}
                />
            </mesh>

            <lineSegments>
                <edgesGeometry args={[new THREE.CylinderGeometry(0, pyramidRadius, pyramidHeight, 4, 1)]} />
                <lineBasicMaterial color="#00ff9d" linewidth={2} />
            </lineSegments>

            <group rotation={[0, 0, 0]}>
                <Text position={[0, -0.5, 1.35]} fontSize={0.35} color="#ffffff" anchorX="center" anchorY="middle" rotation={[-0.62, 0, 0]}>
                    PostgreSQL
                </Text>
                <Text position={[0, 0.8, 0.75]} fontSize={0.35} color="#00ff9d" anchorX="center" anchorY="middle" rotation={[-0.62, 0, 0]}>
                    Git
                </Text>
            </group>

            <group rotation={[0, -Math.PI / 2, 0]}>
                <Text position={[0, -0.5, 1.35]} fontSize={0.35} color="#ffffff" anchorX="center" anchorY="middle" rotation={[-0.62, 0, 0]}>
                    GitHub
                </Text>
                <Text position={[0, 0.8, 0.75]} fontSize={0.35} color="#00ff9d" anchorX="center" anchorY="middle" rotation={[-0.62, 0, 0]}>
                    VS Code
                </Text>
            </group>

            <group rotation={[0, Math.PI, 0]}>
                <Text position={[0, -0.5, 1.35]} fontSize={0.35} color="#ffffff" anchorX="center" anchorY="middle" rotation={[-0.62, 0, 0]}>
                    MATLAB
                </Text>
                <Text position={[0, 0.8, 0.75]} fontSize={0.35} color="#00ff9d" anchorX="center" anchorY="middle" rotation={[-0.62, 0, 0]}>
                    Keil
                </Text>
            </group>

            <group rotation={[0, Math.PI / 2, 0]}>
                <Text position={[0, 0, 1.1]} fontSize={0.4} color="#ffffff" anchorX="center" anchorY="middle" rotation={[-0.62, 0, 0]}>
                    Proteus
                </Text>
            </group>

        </group>
    );
};

const SkillsCloud = () => {
    return (
        <div className="h-[600px] w-full cursor-grab active:cursor-grabbing">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 50 }}>
                <fog attach="fog" args={['#202025', 0, 80]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <spotLight position={[-10, -10, -10]} intensity={0.5} color="#d946ef" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <group scale={1.5}>
                        <PyramidCrystal />
                    </group>
                </Float>

                <OrbitControls enableZoom={false} autoRotate={false} />
            </Canvas>
        </div>
    );
};

export default SkillsCloud;
