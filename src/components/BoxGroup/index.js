import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Tag from "../Tag";
import Box from "../Box";

const BoxGroup = () => {
  const groupRef = useRef();

  useFrame(() => {
    groupRef.current.rotation.y += 0.02;
  });

  return (
    <group ref={groupRef}>
      <Box />
      <Tag color="yellow" pos={1} />
      <Tag color="lightsalmon" pos={2} />
      <Tag color="white" pos={3} />
    </group>
  );
};

export default BoxGroup;
