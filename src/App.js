import React, { useRef, Suspense, useState } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import BoxGroup from "./components/BoxGroup";
import { BsFillMouseFill } from "react-icons/bs";
import "./styles.css";
extend({ OrbitControls });

// Moving camera for developing.
// const CameraControls = () => {
//   const {
//     camera,
//     gl: { domElement },
//   } = useThree();
//   // Ref to the controls, so that we can update them on every frame using useFrame
//   const controls = useRef();
//   useFrame((state) => controls.current.update());
//   return <orbitControls ref={controls} args={[camera, domElement]} />;
// };

function App() {
  const [yCoordinate, setYCoordinate] = useState(200);
  return (
    <div
      className="container"
      onMouseMove={(e) => {
        setYCoordinate(e.clientY - e.target.offsetTop);
      }}
    >
      <div className="textContainer">
        <h1 className="title">La caja</h1>
        <h5 className="subtitle">@danicolms</h5>
        <span className="caption">
       
          (
     
          Mueve el mouse
          {" "}   {" "}
          <BsFillMouseFill />)
        </span>
      </div>
      <Canvas>
        <Suspense fallback={null}>
          {/* <CameraControls /> */}
          <ambientLight />
          <pointLight position={[5, 5, 5]} />
          <BoxGroup yCoordinate={yCoordinate} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
