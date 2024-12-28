'use client'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import './globals.css';


export default function Page() {
  return (
    <main style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <Box args={[2, 1, 1]}  />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </main>
  );
}
