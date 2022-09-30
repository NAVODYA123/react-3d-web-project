import  React, {useRef}from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, useGLTF} from '@react-three/drei'
import { Group, Mesh, MeshStandardMaterial } from 'three'
import { GLTF } from 'three-stdlib'

type props = {
laceColor:string
meshColor:string
soleColor:string
stripesColor:string
bandColor:string
patchColor:string
innerColor:string
capsColor:string
}

type Props = props
// type GLTFResult = GLTF & {
//   nodes: [
//     shoe: Mesh | string[] | string,
//     shoe_1: Mesh | string[] | string,
//     shoe_2: Mesh | string[] | string,
//     shoe_3: Mesh | string[] | string,
//     shoe_4: Mesh | string[] | string,
//     shoe_5: Mesh | string[] | string,
//     shoe_6: Mesh | string[] | string,
//     shoe_7: Mesh | string[] | string,
//   ]
//   materials: {
//     laces: MeshStandardMaterial | string[] | string,
//     mesh: MeshStandardMaterial | string[] | string,
//     caps: MeshStandardMaterial | string[] | string,
//     inner: MeshStandardMaterial | string[] | string,
//     sole: MeshStandardMaterial | string[] | string,
//     stripes: MeshStandardMaterial | string[] | string,
//     band: MeshStandardMaterial | string[] | string,
//     patch: MeshStandardMaterial | string[] | string,
//   }
// }


// type GLTFResult = {
//   nodes:  string | string[],
//   material:  string | string[]
// }

type GLTFResult = GLTF & {
  nodes: {
    shoe: Mesh
    shoe_1: Mesh
    shoe_2: Mesh
    shoe_3: Mesh
    shoe_4: Mesh
    shoe_5: Mesh
    shoe_6: Mesh
    shoe_7: Mesh
  }
  materials: {
    laces: MeshStandardMaterial
    mesh: MeshStandardMaterial
    caps: MeshStandardMaterial
    inner: MeshStandardMaterial
    sole: MeshStandardMaterial
    stripes: MeshStandardMaterial
    band: MeshStandardMaterial
    patch: MeshStandardMaterial
  }
}
// const Shoes = (props: JSX.IntrinsicElements['group']) => {
const Shoes = ({...props}:Props) => {
  
  const group = useRef <Group| null>(null)
  const { nodes, materials } = useGLTF  ('/shoe.gltf') as any
  // const { nodes, materials } = useGLTF<any>('public/shoe.gltf');
 
  // const {nodes,materials} = useGLTF('/shoe-transformed.glb')
  
  console.log('nodes: ',nodes.shoe.geometry)
  console.log('materials: ',materials)
  

  return(
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.laceColor} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.meshColor}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.capsColor}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.innerColor} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.soleColor}/>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.stripesColor}/>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.bandColor}/>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.patchColor}/>
    </group>
  )
}

export default Shoes

