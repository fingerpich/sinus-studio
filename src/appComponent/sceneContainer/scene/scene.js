import { h, Component } from 'preact';
import {RenderController} from  './renderController.js';
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
	}

	/**
	 * it is invoked immediately after a component is mounted.
	 * and start initializing scene and listening to store changes
	 */
	componentDidMount() {
		const {store} = this.context;
		this.unsubscribe = store.subscribe(()=>{
			RenderController.onStateChange(store.getState());
		});

		setTimeout(() => {
			this.setup();
			RenderController.onStateChange(store.getState());
		}, 1);
	}

	/**
     * Initialize Scene
	 */
	setup() {
		let {width, height} = this.base.getBoundingClientRect();

		const MIN_SIZE = 300;
		const MARGIN_IN_SMALL_SIZE = 10 / 100;
		const innerWidth = window.innerWidth - window.innerWidth * MARGIN_IN_SMALL_SIZE;
		const innerHeight = window.innerHeight - window.innerHeight * MARGIN_IN_SMALL_SIZE;
		const minWH = Math.min(Math.max(width, Math.min(MIN_SIZE, innerWidth)), Math.max(height, Math.min(MIN_SIZE, innerHeight)))-5;
		const renderCanvas = RenderController.setup(document.getElementsByClassName("scene")[0],minWH, minWH);
		this.base.appendChild(renderCanvas);
	}

	/**
	 * render this component
	 */
	render() {
		return <div class="scene" />;
	}
}

export default Scene;
