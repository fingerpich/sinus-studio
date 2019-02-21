import {Component, h} from 'preact';
import "./rotor.less";
import Stepper from './stepper/stepper.jsx';
import timer from '../../../syncUpdates.js';

/**
 * Rotor Element
 * @return {object} presentation element
 */
class Rotor extends Component {
	componentDidMount() {
		// this.subscription = timer.subscribe(() => {
		// 	if (this.props.isPlaying) {
		// 		this.props.onChange({name: 'start', value: this.props.start + 1});
		// 	}
		// });
	}
	componentWillUnmount() {
		this.subscription.unsubscribe();
	}

	render () {
		return <div className="dimensionInputs">
			<button className="removeBtn" onClick={this.props.onRemove}>&times;</button>

			<Stepper name="width" value={this.props.width} onChange={(value) => this.props.onChange({name: 'width', value})}/>
			<Stepper name="step" value={this.props.step} onChange={(value) => this.props.onChange({name: 'step', value})}/>
			<Stepper name="start" value={this.props.start} onChange={(value) => this.props.onChange({name: 'start', value})}/>

			<button className="playBtn" onClick={() => this.props.onChange({name: 'isPlaying', value: !this.props.isPlaying})}>
				<div className={'playpause ' + (this.props.isPlaying ? 'pause' : 'play')}>
					<span className="left"></span><span className="right"></span>
				</div>
			</button>
		</div>;
	}
}

export default Rotor;
