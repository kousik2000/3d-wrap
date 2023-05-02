import Textures from './components/textures'

import { Canvas} from "@react-three/fiber";
import { Suspense,useState } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import './App.css'

import {Model} from './components/shirt/Model.jsx'
import { angleToRadians } from "./uitility/angle";


function App(){
    const [material,setMaterial]=useState("/fabrics/a.jpg")

    const isMaterialClicked=(materialUrl)=>{
        setMaterial(materialUrl)
        console.log("app",materialUrl)
    }
    
    return(
        <div className="bg-container">
            <div className="main-container">
                <div className="texture-container">
                    <Textures isMaterialClicked={isMaterialClicked}/>
                </div>
                <div className="shirt-container">
                    <Canvas id="three-canvas-container" shadows>
                        <Suspense fallback={null}>
                            <ambientLight args={["white",5]}/>
                            <OrbitControls />
                            <perspectiveCamera position={[0,0,5]}/>
                            <Model  materialUrl={material} position={[0,-8.5,0]} scale={1.3}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default App