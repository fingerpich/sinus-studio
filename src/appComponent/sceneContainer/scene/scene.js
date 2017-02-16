import { h, Component } from 'preact';
import * as THREE from 'three';
import * as threeOrbitControlsLib from 'three-orbit-controls'
const threeOrbitControls= threeOrbitControlsLib.default(THREE);
/**
 * @extends {Component}
 * illustrate data
 */
class Scene extends Component {
	/**
	 * @override
	 * shouldComponentUpdate determine when component render again
	 * there we need to run this component just one time
	 */
	shouldComponentUpdate() {
		return false;
	}

	/**
	 * @override
	 * componentWillReceiveProps calls on props changing
	 */
	componentWillReceiveProps() {
		this.rerender();
	}

	/**
	 * it is invoked immediately after a component is mounted.
	 * and start initializing scene and listening to store changes
	 */
	componentDidMount() {
		const {store} = this.context;
		this.unsubscribe = store.subscribe(()=>{
			this.renderObject(store.getState());
			this.rerender();
		});

		setTimeout( () => {
			this.setup();

			const state=store.getState();
			if(state) {
				this.renderObject(state);
				this.rerender();
			}
		}, 1);

	}

	/**
     * Initialize Scene
	 */
	setup() {
		let { width, height } = this.base.getBoundingClientRect();
		this.renderer = new THREE.WebGLRenderer();
		const minWH=Math.min(Math.max(width,300),Math.max(height,300));
		this.renderer.setSize(minWH, minWH);
		this.base.appendChild(this.renderer.domElement);

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
		const controls = new threeOrbitControls(this.camera,document.getElementsByClassName("scene")[0]);
		const originUpdate=controls.update;
		const thisComponent=this;
		controls.update=function(){
			originUpdate();
			thisComponent.rerender();
		};

		this.renderObject();
		this.renderLighting();
		this.rerender();
	}

	/**
	 * it just renders what is in the scene and won't create anything
	 */
	rerender() {
		this.renderer.render(this.scene, this.camera);
	}

	/**
	 * it's the way it calculate the points position
	 * @param dimensionData data of a dimension
	 * @param time changes in a range
	 */
	calcDimension(dimensionData,time) {
		let value = 1;
		for (let di of dimensionData) {
			const width=parseInt(di.width);
			const start=parseInt(di.start);
			const step=parseInt(di.step);
			value *= Math.sin((start + time * step) / 180 * Math.PI) * width;
		}
		return value;
	}
	/**
	 * rebuild object
	 * @param data it's instance of store
	 */
	renderObject(data) {
		if(data) {
			const {dimensionsReducer}=data;
			if (this.spline) this.scene.remove(this.spline);
			const spline = new THREE.Geometry();

			const pointsColor=[];
			for ( let i = 0; i <= 360; i ++ ) {
				pointsColor[ i ] = new THREE.Color( 0xffffff );
				// pointsColor[ i ].setHSL( i / 360, 1.0, 0.5 );
			}

			for (let time = 0; time <= 360; time++) {
				const x = this.calcDimension(dimensionsReducer.x,time);
				const y = this.calcDimension(dimensionsReducer.y,time);
				const z = this.calcDimension(dimensionsReducer.z,time);
				const point = new THREE.Vector3(x, y, z);
				spline.vertices.push(point);
			}
			spline.colors = pointsColor;


			const material = new THREE.LineBasicMaterial( { color: 0xffffff, opacity: 1, linewidth: 3, vertexColors: THREE.VertexColors } );
			const line = new THREE.Line(spline, material );
			line.scale.x = line.scale.y = line.scale.z =  1;
			line.position.x = 0;
			line.position.y = 0;
			line.position.z = 0;

			this.spline=line;
			this.scene.add(this.spline);
			this.rerender();
		}
		// requestAnimationFrame( thisComponent.renderObject );
	}

	/**
	 * Make lights
	 */
	renderLighting() {
		let light = new THREE.PointLight(0xFF0000, 1, 100);
		light.position.set( 10, 0, 10 );
		this.scene.add(light);

		light = new THREE.PointLight(0xFF0000, 1, 50);
		light.position.set( -20, 15, 10 );
		this.scene.add(light);

		this.renderer.setClearColor(0x222222, 1);
	}

	/**
	 * render this component
	 */
	render() {
		return <div class="scene" />;
	}
}

export default Scene;
