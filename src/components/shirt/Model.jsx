/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 model.glb
Author: Tabbuso (https://sketchfab.com/Tabbuso)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tshirt-5a21282b2e454d1696547148f617d3d0
Title: Tshirt
*/


import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export function Model(props) {
  const { nodes, materials } = useGLTF('/shirtModel/tshirt/model.glb')
  const {materialUrl} = props
  const fabricTexture = useLoader(THREE.TextureLoader, materialUrl);
fabricTexture.wrapS = fabricTexture.wrapT = THREE.RepeatWrapping;
fabricTexture.repeat.set( 2, 2 );
const fabricMaterial = new THREE.MeshBasicMaterial({ map: fabricTexture });


  // Set fabricMaterial as the material for each mesh in the model
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.005}>
      <mesh geometry={nodes.Object_4.geometry} material={fabricMaterial} />
       <mesh geometry={nodes.Object_5.geometry} material={fabricMaterial} />
       <mesh geometry={nodes.Object_6.geometry} material={fabricMaterial} />
       <mesh geometry={nodes.Object_7.geometry} material={fabricMaterial} />
       <meshBasicMaterial map={fabricTexture}/>
      </group>
    </group>
  )
}

useGLTF.preload('/shirtModel/tshirt/model.glb')