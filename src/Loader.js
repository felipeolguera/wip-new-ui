import "./index.css";
import { PerspectiveCamera } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Loader(props) {
  const group = useRef();
  const { nodes, animations } = useGLTF("/ztloader.glb");

  const { names, actions } = useAnimations(animations, group);
  useEffect(() => {
    actions[names[0]].reset().play();
    return () => actions[names[0]];
  }, [actions, names]);

  return (
    <>
      <ambientLight intensity={0.61} />
      <spotLight angle={1} position={[-80, 200, -100]} intensity={0.1} />
      <color attach="background" args={["#0b0b0b"]} />

      <group
        ref={group}
        {...props}
        dispose={null}
        scale={4}
        rotation={[0, 20.2, 0]}
      >
        <group name="Scene">
          <mesh
            name="zticon"
            castShadow
            receiveShadow
            geometry={nodes.zticon.geometry}
          >
            <meshStandardMaterial
              roughness={0}
              transparent
              opacity={0.5}
              color={"#fefefe"}
            />
          </mesh>
        </group>
      </group>

      <PerspectiveCamera
        makeDefault
        position={[-240.0, -90, 40]}
        fov={50}
        near={55}
        far={110000}
      />
    </>
  );
}
