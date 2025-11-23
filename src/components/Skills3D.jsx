import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, OrbitControls, Stars } from '@react-three/drei';

const HolographicObject = () => {
    const meshRef = useRef();
    const ringRef1 = useRef();
    const ringRef2 = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
        if (ringRef1.current) {
            ringRef1.current.rotation.x += delta * 0.1;
            ringRef1.current.rotation.z += delta * 0.1;
        }
        if (ringRef2.current) {
            ringRef2.current.rotation.y -= delta * 0.15;
            ringRef2.current.rotation.z -= delta * 0.05;
        }
    });

    return (
        <group scale={1.2}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[2, 0]} />
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={0.5}
                    roughness={0}
                    chromaticAberration={0.1}
                    anisotropy={0.1}
                    distortion={0.1}
                    distortionScale={0.1}
                    temporalDistortion={0.1}
                    iridescence={1}
                    iridescenceIOR={1}
                    iridescenceThicknessRange={[0, 2400]}
                    color="#00ff9d"
                    emissive="#00ff9d"
                    emissiveIntensity={0.1}
                />
            </mesh>

            <mesh ref={meshRef} scale={1.01}>
                <icosahedronGeometry args={[2, 0]} />
                <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.1} />
            </mesh>

            <mesh ref={ringRef1} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[3.5, 0.05, 16, 100]} />
                <meshBasicMaterial color="#d946ef" transparent opacity={0.5} />
            </mesh>

            <mesh ref={ringRef2} rotation={[0, Math.PI / 2, 0]}>
                <torusGeometry args={[4.2, 0.05, 16, 100]} />
                <meshBasicMaterial color="#00ff9d" transparent opacity={0.5} />
            </mesh>
        </group>
    );
};

const Skills3D = () => {
    return (
        <div className="h-[500px] w-full cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#d946ef" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#00ff9d" />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <HolographicObject />
                </Float>

                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
};

export default Skills3D;
