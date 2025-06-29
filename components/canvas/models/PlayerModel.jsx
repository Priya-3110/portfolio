// function PlayerModel({ nodes, materials, scale, position, rotation, group }) {
// 	return (
// 		<group
// 			dispose={null}
// 			scale={scale}
// 			position={position}
// 			ref={group}
// 			rotation={rotation}
// 		>
// 			<group>
// 				<primitive object={nodes.Hips} />
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Body.geometry}
// 					material={materials.Wolf3D_Body}
// 					skeleton={nodes.Wolf3D_Body.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
// 					material={materials.Wolf3D_Outfit_Bottom}
// 					skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
// 					material={materials.Wolf3D_Outfit_Footwear}
// 					skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Outfit_Top.geometry}
// 					material={materials.Wolf3D_Outfit_Top}
// 					skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					geometry={nodes.Wolf3D_Hair.geometry}
// 					material={materials.Wolf3D_Hair}
// 					skeleton={nodes.Wolf3D_Hair.skeleton}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					name="EyeLeft"
// 					geometry={nodes.EyeLeft.geometry}
// 					material={materials.Wolf3D_Eye}
// 					skeleton={nodes.EyeLeft.skeleton}
// 					morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
// 					morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					name="EyeRight"
// 					geometry={nodes.EyeRight.geometry}
// 					material={materials.Wolf3D_Eye}
// 					skeleton={nodes.EyeRight.skeleton}
// 					morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
// 					morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					name="Wolf3D_Head"
// 					geometry={nodes.Wolf3D_Head.geometry}
// 					material={materials.Wolf3D_Skin}
// 					skeleton={nodes.Wolf3D_Head.skeleton}
// 					morphTargetDictionary={
// 						nodes.Wolf3D_Head.morphTargetDictionary
// 					}
// 					morphTargetInfluences={
// 						nodes.Wolf3D_Head.morphTargetInfluences
// 					}
// 				/>
// 				<skinnedMesh
// 					frustumCulled={false}
// 					name="Wolf3D_Teeth"
// 					geometry={nodes.Wolf3D_Teeth.geometry}
// 					material={materials.Wolf3D_Teeth}
// 					skeleton={nodes.Wolf3D_Teeth.skeleton}
// 					morphTargetDictionary={
// 						nodes.Wolf3D_Teeth.morphTargetDictionary
// 					}
// 					morphTargetInfluences={
// 						nodes.Wolf3D_Teeth.morphTargetInfluences
// 					}
// 				/>
// 			</group>
// 		</group>
// 	);
// }

// export default PlayerModel;
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

/**
 * Silkstone Barbie Player Model
 * Auto-generated using gltfjsx, simplified for standalone use.
 */
export default function PlayerModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/player/silkstone_barbie_doll_rigged.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Auto-play the first available animation (if any)
    const firstAction = actions && Object.values(actions)[0];
    if (firstAction) {
      firstAction.reset().play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.006}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh geometry={nodes.Object_25.geometry} material={materials.Fabric_Black} skeleton={nodes.Object_25.skeleton} />
        <skinnedMesh geometry={nodes.Object_27.geometry} material={materials.Fabric_Black} skeleton={nodes.Object_27.skeleton} />
        <skinnedMesh geometry={nodes.Object_29.geometry} material={materials.Fabric_Black} skeleton={nodes.Object_29.skeleton} />
        <skinnedMesh geometry={nodes.Object_31.geometry} material={materials.Fabric_Black} skeleton={nodes.Object_31.skeleton} />
        <skinnedMesh geometry={nodes.Object_33.geometry} material={materials.Barbie} skeleton={nodes.Object_33.skeleton} />
        <skinnedMesh geometry={nodes.Object_35.geometry} material={materials.Silkie_Art_Boots} skeleton={nodes.Object_35.skeleton} />
        <skinnedMesh geometry={nodes.Object_37.geometry} material={materials.Barbie} skeleton={nodes.Object_37.skeleton} />
        <skinnedMesh geometry={nodes.Object_39.geometry} material={materials.Barbie} skeleton={nodes.Object_39.skeleton} />
        <skinnedMesh geometry={nodes.Object_41.geometry} material={materials.Barbie} skeleton={nodes.Object_41.skeleton} />
        <skinnedMesh geometry={nodes.Object_43.geometry} material={materials.Barbie_Art_Arm} skeleton={nodes.Object_43.skeleton} />
        <skinnedMesh geometry={nodes.Object_45.geometry} material={materials.Barbie_Art_Head} skeleton={nodes.Object_45.skeleton} />
        <skinnedMesh geometry={nodes.Object_47.geometry} material={materials.Barbie} skeleton={nodes.Object_47.skeleton} />
        <skinnedMesh geometry={nodes.Object_49.geometry} material={materials.Barbie} skeleton={nodes.Object_49.skeleton} />
        <skinnedMesh geometry={nodes.Object_51.geometry} material={materials.Barbie} skeleton={nodes.Object_51.skeleton} />
        <skinnedMesh geometry={nodes.Object_53.geometry} material={materials.Barbie} skeleton={nodes.Object_53.skeleton} />
        <skinnedMesh geometry={nodes.Object_55.geometry} material={materials.Barbie} skeleton={nodes.Object_55.skeleton} />
        <skinnedMesh geometry={nodes.Object_57.geometry} material={materials.Hair} skeleton={nodes.Object_57.skeleton} />
      </group>
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/player/silkstone_barbie_doll_rigged.glb");
