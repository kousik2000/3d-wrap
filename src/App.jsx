import Textures from './components/textures'
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useMemo } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import './App.css'

import { Model } from './components/shirt/Model.jsx'
import { angleToRadians } from "./uitility/angle";

import { Analytics } from '@vercel/analytics/react';

function App() {
  const [material, setMaterial] = useState("/fabrics/a.jpg");

  const isMaterialClicked = (materialUrl) => {
    setMaterial(materialUrl);
    console.log("app", materialUrl);
  };

  const showOrbitControls = window.innerWidth > 768;

  const scale = useMemo(() => {
    if (window.innerWidth > 768) {
      return 1.3;
    } else {
      return 0.5;
    }
  }, []);


  const position = useMemo(() => {
    if (window.innerWidth > 768) {
      return [0, -8.5, 0];
    } else {
      return [0, 10, 0];
    }
  }, []);

  return (
    <>
      <Analytics />
      <div className="bg-container">
        <div className="main-container">
          <div className="texture-container">
            <Textures isMaterialClicked={isMaterialClicked} />
          </div>
          <div className="shirt-container">
            <Canvas id="three-canvas-container" shadows>
              <Suspense fallback={null}>
                <ambientLight args={["white", 5]} />
                {showOrbitControls && <OrbitControls />}
                <perspectiveCamera position={[0, 0, 5]} />
                <Model materialUrl={material} position={position} scale={scale} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
