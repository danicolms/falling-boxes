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
      <Tag color="yellow" />
    </group>
  );
};

export default BoxGroup;
