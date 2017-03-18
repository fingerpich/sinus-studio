import { h, render, Component  } from 'preact';
import "./stepper.less";
/**
 * Stepper Element
 * @return {object} presentation element
 */

class Stepper extends Component {
	constructor() {
		super();
	}
	shouldComponentUpdate(data){
		if(data.value!=this.value){
			this.value=data.value;
			this.textInput.value=this.value;
		}
		return false;
	}
	componentWillMount(){
		this.value=this.props.value||0;
		this.textInput.value=this.value;
	}
	value=0;
	increase() {
		this.value++;
		this.onChange();
	}
	decrease() {
		this.value--;
		this.onChange();
	}
	onInputChange(e){
		this.value=this.textInput.value;
		this.onChange();
	}
	onChange(){
		this.textInput.value=this.value;
		if(this.props.onChange) {
			this.props.onChange(this.props.name,this.value);
		}
	}

	render(props, state) {
		return <div class="stepper">
			<input class="number" type="number" ref={(input) => { this.textInput = input; }} onInput={this.onInputChange.bind(this)}/>
			<button class="minus" onClick={this.decrease.bind(this)}>-</button>
			<button class="plus" onClick={this.increase.bind(this)}>+</button>
		</div>;
	}
}
export default Stepper;
