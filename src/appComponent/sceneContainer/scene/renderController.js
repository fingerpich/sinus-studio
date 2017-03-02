import * as THREE from 'three';
import * as threeOrbitControlsLib from 'three-orbit-controls'
const threeOrbitControls= threeOrbitControlsLib.default(THREE);
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
	setup(cameraControlAreaElement,width,height){
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(width,height);

		this.scene = new THREE.Scene();

		this.addCamera(cameraControlAreaElement);
		this.addLights();
		this.buildAxes(1000);

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
	 * add 3 Axis
	 * @param length determine 3 axis length
	 */
	buildAxes(length) {
		// const axes = new THREE.AxisHelper( length );
		// this.scene.add( axes );
		const axes = new THREE.Object3D();
		this.axes=axes;
		const color=0x2c2c2c;
		axes.add( this.buildAxis( new THREE.Vector3( -length, 0, 0 ), new THREE.Vector3( length, 0, 0 ), color, true ) ); // +X
		axes.add( this.buildAxis( new THREE.Vector3( 0, -length, 0 ), new THREE.Vector3( 0, length, 0 ), color, true ) ); // +Y
		axes.add( this.buildAxis( new THREE.Vector3( 0, 0, -length ), new THREE.Vector3( 0, 0, length ), color, true ) ); // +Z

		this.scene.add(axes);
	}
	buildAxis( src, dst, colorHex, dashed ) {
		var geom = new THREE.Geometry(),
			mat;

		if(dashed) {
			mat = new THREE.LineDashedMaterial({ linewidth: 1, color: colorHex, dashSize: 1, gapSize: 1 });
		} else {
			mat = new THREE.LineBasicMaterial({ linewidth: 1, color: colorHex });
		}

		geom.vertices.push( src.clone() );
		geom.vertices.push( dst.clone() );
		geom.computeLineDistances(); // This one is SUPER important, otherwise dashed lines will appear as simple plain lines

		return new THREE.Line( geom, mat, THREE.LinePieces );
	}

	/**
	 * add camera
	 * @param {object} cameraControlAreaElement its the element which camera could control in it
     */
	addCamera(cameraControlAreaElement) {
		this.camera =new THREE.PerspectiveCamera(
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
		if (this.curState) this.curState.cameraChanged = true;
		return true;
	}
	/**
	 * it will call back on control changes
	 */
	onStateChange(newState) {
		this.curState = newState;
	}

	/**
	 * rebuild spline
	 */
	rebuildSpline(data) {
		if (data) {
			this.axes.visible=data.optionsReducer.showAxes;
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
