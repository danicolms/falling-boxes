import React, { useRef } from "react";

const Tag = ({ color }) => {
  const tagRef = useRef();

  return (
    <mesh ref={tagRef} position={[0, 0, 1]}>
      <boxBufferGeometry attach="geometry" args={[1.5, 1, 0.01]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Tag;
