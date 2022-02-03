import React, { useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Box = () => {};

function App() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <CameraControls />
        <mesh>
          <boxGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={"brown"} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
