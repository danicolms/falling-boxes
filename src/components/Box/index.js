import React, { useRef } from "react";

const Box = () => {
  const boxRef = useRef();

  return (
    <mesh ref={boxRef}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color={"#654321"} />
    </mesh>
  );
};
export default Box;
