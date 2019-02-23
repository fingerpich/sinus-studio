import {Component, h} from 'preact';
import "./rotor.less";
import Stepper from './stepper/stepper.jsx';
import PlayButton from './playButton/PlayButton.jsx';
/**
 * Rotor Element
 * @return {object} presentation element
 */
class Rotor extends Component {
	render () {
		return <div className="dimensionInputs">
			<button className="removeBtn" onClick={this.props.onRemove}>&times;</button>

			<Stepper name="width" value={this.props.width} onChange={(value) => this.props.onChange({name: 'width', value})}/>
			<Stepper name="step" value={this.props.step} onChange={(value) => this.props.onChange({name: 'step', value})}/>
			<Stepper name="start" value={this.props.start} onChange={(value) => this.props.onChange({name: 'start', value})}/>

			<PlayButton isPlaying={this.props.isPlaying} onChange={(value) => this.props.onChange({name: 'isPlaying', value})}/>
		</div>;
	}
}

export default Rotor;
