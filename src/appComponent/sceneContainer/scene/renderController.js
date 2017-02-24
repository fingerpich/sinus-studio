import * as THREE from 'three';
import * as threeOrbitControlsLib from 'three-orbit-controls'
const threeOrbitControls= threeOrbitControlsLib.default(THREE);
import MakeSpline from "./splineMaker";

class RenderControllerClass {
	setup(cameraControlAreaElement,width,height){
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(width,height);

		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(
			35,         // FOV
			800 / 640,  // Aspect
			0.1,        // Near
			10000       // Far
		);
		this.camera.position.set(0, 0, 0);
		this.camera.position.z = 20;
		this.camera.lookAt(this.scene.position);
		const controls = new threeOrbitControls(this.camera,cameraControlAreaElement);
		const originUpdate=controls.update;
		const thisComponent=this;
		controls.update=function(){//when camera state changes
			originUpdate();
			thisComponent.onCameraChange();
		};

		this.addLights();

		this.repeatRendering();

		return this.renderer.domElement;
	}
	/**
	 * Make lights
	 */
	addLights() {
		let light = new THREE.PointLight(0xFF0000, 1, 100);
		light.position.set( 10, 0, 10 );
		this.scene.add(light);

		light = new THREE.PointLight(0xFF0000, 1, 50);
		light.position.set( -20, 15, 10 );
		this.scene.add(light);

		this.renderer.setClearColor(0x222222, 1);
	}

	/**
	 * it just renders what is in the scene and won't create anything
	 */
	rerender() {
		this.renderer.render(this.scene, this.camera);
	}

	onCameraChange() {
		if (this.curState) this.curState.cameraChanged = true;
		return true;
	}
	onStateChange(newState) {
		this.curState = newState;
	}

	rebuildSpline(data) {
		if (data) {
			const {dimensionsReducer}=data;
			if (this.spline) this.scene.remove(this.spline);
			this.spline = MakeSpline(dimensionsReducer);
			this.scene.add(this.spline);
		}
	}

	repeatRendering() {
		if (this.curState) {
			if (!this.curState.hasRendered) {
				this.rebuildSpline(this.curState);
				this.rerender();
				this.curState.hasRendered = true;
			}
			if (this.curState.cameraChanged) {
				this.rerender();
				this.curState.cameraChanged = false;
			}
		}
		const thisObj=this;
		requestAnimationFrame(function(){
			thisObj.repeatRendering();
		});
	}
}

export const RenderController = new RenderControllerClass();
