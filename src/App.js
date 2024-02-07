import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Model from "./Model";
import Loader from "./Loader";
import { Suspense } from "react";
import { useControls } from "leva";

function App() {
  //debug
  // const { x } = useControls({
  //   x: { value: -264.6, min: -555, max: 555, step: 0.1 },
  // });
  // const { y } = useControls({
  //   y: { value: 85.9, min: -555, max: 555, step: 0.1 },
  // });
  // const { z } = useControls({
  //   z: { value: -301.2, min: -555, max: 555, step: 0.1 },
  // });

  // const cameraPosition = (-264.6, 85.9, -301.2);

  return (
    <Canvas dpr={[1, 2]} shadows gl={{ toneMappingExposure: 0.4 }}>
      {/* <color   attach={"#000000"} /> */}
      <ambientLight intensity={0.8} />
      <spotLight
        angle={1}
        position={[-80, 200, -100]}
        intensity={0.6}
        penumbra={0.4}
      />

      <OrbitControls
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.8}
        // minDistance={61}
        maxDistance={300}
        // maxZoom={811}
        // enablePan={true}
        // autoRotate
        // autoRotateSpeed={0.1}
      />
      <fog attach="fog" args={["black", 11, 1911]} />
      <Suspense fallback={<Loader />}>
        <PerspectiveCamera
          makeDefault
          position={[-368.6731268356359, 120.8952643131237, 44.82050887850214]}
          near={1}
          far={2600}
        />

        <Model />
        <Environment
          castShadow
          files="./small_sky.hdr"
          // background
          // ground={{ height: 35, radius: 200, scale: 0.1 }}
        />
      </Suspense>
    </Canvas>
  );
}

export default App;
