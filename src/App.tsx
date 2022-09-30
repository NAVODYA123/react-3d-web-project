import React, {useState,Suspense,useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber";
import MyBox from "./components/MyBox";
import Shoes from "./components/Shoes";
import {OrbitControls,View} from "@react-three/drei";



function App() {
  const [meshColor,setMainColor] = useState('#11A9B8')
  const [soleColor,setSoleColor] = useState('#99A9B8')
  const [laceColor,setLaceColor] = useState('#1171B8')
  const [stripeColor,setStripeColor] = useState('#1171B8')
  const [patchColor,setPatchColor] = useState('#11A9B8')
  const [capsColor,setCapsColor] = useState('#99A9B8')
  const [innerColor,setInnerColor] = useState('#1171B8')
  const [bandColor,setBandColor] = useState('#1171B8')
  
  // const shoeView = useRef(null)
  return (
    <>
      <div className='cubes-title'>Magic Cubes</div>
      <div style={{ height: "70%" }}>
        {/*<div ref={shoeView} style={{ width: 200, height: 200 }} />*/}
      <Canvas legacy={true} camera={{position:[-2,2,0], fov:60}} >
        <ambientLight intensity={0.2}/>
        <pointLight position={[5,5,5]}/>
        {/*<MyBox position={[1,1,-3]} color='green' args={[1,1,1]}/>*/}
        {/*<MyBox position={[1,1,0]} color='hotpink' args={[2,2,1]}/>*/}
        {/*<MyBox position={[1,1,3]} color='blue' args={[1,2,1]}/>      */}
        <Suspense fallback={null}>
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
          <Shoes laceColor={laceColor}
                 meshColor={meshColor}
                 soleColor={soleColor}
                 stripesColor={stripeColor}
                 patchColor={patchColor}
                 capsColor={capsColor}
                 innerColor={innerColor}
                 bandColor={bandColor}
          />
        </Suspense>
      </Canvas>
      </div>
      <div className="canvas-card">
        <div className="color-picker-container">
          <div className="color-picker-title">Color picker</div>
          <div className="color-swatch-selector">
            <label>Main</label>
            <input type="color" value={meshColor} onChange={e=>setMainColor(e.target.value)}/>
            <label>Sole</label>
            <input type="color" value={soleColor} onChange={e=>setSoleColor(e.target.value)}/>
            <label>Laces</label>
            <input type="color" value={laceColor} onChange={e=>setLaceColor(e.target.value)}/>
            <label>Stripes</label>
            <input type="color" value={stripeColor} onChange={e=>setStripeColor(e.target.value)}/>
            <label>Patch</label>
            <input type="color" value={patchColor} onChange={e=>setPatchColor(e.target.value)}/>
            <label>Caps</label>
            <input type="color" value={capsColor} onChange={e=>setCapsColor(e.target.value)}/>
            <label>Inside material</label>
            <input type="color" value={innerColor} onChange={e=>setInnerColor(e.target.value)}/>
            <label>Band </label>
            <input type="color" value={bandColor} onChange={e=>setBandColor(e.target.value)}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
