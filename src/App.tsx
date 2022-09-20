import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber";
import MyBox from "./components/MyBox";


function App() {
  
  return (
    <>
      <Canvas legacy={true} camera={{position:[-5,2,0], fov:60}}>
        <ambientLight intensity={0.2}/>
        <pointLight position={[5,5,5]}/>
         <MyBox position={[1,1,-3]}/>
        <MyBox position={[1,1,0]}/>
        <MyBox position={[1,1,3]}/>
      </Canvas>
    </>
  );
}

export default App;
