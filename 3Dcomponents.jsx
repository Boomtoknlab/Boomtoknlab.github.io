// 3dComponent.jsx
import React from 'react';
import { Canvas } from 'react-three-fiber';

function Box() {
    return (
        <mesh>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

export default function ThreeDComponent() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box />
        </Canvas>
    );
}
