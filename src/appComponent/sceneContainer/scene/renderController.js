import * as THREE from 'three';
import * as threeOrbitControlsLib from 'three-orbit-controls';
const threeOrbitControls = threeOrbitControlsLib.default(THREE);
import MakeSpline from "./splineMaker";

/**
 * Render Controller
 */
class RenderControllerClass {

	/**
	 * initialize using three js
	 * @param {object} cameraControlAreaElement its the element which camera could control in it
	 * @param {number} width canvas width
	 * @param {number} height canvas height
	 */
	setup(cameraControlAreaElement, width, height) {
		this.renderer = new THREE.WebGLRenderer({preserveDrawingBuffer : true});
		this.renderer.setSize(width, height);
		this.renderer.setClearColor(0x222222, 1);

		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color( 0x222222 );

		this.renderer.clear();

		this.addCamera(cameraControlAreaElement);
		this.addLights();
		this.buildAxes(1000);

		this.repeatRendering();

		return this.renderer.domElement;
	}

	captureImage(){
		this.renderer.render(this.scene, this.camera);
		return this.renderer.domElement.toDataURL("image/png", 1);
	}

	/**
	 * Make lights
	 */
	addLights() {
		// let light = new THREE.PointLight(0xFF0000, 1, 100);
		// light.position.set(10, 0, 10);
		// this.scene.add(light);
        //
        // light = new THREE.PointLight(0xFF0000, 1, 50);
        // light.position.set(-20, 15, 10);
        // this.scene.add(light);
	}

	/**
	 * add 3 Axis
	 * @param length determine 3 axis length
	 */
	buildAxes(length) {
		// const axes = new THREE.AxisHelper( length );
		// this.scene.add( axes );
		const axes = new THREE.Object3D();
		this.axes = axes;
		const color = 0x2c2c2c;
		axes.add(this.buildAxis(new THREE.Vector3(-length, 0, 0), new THREE.Vector3(length, 0, 0), color, true)); // +X
		axes.add(this.buildAxis(new THREE.Vector3(0, -length, 0), new THREE.Vector3(0, length, 0), color, true)); // +Y
		axes.add(this.buildAxis(new THREE.Vector3(0, 0, -length), new THREE.Vector3(0, 0, length), color, true)); // +Z

		this.scene.add(axes);
	}

	buildAxis(src, dst, colorHex, dashed) {
		const geom = new THREE.Geometry();

		let mat;
		if (dashed) {
			mat = new THREE.LineDashedMaterial({linewidth: 1, color: colorHex, dashSize: 1, gapSize: 1});
		} else {
			mat = new THREE.LineBasicMaterial({linewidth: 1, color: colorHex});
		}

		geom.vertices.push(src.clone());
		geom.vertices.push(dst.clone());
		geom.computeLineDistances(); // This one is SUPER important, otherwise dashed lines will appear as simple plain lines

		return new THREE.Line(geom, mat, THREE.LinePieces);
	}

	/**
	 * add camera
	 * @param {object} cameraControlAreaElement its the element which camera could control in it
	 */
	addCamera(cameraControlAreaElement) {
		this.camera = new THREE.PerspectiveCamera(
			35,         // FOV
			800 / 640,  // Aspect
			0.1,        // Near
			10000       // Far
		);
		this.camera.position.set(0, 0, 0);
		this.camera.position.z = 100;
		this.camera.lookAt(this.scene.position);
		const controls = new threeOrbitControls(this.camera, cameraControlAreaElement);
		const originUpdate = controls.update;
		const thisComponent = this;
		controls.update = function () {//when camera state changes
			originUpdate();
			thisComponent.onCameraChange();
		};
	}

	/**
	 * it just renders what is in the scene and won't create anything
	 */
	rerender() {
		this.renderer.render(this.scene, this.camera);
	}

	/**
	 * it will call back on camera changes
	 */
	onCameraChange() {
		this.cameraHasChanged = true;
		return true;
	}

	/**
	 * it will call back on control changes
	 */
	onStateChange(newState) {
		this.stateHasChanged = true;
		// if(this.curState) {
		// 	for (let dimension in newState.rotorsData) {
		// 		for (let i of newState.rotorsData[dimension]) {
		// 			const rotorData = newState.rotorsData[dimension][i];
		// 			if (rotorData.isPlaying) {
		// 				const prevRotorsData = this.curState.rotorsData;
		// 				if (prevRotorsData &&
		// 					prevRotorsData[dimension] &&
		// 					prevRotorsData[dimension][i] &&
		// 					prevRotorsData[dimension][i].start === rotorData.start) {
		// 					this.stateHasChanged = false;
		// 				}
		// 			}
		// 		}
		// 	}
		// }
		if (this.stateHasChanged) {
			this.curState = newState;
		}
		this.repeatRendering();
	}

	/**
	 * rebuild spline
	 */
	rebuildSpline(data) {
		if (data) {
			this.axes.visible = data.options.showAxes;
			if (this.spline) this.scene.remove(this.spline);
			this.spline = MakeSpline(data);
			this.scene.add(this.spline);
		}
	}

	/**
	 * control the rendering
	 */
	repeatRendering() {
		if (this.curState) {
			if (this.stateHasChanged) {
				this.rebuildSpline(this.curState);
				requestAnimationFrame(() => {this.rerender();});
				this.stateHasChanged=false;
			}
			if (this.cameraHasChanged) {
				requestAnimationFrame(() => {this.rerender();});
				this.cameraHasChanged = false;
			}
		}
		// setTimeout( () => {this.repeatRendering();}, 5);
	}
}

export const RenderController = new RenderControllerClass();
