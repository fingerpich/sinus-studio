import { h, render, Component  } from 'preact';
import "./stepper.less";
/**
 * Stepper Element
 * @return {object} presentation element
 */

class Stepper extends Component {
	constructor() {
		super();
		this.state.count=0;
	}

	componentWillReceiveProps() {
		this.state.count = this.props.value||0;
	}
	increase() {
		this.setState({count:this.state.count+1});
		this.onChange();
	}
	decrease() {
		this.setState({count:this.state.count-1});
		this.onChange();
	}
	onInputChange(e){
		this.setState({count:e.target.value});
		this.onChange();
	}
	onChange(){
		if(this.props.onChange) {
			this.props.onChange(this.props.name,this.state.count);
		}
	}

	render(props, state) {
		return <div class="stepper">
			<input class="number" type="number" value={props.value||this.state.count} onInput={this.onInputChange.bind(this)}/>
			<button class="minus" onClick={this.decrease.bind(this)}>-</button>
			<button class="plus" onClick={this.increase.bind(this)}>+</button>

		</div>;
	}
}
export default Stepper;
