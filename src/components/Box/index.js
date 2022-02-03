import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
const Box = () => {
  const boxRef = useRef();

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      process.env.PUBLIC_URL + "/Cardboard001_1K_Color.jpg",
      process.env.PUBLIC_URL + "/Cardboard001_1K_Displacement.jpg",
      process.env.PUBLIC_URL + "/Cardboard001_1K_NormalGL.jpg",
      process.env.PUBLIC_URL + "/Cardboard001_1K_Roughness.jpg",
 
    ]
  );

  return (
    <mesh ref={boxRef}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial
        map={colorMap}
        // displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
        color="#654321"
      />
    </mesh>
  );
};
export default Box;
