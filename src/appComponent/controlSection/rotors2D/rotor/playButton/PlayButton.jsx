import {h} from 'preact';
import {Component} from "preact";
import "./playButton.less";

export default class PlayButton extends Component {
	render() {
		return <button className="playBtn" onClick={() => this.props.onChange(!this.props.isPlaying)}>
			<div className={'playpause ' + (this.props.isPlaying ? 'pause' : 'play')}>
				<span className="left"></span><span className="right"></span>
			</div>
		</button>;
	}
}
