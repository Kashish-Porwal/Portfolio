import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars, Torus } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Ring = ({ position, args, color, speed }) => {
    const ref = useRef();
    useFrame((state, delta) => {
        ref.current.rotation.x += delta * speed.x;
        ref.current.rotation.y += delta * speed.y;
        ref.current.rotation.z += delta * speed.z;
    });
    return (
        <Torus args={args} position={position} ref={ref}>
            <meshStandardMaterial color={color} wireframe />
        </Torus>
    );
};

const Experience3D = () => {
    return (
        <div className="w-full h-full min-h-[400px]">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Ring args={[2.5, 0.1, 16, 100]} position={[0, 0, 0]} color="#d946ef" speed={{ x: 0.2, y: 0.1, z: 0 }} />
                    <Ring args={[1.8, 0.1, 16, 100]} position={[0, 0, 0]} color="#8b5cf6" speed={{ x: -0.2, y: 0.3, z: 0.1 }} />
                    <Ring args={[1.2, 0.1, 16, 100]} position={[0, 0, 0]} color="#00ffff" speed={{ x: 0.1, y: -0.2, z: 0.2 }} />

                    <mesh>
                        <sphereGeometry args={[0.5, 32, 32]} />
                        <meshStandardMaterial color="#ffffff" emissive="#d946ef" emissiveIntensity={2} />
                    </mesh>
                </Float>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default Experience3D;
