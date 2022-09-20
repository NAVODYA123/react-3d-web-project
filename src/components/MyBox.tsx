import React, {useRef} from 'react'
import {useFrame} from "@react-three/fiber";
// import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import {Mesh} from 'three'
import {Vector3} from 'three'


type Props ={
  position: Vector3 | [number, number, number]
}

const MyBox = ({position}:Props) => {
  
  const myMesh = useRef<Mesh | null>(null)
  // myMesh.current?.focus();
  
  useFrame(() => {
      if (myMesh.current !== null) {
        myMesh.current.rotation.x = myMesh.current.rotation.y += 0.01
      }
    }
  )
  
  return (
    <mesh position={position} ref={myMesh}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]}/>
      <meshStandardMaterial attach='material' color='blue'/>
    </mesh>
  
  
  )
  
}

export default MyBox



