import React, { useEffect, useRef,useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { Form } from "react-bootstrap";
function ThreeVisualisation() {
  const [first, setfirst] = useState(null)
  const mountRef = useRef(null);
  let loading = true;
  let status = false;
  const info = {
    turbine1: {
      fan: "ok",
      generator: "not",
      motor1: "not",
      motor2: "not",
      support: "ok",
    },
    turbine2: {
      fan: "not",
      generator: "ok",
      motor1: "ok",
      motor2: "ok",
      support: "ok",
    },
    turbine3: {
      fan: "ok",
      generator: "not",
      motor1: "ok",
      motor2: "not",
      support: "ok",
    },
  };
  useEffect(() => {
    console.log(info);
    const innerThreeRef = mountRef.current;
    const scene = new THREE.Scene();
    let mixer;
    let clipAction;
    let model;
    let generator;
    const clock = new THREE.Clock();
    scene.background = new THREE.Color(0x0d283b);
    const container = document.getElementById("three");
    const renderer = new THREE.WebGL1Renderer({ antialias: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);
    innerThreeRef.appendChild(renderer.domElement);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1
    );
    camera.lookAt(0, 0, 0);
    camera.position.y = 1;
    camera.position.z = 5;

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);
    var ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.update();
    const fbxLoader = new FBXLoader();

    // fbxLoader.load("Model/windmill2/winmillnew.fbx", (object) => {
    //   object.scale.set(0.0003, 0.0003, 0.0003);
    //   scene.add(object);
    //   mixer = new THREE.AnimationMixer(object);
    //   clipAction = mixer.clipAction(object.animations[0]);
    // console.log(object)
    // console.log(clipAction)
    // clipAction.play()
    // });

    const loader = new GLTFLoader();
    loader.load("Model/windmill2/windmill3.glb", function (gltf) {
      gltf.scene.name = "Windturbin";
      gltf.scene.scale.set(0.4, 0.4, 0.4);
      gltf.scene.position.set(0, -3, 0);
      gltf.scene.rotation.y = -Math.PI / 1.5;
      gltf.scene.rotation.x = Math.PI / 6;
      model = gltf.scene;
      scene.add(gltf.scene);
      if (scene.children) {
        loading = false;
        console.log(loading);
      }
      mixer = new THREE.AnimationMixer(gltf.scene);
      clipAction = mixer.clipAction(gltf.animations[0]);
      clipAction.play();
    });
    loader.load("Model/windmill2/Turbaine.glb", function (gltf) {
      gltf.scene.name = "turbine";
      generator = gltf.scene;
      gltf.scene.visible = false;
      // gltf.scene.scale.set(1.1, 1.1, 1.1);
      gltf.scene.position.set(0.8, 0.6, 1);
      gltf.scene.rotation.y = -Math.PI / 1.5;
      gltf.scene.rotation.x = Math.PI / 6;
      scene.add(gltf.scene);
      if (scene.children) {
        loading = false;
        console.log(loading);
      }
    });
    function animate() {
      requestAnimationFrame(animate);
      var delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      // required if controls.enableDamping or controls.autoRotate are set to true
      controls.update();
      renderer.render(scene, camera);
    }
    const raycaster = new THREE.Raycaster();
    document.getElementById("visual").addEventListener("click", changeDoor);
    function changeDoor(event) {
      const mouse3D = new THREE.Vector3(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
      raycaster.setFromCamera(mouse3D, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      if (intersects.length > 0) {
        let object = intersects[0].object;
        while (
          !(object instanceof THREE.Scene) &&
          !object.name.includes("Windturbin") &&
          object.name.includes("body")
        ) {
          object = object.parent;
          updateStatus();
        }
      }
    }
    async function updateStatus() {
      await gsap.to(model.scale, { x: 3, z: 3, duration: 10, opacity: 0 });
      changeAnimation();
    }
    async function changeAnimation() {
      model.visible = false;
      generator.visible = true;
    }
    animate();
  }, [status,first]);

  return (
    <>
      {/* {console.log(loading)}
      {loading == true && (  <div className="spinner-grow" role="status">
 
 </div>)} */}
      <div id="visual" ref={mountRef}>
       <Form>
       <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => {
                  setfirst(e.target.value);
                  console.log(e.target.value)
                  window.localStorage.setItem("state", e.target.value);
                }}
              >
                <option selected value={0}>Select turbine</option>
                <option value={1}>Turbine 1</option>
                <option value={2}>Turbine 2</option>
                <option value={3}>Turbine 3</option>
               
              </Form.Select>
       </Form>
      </div>
      ;
    </>
  );
}

export default ThreeVisualisation;
