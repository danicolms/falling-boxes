import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import BoxGroup from "./components/BoxGroup";
import "./styles.css";
extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

function App() {
  return (
    <div className="container">
      <div className="textContainer">
        <h1 className="title">Rotating box</h1>
        <h5 className="subtitle">by @danicolms</h5>
      </div>
      <Canvas>
        <Suspense fallback={null}>
          {/* <CameraControls /> */}
          <ambientLight />
          <pointLight position={[5, 5, 5]} />
          <BoxGroup />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
