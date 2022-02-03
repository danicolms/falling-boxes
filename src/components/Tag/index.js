import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

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

  const getRandomPositionCoordinate = (range) =>
    (Math.floor(Math.random() * range * 2) - range) / 10;

  const getRandomSize = () => (Math.floor(Math.random() * 15) + 1) / 10;

  return (
    <mesh
      ref={tagRef}
      position={[
        getRandomPositionCoordinate(2),
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
        // displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        color={color}
      />
    </mesh>
  );
};

export default Tag;
