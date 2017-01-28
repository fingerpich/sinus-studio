import { h, Component } from 'preact';
// import * as THREE from 'three/build/three.modules';

class Scene extends Component {
	shouldComponentUpdate() {
		return false;
	}

	componentWillReceiveProps() {
		if (this.base) this.update();
	}

	//@debounce
	update() {
		let { zoom, rotateX, rotateY } = this.props;
		this.object.rotation.y = rotateX * Math.PI;
		this.object.rotation.z = - rotateY * Math.PI;
		this.scene.scale.addScalar( zoom - this.scene.scale.x );
		this.rerender();
	}

	componentDidMount() {
		setTimeout( () => this.setup(), 1);
	}

	setup() {
		let { width, height } = this.base.getBoundingClientRect();
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(width*2, height*2);
		this.base.appendChild(this.renderer.domElement);

		this.scene = new THREE.Scene();

		this.camera = new THREE.PerspectiveCamera(
			35,         // FOV
			800 / 640,  // Aspect
			0.1,        // Near
			10000       // Far
		);
		this.camera.position.set(-15, 10, 15);
		this.camera.lookAt(this.scene.position);

		this.makeObject();
		this.renderObject();
		this.renderLighting();
		this.rerender();
	}

	makeObject() {
		var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		this.cube = new THREE.Mesh( geometry, material );
		this.scene.add( cube );
		this.camera.position.z = 5;
	}
	rerender() {
		this.renderer.render(this.scene, this.camera);
	}

	renderObject() {
		requestAnimationFrame( this.renderObject );

		this.cube.rotation.x += 0.1;
		this.cube.rotation.y += 0.1;

		this.rerender();
	}

	renderLighting() {
		let light = new THREE.PointLight(0xFF0000, 1, 100);
		light.position.set( 10, 0, 10 );
		this.scene.add(light);

		light = new THREE.PointLight(0xFF0000, 1, 50);
		light.position.set( -20, 15, 10 );
		this.scene.add(light);

		this.renderer.setClearColor(0x222222, 1);
	}

	render() {
		return <div class="scene" />;
	}
}

export default Scene;
