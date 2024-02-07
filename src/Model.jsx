
import React  from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/masdar-3d-landscape-12.gltf");

      // camera check
      const { camera } = useThree();

      const cameraLog = () => {
          console.log(
              camera );
        } 
    
  return (
    <group {...props} dispose={null} scale={1} onClick={cameraLog}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane026.geometry}
        material={materials["Material.115"]}
        position={[-205.762, 7.666, 204.446]}
        scale={[4.577, 3.257, 3.257]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.115"]}
        position={[-201.205, 8.011, 201.242]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.115"]}
        position={[-201.205, 8.011, 260.789]}
        scale={0.158}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane130.geometry}
        material={materials.GRAY2}
        position={[98.764, 11.004, -184.553]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane131.geometry}
        material={nodes.Plane131.material}
        position={[99.787, 11.967, -185.323]}
      />
      <group position={[93.18, 11.807, -183.43]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135_1.geometry}
          material={materials["Material.126"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane135_2.geometry}
          material={materials["Material.127"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane133.geometry}
        material={materials["Material.006"]}
        position={[54.809, 10.085, -186.825]}
        scale={10.972}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane134.geometry}
        material={materials["Material.006"]}
        position={[54.809, 10.085, -186.825]}
        scale={10.972}
      />
      <group position={[-82.207, 18.253, -300.726]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134_1.geometry}
          material={materials["Material.126"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane134_2.geometry}
          material={materials["Material.127"]}
        />
      </group>
      <group
        position={[467.673, 4.934, 105.996]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.428]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136_1.geometry}
          material={materials["Material.126"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane136_2.geometry}
          material={materials["Material.127"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane143.geometry}
        material={materials["Material.129"]}
        position={[244.339, 4.857, 447.661]}
        scale={56.051}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials.GRAY2}
        position={[278.335, 5.01, 398.114]}
        scale={[5.629, 2.888, 5.629]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials.GRAY2}
        position={[273.119, 7.94, 451.539]}
        scale={[5.629, 2.888, 5.629]}
      />
      <group
        position={[464.813, 4.589, -21.534]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.849, 0.849, 1.213]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146_1.geometry}
          material={materials["Material.126"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane146_2.geometry}
          material={materials["Material.127"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane145.geometry}
        material={materials["Material.119"]}
        position={[464.813, 4.501, -21.534]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.849, 0.849, 1.213]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane147.geometry}
        material={materials["Material.121"]}
        position={[457.154, 5.306, -19.52]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.849, 0.849, 1.213]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.130"]}
        position={[226.802, 5.052, 418.884]}
        scale={[57.609, 2.118, 15.222]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.135"]}
        position={[-258.491, 11.476, -305.336]}
        scale={10.445}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.135"]}
        position={[228.627, 5.557, -294.597]}
        scale={11.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane082.geometry}
        material={materials["Material.055"]}
        position={[-817.344, 4.074, 491.81]}
        rotation={[0, -1.571, 0]}
        scale={62.566}
      />
      <group
        position={[552.27, 4.289, 406.037]}
        rotation={[0, -1.223, 0]}
        scale={0.471}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane070_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane070_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane021.geometry}
        material={materials["Material.004"]}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, -1.209, 0]}
        scale={0.471}
      />
      <group
        position={[552.27, 4.289, 199.481]}
        rotation={[0, -1.223, 0]}
        scale={0.471}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane071_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane071_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group
        position={[552.27, 4.289, -6.486]}
        rotation={[0, -1.223, 0]}
        scale={0.471}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane072_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane072_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group
        position={[552.27, 4.289, 612.821]}
        rotation={[0, -1.223, 0]}
        scale={0.471}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane026_2.geometry}
          material={materials["Material.013"]}
        />
      </group>
      <group position={[406.361, 4.014, 512.699]} scale={90.453}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["gray-blue"]}
        />
        <lineSegments
          geometry={nodes.Cube_1.geometry}
          material={materials["gray-blue"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.114"]}
        position={[90.098, 6.69, -49.618]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.114"]}
        position={[159.307, 10.024, -102.993]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["gray-blue"]}
        position={[-454.617, 9.558, -582.33]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials.GRAY2}
        position={[406.361, 4.014, 512.699]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.114"]}
        position={[119.472, 9.558, -165.297]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.114"]}
        position={[59.559, 9.558, -165.297]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.114"]}
        position={[2.306, 17.318, -297.857]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Material.114"]}
        position={[406.361, 4.014, 512.699]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["Material.114"]}
        position={[406.361, 4.014, 512.699]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["road-01"]}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, -0.032, 0]}
        scale={3.504}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.stone}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, -0.582, 0]}
        scale={[6.139, 6.139, 4.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials["Material.011"]}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, -0.582, 0]}
        scale={3.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials.stone}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, -0.582, 0]}
        scale={3.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials["Material.013"]}
        position={[406.448, 4.014, 514.51]}
        rotation={[0, -0.676, 0]}
        scale={6.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials["Material.004"]}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, 0.02, 0]}
        scale={2.425}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane016.geometry}
        material={materials["Material.003"]}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, 0.02, 0]}
        scale={2.425}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rim.geometry}
        material={materials.Material}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, -0.582, 0]}
        scale={3.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.Material}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, -0.582, 0]}
        scale={[6.265, 6.265, 4.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.Material}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, 0.093, 0]}
        scale={2.425}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials.stone}
        position={[493.849, 3.924, 599.823]}
        rotation={[0, 0.093, 0]}
        scale={2.425}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane018.geometry}
        material={materials["Material.009"]}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, 0.093, 0]}
        scale={2.425}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.Material}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, 1.237, 0]}
        scale={[6.139, 6.139, 4.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.stone}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, 1.24, 0]}
        scale={[6.139, 6.139, 4.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane017.geometry}
        material={materials.Material}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, -1.555, 0]}
        scale={15.798}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane019.geometry}
        material={materials["Material.007"]}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, -0.655, 0]}
        scale={0.683}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[407.271, 4.014, 512.699]}
        rotation={[0, 0.083, 0]}
        scale={2.398}
      />
      <group
        position={[534.397, 7.685, 286.921]}
        rotation={[-Math.PI, 0, 0]}
        scale={-14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040_2.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane040_3.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[535.07, 4.531, 329.252]}
        rotation={[0, 0.02, 0]}
        scale={2.425}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane045_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane045_2.geometry}
          material={materials["Material.007"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane062.geometry}
        material={materials["Material.004"]}
        position={[536.238, 4.283, 233.137]}
        rotation={[0, 0.02, 0]}
        scale={2.425}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane063.geometry}
        material={materials["Material.007"]}
        position={[536.215, 4.318, 233.094]}
        rotation={[0, -0.655, 0]}
        scale={0.683}
      />
      <group
        position={[535.361, 7.306, 194.857]}
        rotation={[0, -0.016, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane066.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane066_1.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[535.361, 7.306, 85.061]}
        rotation={[0, -0.016, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane067.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane067_1.geometry}
          material={materials.Trunk}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.115"]}
        position={[273.084, 7.888, 330.043]}
        scale={[0.125, 0.137, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.115"]}
        position={[277.39, 7.888, 330.043]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.125, -0.137, -0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane025.geometry}
        material={materials["Material.116"]}
        position={[250.392, 4.067, 300.179]}
        scale={[37.571, 2.685, 2.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane027.geometry}
        material={materials["Material.130"]}
        position={[250.392, 4.067, 329.37]}
        scale={[37.571, 2.685, 2.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.115"]}
        position={[252.441, 7.888, 330.043]}
        scale={[0.125, 0.137, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.115"]}
        position={[256.747, 7.888, 330.043]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.125, -0.137, -0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Material.115"]}
        position={[231.519, 7.888, 330.043]}
        scale={[0.125, 0.137, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Material.115"]}
        position={[235.825, 7.888, 330.043]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.125, -0.137, -0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["Material.115"]}
        position={[215.758, 7.888, 330.043]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.125, -0.137, -0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["Material.115"]}
        position={[189.855, 7.888, 330.043]}
        scale={[0.125, 0.137, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["Material.115"]}
        position={[194.162, 7.888, 330.043]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.125, -0.137, -0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane028.geometry}
        material={materials["Material.130"]}
        position={[167.163, 4.067, 329.37]}
        scale={[37.571, 2.685, 2.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Material.115"]}
        position={[169.212, 7.888, 330.043]}
        scale={[0.125, 0.137, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials["Material.115"]}
        position={[173.519, 7.888, 330.043]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.125, -0.137, -0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials["Material.115"]}
        position={[148.29, 7.888, 330.043]}
        scale={[0.125, 0.137, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={materials["Material.115"]}
        position={[152.597, 7.888, 330.043]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.125, -0.137, -0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={materials["Material.116"]}
        position={[167.163, 4.067, 300.179]}
        scale={[37.571, 2.685, 2.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder055.geometry}
        material={materials["Material.115"]}
        position={[500.765, 7.438, 605.799]}
        rotation={[0, -0.427, 0]}
        scale={[0.074, 0.08, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder056.geometry}
        material={materials["Material.115"]}
        position={[494.129, 7.438, 602.02]}
        rotation={[-Math.PI, 0.432, -Math.PI]}
        scale={[0.074, 0.08, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder031.geometry}
        material={materials["Material.115"]}
        position={[654.341, 7.893, 541.033]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials["Material.115"]}
        position={[654.341, 7.893, 644.046]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials["Material.115"]}
        position={[654.341, 7.893, 744.215]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.066]}
      />
      <group position={[241.72, 4.405, 14.333]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials["Material.120"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials["grass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials["Material.118"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_3.geometry}
          material={materials["SVGMat.007"]}
        />
        <lineSegments
          geometry={nodes.Mesh_4.geometry}
          material={materials["Material.120"]}
        />
      </group>
      <group
        position={[217.665, 7.809, -6.428]}
        rotation={[0, 1.319, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane082_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[173.226, 7.002, -37.436]}
        rotation={[0, -0.499, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane083_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[212.927, 7.809, 0.083]}
        rotation={[0, 0.479, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane084_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[209.655, 7.809, 5.321]}
        rotation={[0, -0.794, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane085_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[213.259, 7.809, -9.498]}
        rotation={[0, 0.132, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane086_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[208.666, 7.809, -3.823]}
        rotation={[0, 0.819, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane087_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[147.399, 7.002, -37.242]}
        rotation={[0, 1.291, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane088_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[205.249, 7.809, 2.25]}
        rotation={[0, 1.133, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane089_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[196.304, 7.809, -18.71]}
        rotation={[0, 1.133, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane090_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[196.438, 7.809, 26.006]}
        rotation={[-Math.PI, 0.553, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane091_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[196.438, 7.809, 52.616]}
        rotation={[0, -0.763, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane092_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[196.438, 7.809, 37.298]}
        rotation={[0, 1.133, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane095_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane095_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[196.171, 7.809, 12.694]}
        rotation={[0, 0.175, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane096_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane096_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[196.438, 7.809, -52.487]}
        rotation={[0, 1.133, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane097_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane097_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[196.571, 7.809, 78.957]}
        rotation={[-Math.PI, 0.553, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane098_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane098_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[284.329, 7.809, 79.824]}
        rotation={[0, -0.763, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane099_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane099_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[282.848, 7.809, -49.547]}
        rotation={[0, 1.133, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane102_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[196.304, 7.809, -33.529]}
        rotation={[0, 0.175, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane103_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane068.geometry}
        material={materials["SVGMat.007"]}
        position={[289.005, 4.014, 27.869]}
        scale={7.496}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane069.geometry}
        material={materials["Material.118"]}
        position={[221.605, 4.16, -185.22]}
        scale={15.202}
      />
      <group position={[189.996, 4.159, -95.227]} scale={18.697}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107_1.geometry}
          material={materials.grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane107_2.geometry}
          material={materials.gray}
        />
      </group>
      <group
        position={[211.748, 7.002, -98.018]}
        rotation={[0, 1.133, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane006_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[211.629, 7.809, 42.844]}
        rotation={[-Math.PI, 0.553, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[211.882, 7.002, -88.272]}
        rotation={[0, -0.763, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane012_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[237.645, 7.809, -52.97]}
        rotation={[0, 1.133, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014_1.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[211.615, 7.002, -79.061]}
        rotation={[0, 0.175, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[184.614, 7.138, -74.034]}
        rotation={[-Math.PI, 0.438, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane025_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[197.017, 7.138, -123.32]}
        rotation={[Math.PI, -1.017, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane027_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[194.359, 7.138, -74.168]}
        rotation={[0, 0.807, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane028_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[173.219, 7.138, -111.353]}
        rotation={[-Math.PI, 0.438, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane029_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[203.571, 7.138, -73.901]}
        rotation={[-Math.PI, 1.396, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane030_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials["Material.115"]}
        position={[-283.313, 8.146, 159.915]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials["Material.115"]}
        position={[-612.791, 6.427, -138.391]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials["Material.115"]}
        position={[-631.903, 6.427, -138.676]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials["Material.115"]}
        position={[-648.037, 6.427, -131.493]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.049]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials["Material.115"]}
        position={[-665.653, 6.548, -147.459]}
        rotation={[-Math.PI, 0.619, -Math.PI]}
        scale={[0.074, 0.08, 0.049]}
      />
      <group
        position={[101.762, 6.634, 317.114]}
        rotation={[0, -0.499, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane034_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[105.461, 6.634, 322.046]}
        rotation={[0, -1.16, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane035_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[108.672, 6.634, 327.255]}
        rotation={[0, -0.449, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane036_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[112.24, 6.634, 333.106]}
        rotation={[0, -0.983, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane038_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[115.165, 6.634, 339.172]}
        rotation={[Math.PI, -0.935, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane039_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[117.806, 6.634, 345.237]}
        rotation={[0, -1.236, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane041_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane041_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[118.805, 6.634, 352.016]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane042_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[120.375, 6.634, 358.224]}
        rotation={[0, -0.911, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane043_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[121.484, 6.634, 365.499]}
        rotation={[Math.PI, -0.098, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane044_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[121.484, 6.634, 371.665]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane046_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[121.114, 6.634, 378.57]}
        rotation={[-Math.PI, 0.201, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[119.388, 6.634, 385.352]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane048_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[117.785, 6.634, 391.394]}
        rotation={[Math.PI, -1.444, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane049_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane049_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[116.305, 6.634, 397.806]}
        rotation={[-Math.PI, 0.266, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane050_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane050_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[76.257, 7.753, 418.453]}
        rotation={[0, -1.26, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane051_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane051_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[72.398, 7.753, 412.944]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane052_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane052_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[39.836, 7.138, 394.245]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane055_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[42.464, 7.138, 344.933]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane056_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[83.575, 6.832, 355.007]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane058_1.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[86.062, 7.562, 341.886]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane073_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane073_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[92.783, 7.319, 324.52]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane101_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[44.784, 7.138, 310.879]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane105_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[32.646, 7.138, 314.741]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane108_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[20.359, 7.947, 331.05]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane109_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-74.601, 7.138, 310.442]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane110_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-89.228, 7.138, 293.643]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane111_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-106.917, 7.138, 270.752]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane112_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-128.189, 7.138, 233.729]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane113_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-106.712, 7.138, 218.895]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane114_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-139.641, 7.138, 188.512]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane115_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-61.401, 7.138, 255.093]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane116_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[24.51, 7.138, 272.889]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane117_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[36.17, 7.138, 202.933]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane118_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[114.41, 7.138, 233.616]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane119_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[97.228, 7.138, 267.673]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane120_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[129.444, 7.138, 190.353]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane121_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[45.374, 7.138, 179.921]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane122_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-49.774, 7.138, 337.1]}
        rotation={[Math.PI, -0.684, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane123_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-19.366, 7.138, 359.721]}
        rotation={[Math.PI, -1.521, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane124_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[51.807, 6.62, 414.937]}
        rotation={[0, -0.761, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane125_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[148, 6.634, 300.09]}
        rotation={[0, -1.16, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane126_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[168.034, 6.634, 300.365]}
        rotation={[0, -0.366, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane127_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[187.794, 6.634, 300.365]}
        rotation={[Math.PI, -1.001, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane128_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[230.333, 6.634, 300.09]}
        rotation={[0, -1.16, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane129_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[250.368, 6.634, 300.365]}
        rotation={[0, 0.331, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane130_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[270.128, 6.634, 300.365]}
        rotation={[0, -1.16, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane131_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[36.916, 12.946, -189.243]}
        rotation={[0, 1.133, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane140_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[37.05, 12.946, -182.953]}
        rotation={[-Math.PI, 0.553, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane141_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[37.05, 12.946, -176.464]}
        rotation={[0, -0.763, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane142_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[71.451, 12.946, -189.243]}
        rotation={[0, 1.133, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane143_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[71.585, 12.946, -182.953]}
        rotation={[-Math.PI, 0.553, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane144_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[71.585, 12.946, -176.464]}
        rotation={[0, -0.763, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane145_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials["Material.115"]}
        position={[225.265, 8.744, 421.709]}
        rotation={[0, 1.571, 0]}
        scale={[0.154, 0.169, 0.254]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024.geometry}
        material={materials["Material.115"]}
        position={[225.265, 8.744, 416.392]}
        rotation={[Math.PI, -1.571, 0]}
        scale={[-0.154, -0.169, -0.254]}
      />
      <group
        position={[534.397, 7.849, -0.874]}
        rotation={[-Math.PI, 0, 0]}
        scale={-14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150_2.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150_3.geometry}
          material={materials.Trunk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane150_4.geometry}
          material={materials["Material.117"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sand.geometry}
        material={materials["gray-blue"]}
        position={[85.583, 3.994, 544.593]}
        scale={3342.734}
      />
      <group position={[-1387.158, 4.674, 1337.534]} scale={3342.734}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve001.geometry}
          material={materials["SVGMat.007"]}
        />
        <points
          geometry={nodes.Curve001_1.geometry}
          material={materials["SVGMat.007"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={materials["Material.004"]}
        position={[406.656, 4.014, 514.542]}
        rotation={[0, -1.149, 0]}
        scale={0.469}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials["Material.004"]}
        position={[406.656, 4.014, 514.542]}
        rotation={[0, -1.149, 0]}
        scale={0.469}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane052.geometry}
        material={materials["Material.004"]}
        position={[406.656, 4.014, 514.542]}
        rotation={[0, -1.149, 0]}
        scale={0.469}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane054.geometry}
        material={materials["Material.004"]}
        position={[406.656, 4.014, 514.542]}
        rotation={[0, -1.149, 0]}
        scale={0.469}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane055.geometry}
        material={materials["Material.004"]}
        position={[406.656, 4.014, 514.542]}
        rotation={[0, -1.149, 0]}
        scale={0.469}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane056.geometry}
        material={materials["Material.004"]}
        position={[406.656, 4.014, 514.542]}
        rotation={[0, -1.149, 0]}
        scale={0.469}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane057.geometry}
        material={materials["Material.004"]}
        position={[406.656, 4.014, 514.542]}
        rotation={[0, -1.149, 0]}
        scale={0.469}
      />
      <group
        position={[406.361, 4.014, 512.699]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.435}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crown_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crown_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[449.463, 7.318, 624.558]}
        rotation={[Math.PI, -0.06, Math.PI]}
        scale={0.435}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crown001_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crown001_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[406.361, 4.014, 512.699]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.435}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crown002_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crown002_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[137.254, 7.304, -368.717]}
        rotation={[0, 1.571, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148_2.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane148_3.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[11.821, 7.304, -368.717]}
        rotation={[0, 1.571, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151_2.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane151_3.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[-200.824, 7.304, -368.717]}
        rotation={[0, 1.571, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane152_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane152_2.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane152_3.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[361.89, 4.876, 146.76]}
        rotation={[0, 1.571, 0]}
        scale={[1, 1, 1.593]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane153_1.geometry}
          material={materials["Material.126"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane153_2.geometry}
          material={materials["Material.127"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["Material.135"]}
        position={[38.451, 4.014, -229.368]}
        scale={11.001}
      />
      <group
        position={[155.478, 7.306, -234.904]}
        rotation={[0, 1.571, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane154_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane154_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[139.346, 7.306, -234.904]}
        rotation={[0, 0.248, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane155_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane155_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[121.87, 7.306, -234.904]}
        rotation={[0, 1.059, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane156_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane156_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[105.2, 7.306, -234.904]}
        rotation={[0, 0.248, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane157_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane157_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[87.724, 7.306, -234.904]}
        rotation={[0, 1.059, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane158_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane158_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[72.668, 7.306, -234.904]}
        rotation={[0, 0.248, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane159_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane159_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[60.301, 7.306, -237.288]}
        rotation={[0, 1.059, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane160_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane160_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[71.951, 7.306, -223.208]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane161_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane161_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[88.083, 7.306, -223.208]}
        rotation={[Math.PI, -0.248, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane162_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane162_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[105.559, 7.306, -223.208]}
        rotation={[Math.PI, -1.059, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane163_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane163_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[122.228, 7.306, -223.208]}
        rotation={[Math.PI, -0.248, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane164_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane164_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[139.704, 7.306, -223.208]}
        rotation={[Math.PI, -1.059, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane165_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane165_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[154.761, 7.306, -223.208]}
        rotation={[Math.PI, -0.248, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane166_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane166_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[23.064, 7.306, -241.724]}
        rotation={[0, 1.059, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane167_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane167_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[22.392, 7.306, -218.065]}
        rotation={[0, -0.622, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane168_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane168_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[60.57, 7.306, -221.963]}
        rotation={[-Math.PI, 1.024, -Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane169_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane169_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[171.606, 7.306, -223.208]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane170_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane170_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[187.738, 7.306, -223.208]}
        rotation={[Math.PI, -0.248, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane171_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane171_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[205.214, 7.306, -223.208]}
        rotation={[Math.PI, -1.059, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane172_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane172_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[221.884, 7.306, -223.208]}
        rotation={[Math.PI, -0.248, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane173_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane173_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[239.36, 7.306, -223.208]}
        rotation={[Math.PI, -1.059, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane174_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane174_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[254.416, 7.306, -223.208]}
        rotation={[Math.PI, -0.248, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane175_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane175_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[270.255, 7.306, -223.208]}
        rotation={[Math.PI, -1.059, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane176_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane176_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group
        position={[285.311, 7.306, -223.208]}
        rotation={[Math.PI, -0.248, Math.PI]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane177_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane177_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane178.geometry}
        material={materials["Material.006"]}
        position={[13.969, 9.559, -199.827]}
        scale={[13.074, 10.972, 1.854]}
      />
      <group position={[40.929, 4.064, -229.264]} scale={6.339}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials["Material.136"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials["Material.137"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road001.geometry}
        material={materials["SVGMat.007"]}
        position={[-247.821, 4.064, -29.465]}
        scale={3342.734}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.road002.geometry}
        material={materials["SVGMat.007"]}
        position={[-191.483, 4.064, 67.425]}
        rotation={[0, 0.012, 0]}
        scale={[3342.735, 3342.734, 3342.735]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["gray-blue"]}
        position={[-164.057, 3.719, -1.474]}
        scale={90.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials["Material.138"]}
        position={[-620.787, 3.99, 13.76]}
        scale={[13.287, 15.238, 74.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials["Material.140"]}
        position={[-655.627, 7.159, -24.132]}
        scale={[13.287, 15.238, 74.147]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials["Material.139"]}
        position={[-637.933, 4.064, 8.372]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder025.geometry}
        material={materials["Material.115"]}
        position={[-639.644, 7.79, -21.009]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={materials["Material.115"]}
        position={[-639.644, 7.79, 18.209]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder027.geometry}
        material={materials["Material.115"]}
        position={[-639.644, 7.79, 56.593]}
        rotation={[Math.PI, -0.017, Math.PI]}
        scale={[0.074, 0.08, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder028.geometry}
        material={materials["Material.115"]}
        position={[-676.985, 7.79, 56.871]}
        rotation={[0, 0.017, 0]}
        scale={[0.074, 0.08, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder029.geometry}
        material={materials["Material.115"]}
        position={[-676.985, 7.79, 17.653]}
        rotation={[0, 0.017, 0]}
        scale={[0.074, 0.08, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder030.geometry}
        material={materials["Material.115"]}
        position={[-676.985, 7.79, -20.731]}
        rotation={[0, 0.017, 0]}
        scale={[0.074, 0.08, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials["Material.141"]}
        position={[-657.78, 4.272, 17.492]}
      />
      <group position={[250.601, 3.992, 252.593]} scale={35.491}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_1.geometry}
          material={materials["Material.146"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_2.geometry}
          material={materials["Material.147"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={materials["Material.004"]}
        position={[206.527, 4.283, 148.852]}
        rotation={[0, 0.02, 0]}
        scale={2.425}
      />
      <group
        position={[205.65, 7.306, 110.572]}
        rotation={[0, -0.016, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.Trunk}
        />
      </group>
      <group position={[178.89, 3.992, 252.293]} scale={35.491}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_1.geometry}
          material={materials["Material.146"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_2.geometry}
          material={materials["Material.147"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={materials["Material.004"]}
        position={[195.9, 4.283, 271.371]}
        rotation={[0, 0.02, 0]}
        scale={2.425}
      />
      <group
        position={[195.023, 7.306, 233.091]}
        rotation={[0, -0.016, 0]}
        scale={14.836}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_1.geometry}
          material={materials.Crown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane009_2.geometry}
          material={materials.Trunk}
        />
      </group>
      <group position={[162.096, 4.159, 75.288]} scale={13.309}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_1.geometry}
          material={materials.grass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016_2.geometry}
          material={materials.gray}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder032.geometry}
        material={materials["Material.115"]}
        position={[171.165, 7.888, 148.831]}
        scale={[0.125, 0.137, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder033.geometry}
        material={materials["Material.115"]}
        position={[175.471, 7.888, 148.831]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.125, -0.137, -0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane177.geometry}
        material={materials["Material.130"]}
        position={[148.473, 4.067, 148.158]}
        scale={[37.571, 2.685, 2.685]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder034.geometry}
        material={materials["Material.115"]}
        position={[150.522, 7.888, 148.831]}
        scale={[0.125, 0.137, 0.113]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder035.geometry}
        material={materials["Material.115"]}
        position={[154.828, 7.888, 148.831]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.125, -0.137, -0.113]}
      />
      <group
        position={[169.719, 12.671, -130.623]}
        rotation={[0, 1.571, 0]}
        scale={[8.528, 11.029, 8.528]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094_1.geometry}
          material={materials["frame.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094_2.geometry}
          material={materials["beige.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094_3.geometry}
          material={materials["white.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094_4.geometry}
          material={materials["metal gray"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094_5.geometry}
          material={materials["glass.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane094_6.geometry}
          material={materials["metal lgray"]}
        />
        <lineSegments
          geometry={nodes.Plane094_7.geometry}
          material={materials["frame.004"]}
        />
      </group>
      <group
        position={[-2.856, 18.175, -109.808]}
        scale={[6.878, 5.105, 7.124]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_1.geometry}
          material={materials.texture}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_2.geometry}
          material={materials["Material.085"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_3.geometry}
          material={materials.ora}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_4.geometry}
          material={materials.yel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_5.geometry}
          material={materials.blu}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_6.geometry}
          material={materials["green.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_7.geometry}
          material={materials.gra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_8.geometry}
          material={materials["glass.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_9.geometry}
          material={materials["frame.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_10.geometry}
          material={materials["Material.086"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_11.geometry}
          material={materials["Material.087"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane100_12.geometry}
          material={materials["gray.002"]}
        />
      </group>
      <group
        position={[9.087, 24.579, -301.222]}
        rotation={[-Math.PI, 1.571, 0]}
        scale={[-694.344, -694.344, -757.671]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve043.geometry}
          material={materials.rim}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve043_1.geometry}
          material={materials["yellow.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve043_2.geometry}
          material={materials["glass.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve043_3.geometry}
          material={materials["orange pat"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve043_4.geometry}
          material={materials["Material.088"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve043_5.geometry}
          material={materials.wall}
        />
      </group>
      <group
        position={[16.615, 7.57, -294.147]}
        rotation={[0, -0.001, 0]}
        scale={49.032}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={nodes.Cube055.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_1.geometry}
          material={materials["Material.089"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_2.geometry}
          material={materials["salmon-wall"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_3.geometry}
          material={materials["Material.090"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_4.geometry}
          material={materials["Material.091"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_5.geometry}
          material={materials["Material.092"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_6.geometry}
          material={materials["Material.093"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_7.geometry}
          material={materials["Material.094"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_8.geometry}
          material={materials["Material.095"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_9.geometry}
          material={materials["Material.096"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_10.geometry}
          material={materials["Material.097"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube055_11.geometry}
          material={materials["Material.098"]}
        />
      </group>
      <group
        position={[-81.742, 19.41, -98.973]}
        scale={[10.143, 5.881, 2.052]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.orange}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_2.geometry}
          material={materials["Material.065"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_3.geometry}
          material={materials["front-text"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_4.geometry}
          material={materials["Material.066"]}
        />
      </group>
      <group
        position={[406.361, 2.054, 512.699]}
        scale={[10.239, 1.994, 11.187]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128.geometry}
          material={materials["Material.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_1.geometry}
          material={materials["Material.067"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_2.geometry}
          material={materials["SG-texture.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_3.geometry}
          material={materials["Material.068"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_4.geometry}
          material={materials["Material.069"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_5.geometry}
          material={materials["Material.070"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_6.geometry}
          material={materials["LG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_7.geometry}
          material={materials["Material.071"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_8.geometry}
          material={materials["Material.072"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_9.geometry}
          material={materials["SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube128_10.geometry}
          material={materials["rails.001"]}
        />
      </group>
      <group
        position={[406.361, 2.054, 512.699]}
        rotation={[0, 0.735, 0]}
        scale={[5.917, 6.443, 6.621]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009.geometry}
          material={materials["Material.079"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_1.geometry}
          material={materials["Material.073"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_2.geometry}
          material={materials["Material.074"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_3.geometry}
          material={materials["Material.075"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_4.geometry}
          material={materials["Material.076"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_5.geometry}
          material={materials["Material.077"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icosphere009_6.geometry}
          material={materials["Material.078"]}
        />
      </group>
      <group position={[-149.356, 12.651, -1.537]} scale={1.077}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials["Material.099"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials["Material.100"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_3.geometry}
          material={materials["yellow.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_4.geometry}
          material={materials["frame.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_5.geometry}
          material={materials["frame.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_6.geometry}
          material={materials["frame.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_7.geometry}
          material={materials["yellow.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_8.geometry}
          material={materials["frame.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_9.geometry}
          material={materials["frame.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_10.geometry}
          material={materials["br-yellow.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_11.geometry}
          material={materials["frame.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_12.geometry}
          material={materials["frame.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_13.geometry}
          material={materials["0-terra.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_14.geometry}
          material={materials["Material.101"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_15.geometry}
          material={materials["frame.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_16.geometry}
          material={materials["Material.102"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_17.geometry}
          material={materials["Material.103"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_18.geometry}
          material={materials["yellow.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_19.geometry}
          material={materials["blue_glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_20.geometry}
          material={materials["Material.104"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_21.geometry}
          material={materials["Material.105"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_22.geometry}
          material={materials["roof.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_23.geometry}
          material={materials["0-dark-steel.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_24.geometry}
          material={materials["0-dark-steel.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_25.geometry}
          material={materials["Material.106"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_26.geometry}
          material={materials["Material.107"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_27.geometry}
          material={materials["Material.108"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_28.geometry}
          material={materials["0-gray.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_29.geometry}
          material={materials["Material.109"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_30.geometry}
          material={materials["Material.110"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_31.geometry}
          material={materials["Material.111"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_32.geometry}
          material={materials["Material.112"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_33.geometry}
          material={materials["Material.113"]}
        />
      </group>
      <group
        position={[406.361, 4.294, 512.699]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1778.442}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117.geometry}
          material={materials.WHT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117_1.geometry}
          material={materials.LGRAY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117_2.geometry}
          material={materials["gray-blue"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117_3.geometry}
          material={materials["Material.063"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117_4.geometry}
          material={materials["Material.064"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117_5.geometry}
          material={materials.DGRAY}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117_6.geometry}
          material={materials["gray-blue"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117_7.geometry}
          material={materials["gray-blue"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117_8.geometry}
          material={materials["gre-dk"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve117_9.geometry}
          material={materials["gre-dk2"]}
        />
        <points
          geometry={nodes.Curve117_10.geometry}
          material={materials.WHT}
        />
      </group>
      <group
        position={[258.355, 7.898, 31.542]}
        rotation={[0, -1.571, 0]}
        scale={1.523}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041.geometry}
          material={materials["SVGMat.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_1.geometry}
          material={materials["Material.031"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_2.geometry}
          material={materials.sand}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_3.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_4.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_5.geometry}
          material={materials["door.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_6.geometry}
          material={materials["Material.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_7.geometry}
          material={materials["Material.035"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_8.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_9.geometry}
          material={materials["Material.037"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_10.geometry}
          material={materials["sand-texture"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_11.geometry}
          material={materials["Material.038"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_12.geometry}
          material={materials["Material.039"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_13.geometry}
          material={materials["Material.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_14.geometry}
          material={materials["Material.041"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_15.geometry}
          material={materials["Material.042"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_16.geometry}
          material={materials["Material.043"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_17.geometry}
          material={materials["Material.044"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_18.geometry}
          material={materials["Material.045"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_19.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_20.geometry}
          material={materials["sand-texture02"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_21.geometry}
          material={materials["frame.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_22.geometry}
          material={materials.glass1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_23.geometry}
          material={materials["Material.047"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_24.geometry}
          material={materials["blue1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_25.geometry}
          material={materials.blue2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_26.geometry}
          material={materials.blue3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_27.geometry}
          material={materials.blue1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_28.geometry}
          material={materials["glass.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_29.geometry}
          material={materials["Material.048"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_30.geometry}
          material={materials["Material.049"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_31.geometry}
          material={materials["frame.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_32.geometry}
          material={materials["glass.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_33.geometry}
          material={materials["Material.050"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_34.geometry}
          material={materials["Material.051"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_35.geometry}
          material={materials["Material.052"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_36.geometry}
          material={materials["Material.053"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve041_37.geometry}
          material={materials["Material.054"]}
        />
      </group>
      <group position={[482.518, 19.337, -44.761]} scale={[1, 1.654, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_1.geometry}
          material={materials["glass.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_2.geometry}
          material={materials.beige}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_3.geometry}
          material={materials.door}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_4.geometry}
          material={materials.line}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_5.geometry}
          material={materials["glass.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_6.geometry}
          material={materials["Material.023"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_7.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_8.geometry}
          material={materials["d.brown.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_9.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_10.geometry}
          material={materials.ream}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_11.geometry}
          material={materials["Material.026"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_12.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_13.geometry}
          material={materials["Material.028"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_14.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_15.geometry}
          material={materials["Material.030"]}
        />
      </group>
      <group position={[406.361, 2.054, 512.699]} scale={0.384}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_1.geometry}
          material={materials["d.brown"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_2.geometry}
          material={materials["Material.021"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_3.geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_4.geometry}
          material={materials.frame}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_5.geometry}
          material={materials["green.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_6.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_7.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_8.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_9.geometry}
          material={materials["gray.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_10.geometry}
          material={materials["white.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_11.geometry}
          material={materials["Material.010"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_12.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_13.geometry}
          material={materials["Material.014"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_14.geometry}
          material={materials["Material.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_15.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_16.geometry}
          material={materials["side-windows"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_17.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_18.geometry}
          material={materials["Material.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_19.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_20.geometry}
          material={materials["Material.020"]}
        />
      </group>
      <group
        position={[429.097, 21.177, 259.31]}
        scale={[74.424, 45.017, 45.017]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials["Material.218"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials["Material.219"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_3.geometry}
          material={materials["Material.220"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_4.geometry}
          material={materials["Material.221"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_5.geometry}
          material={materials["Material.222"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_6.geometry}
          material={materials["mesh-texture"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_7.geometry}
          material={materials["Material.223"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_8.geometry}
          material={materials.signage2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_9.geometry}
          material={materials.signage}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_10.geometry}
          material={materials.roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_11.geometry}
          material={materials["Material.224"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_12.geometry}
          material={materials["Material.225"]}
        />
      </group>
      <group
        position={[406.361, 2.054, 512.699]}
        rotation={[0, -1.024, 0]}
        scale={[6.315, 6.863, 6.315]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020_1.geometry}
          material={materials["main-mirror"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020_2.geometry}
          material={materials["main-gray"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020_3.geometry}
          material={materials["main-black"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020_4.geometry}
          material={materials["main-lt-gray"]}
        />
      </group>
      <group
        position={[-902.091, 4.556, 526.38]}
        rotation={[0, -1.571, 0]}
        scale={62.566}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1447.geometry}
          material={materials.concrt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1447_1.geometry}
          material={materials["line.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1447_2.geometry}
          material={materials["glass.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane1447_3.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group position={[406.361, 2.054, 512.699]} scale={0.847}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_1.geometry}
          material={materials["gray.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_2.geometry}
          material={materials["mirror.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_3.geometry}
          material={materials["black.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_4.geometry}
          material={materials["Material.234"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_5.geometry}
          material={materials["Material.235"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_6.geometry}
          material={materials["01blue.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane032_7.geometry}
          material={materials["02beige.001"]}
        />
      </group>
      <group
        position={[1254.487, 2.054, 154.942]}
        rotation={[0, -1.571, 0]}
        scale={0.512}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_1.geometry}
          material={materials.blk}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_2.geometry}
          material={materials["beige.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_3.geometry}
          material={materials["honeywell-gray"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_4.geometry}
          material={materials["honeywell-white"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_5.geometry}
          material={materials["Material.056"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_6.geometry}
          material={materials["Material.057"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_7.geometry}
          material={materials["glass.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_8.geometry}
          material={materials.dgray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_9.geometry}
          material={materials["yellow.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_10.geometry}
          material={materials["honeywell-red"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane033_11.geometry}
          material={materials["Material.058"]}
        />
      </group>
      <group
        position={[1037.092, 2.054, 858.587]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[4.12, 1.368, 4.12]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_1.geometry}
          material={materials["light-yellow"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_2.geometry}
          material={materials["Material.059"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_3.geometry}
          material={materials["Material.060"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_4.geometry}
          material={materials["Material.061"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_5.geometry}
          material={materials["Material.062"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_6.geometry}
          material={materials["Material.122"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_7.geometry}
          material={materials["Material.123"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_8.geometry}
          material={materials["Material.124"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013_9.geometry}
          material={materials["Material.125"]}
        />
      </group>
      <group position={[406.361, 0, 512.699]} scale={21.293}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_1.geometry}
          material={materials["Material.143"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_2.geometry}
          material={materials["Material.144"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_3.geometry}
          material={materials["Material.142"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_4.geometry}
          material={materials["Material.145"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_5.geometry}
          material={materials["black.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_6.geometry}
          material={materials["roof.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_7.geometry}
          material={materials["roof-dk"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_8.geometry}
          material={materials["mirror.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_9.geometry}
          material={materials["rim.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_10.geometry}
          material={materials["main-white"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_11.geometry}
          material={materials["roof-dk.001"]}
        />
      </group>
      <group
        position={[406.361, 2.054, 512.699]}
        rotation={[0, -1.571, 0]}
        scale={[24.791, 19.948, 27.438]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_1.geometry}
          material={materials["gray.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_2.geometry}
          material={materials["Material.083"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_3.geometry}
          material={materials["Material.084"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_4.geometry}
          material={materials["white.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_5.geometry}
          material={materials["frame.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_6.geometry}
          material={materials.yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_7.geometry}
          material={materials["orange.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane093_8.geometry}
          material={materials.mirror}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["muh-text.001"]}
        position={[-11.706, 20.635, -16.625]}
        scale={[0.445, 2.31, 0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026.geometry}
        material={materials["muh-text.001"]}
        position={[-11.706, 20.635, -16.625]}
        scale={[0.445, 2.31, 0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027.geometry}
        material={materials["muh-text.001"]}
        position={[-11.706, 20.635, -16.625]}
        scale={[0.445, 2.31, 0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials["muh-text.001"]}
        position={[-11.706, 20.635, -16.625]}
        scale={[0.445, 2.31, 0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube030.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube031.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube032.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube033.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube035.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube037.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube038.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube041.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube046.geometry}
        material={materials["Material.080"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube047.geometry}
        material={materials["Material.082"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={materials["muh-text.001"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={materials["muh-text.001"]}
        position={[-12.151, 20.635, -16.625]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      />
      <group
        position={[-40.549, 20.635, -16.529]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.445, -2.31, -0.445]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={materials["Material.080"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube095_1.geometry}
          material={materials["muh-text.001"]}
        />
      </group>
      <group position={[16.797, 20.635, -16.529]} scale={[0.445, 2.31, 0.445]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={materials["Material.080"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube097_1.geometry}
          material={materials["muh-text.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/masdar-3d-landscape-12.gltf");
