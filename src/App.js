import React, { useRef } from "react";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useUpdate,
} from "@react-three/fiber";
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

const Box = () => {
  const boxRef = useRef();

  // useFrame(() => {
  //   boxRef.current.rotation.y += 0.01;
  // });

  return (
    <mesh ref={boxRef}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color={"#654321"} />
    </mesh>
  );
};

const Tag = () => {
  const tagRef = useRef();

  // useFrame(() => {
  //   tagRef.current.rotation.y += 0.01;
  // });

  return (
    <mesh ref={tagRef} position={[0, 0, 1]}>
      <boxBufferGeometry attach="geometry" args={[1.5, 1, 0.01]} />
      <meshStandardMaterial attach="material" color={"offwhite"} />
    </mesh>
  );
};

const CardboardBox = () => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.02;
  });

  return (
    <group ref={groupRef}>
      <Box />
      <Tag />
    </group>
  );
};

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "lightpink",
      }}
    >
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          background: "#888",
          opacity: 0.5,
          zIndex: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontFamily: "'Yellowtail', cursive",
            margin: 0,
            fontSize: 64,
            color: "white",
            marginTop: "30%",
          }}
        >
          Rotating box
        </h1>
        <h5
          style={{
            fontFamily: "'IBM Plex Sans Thai Looped', sans-serif",
            margin: 0,
            fontSize: 20,
            color: "white",
          }}
        >
          by @danicolms
        </h5>
      </div>
      <Canvas>
        {/* <CameraControls /> */}
        <ambientLight />
        <pointLight position={[5, 5, 5]} />
        <CardboardBox />
      </Canvas>
    </div>
  );
}

export default App;
