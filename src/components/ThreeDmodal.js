import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const ThreeDmodal = () => {
    const mountRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(
            mountRef.current.clientWidth,
            mountRef.current.clientHeight
        );
        mountRef.current.appendChild(renderer.domElement);

        // Cube setup
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            if (!isPaused) {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
                cube.rotation.z += 0.01;
            }
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        // Cleanup on component unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, [isPaused]);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div
                ref={mountRef}
                style={{
                    width: '600px',
                    height: '400px',
                    margin: 'auto',
                    border: '1px solid black',
                }}
            ></div>
            <button
                onClick={() => setIsPaused(!isPaused)}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                {isPaused ? 'Resume Rotation' : 'Pause Rotation'}
            </button>
        </div>
    );
};

export default ThreeDmodal;
