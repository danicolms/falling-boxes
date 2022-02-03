import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { getRandomPositionCoordinate, getRandomSize } from "../../utils";
const Tag = ({ color, pos }) => {
  const tagRef = useRef();

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      process.env.PUBLIC_URL + "/Paper003_1K_Color.jpg",
      process.env.PUBLIC_URL + "/Paper003_1K_Displacement.jpg",
      process.env.PUBLIC_URL + "/Paper003_1K_NormalGL.jpg",
      process.env.PUBLIC_URL + "/Paper003_1K_Roughness.jpg",
    ]
  );

  return (
    <mesh
      ref={tagRef}
      position={[
        getRandomPositionCoordinate(1),
        getRandomPositionCoordinate(3),
        1,
      ]}
    >
      <boxBufferGeometry
        attach="geometry"
        args={[getRandomSize(), getRandomSize(), pos / 1000]}
      />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        color={color}
      />
    </mesh>
  );
};

export default Tag;
