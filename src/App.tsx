import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber";
import MyBox from "./components/MyBox";


function App() {
  
  return (
    <>
      <div className='cubes-title'>Magic Cubes</div>
      <Canvas legacy={true} camera={{position:[-5,2,0], fov:60}}>
        <ambientLight intensity={0.2}/>
        <pointLight position={[5,5,5]}/>
         <MyBox position={[1,1,-3]} color='green' args={[1,1,1]}/>
        <MyBox position={[1,1,0]} color='hotpink' args={[2,2,1]}/>
        <MyBox position={[1,1,3]} color='blue' args={[1,2,1]}/>
      </Canvas>
    </>
  );
}

export default App;
