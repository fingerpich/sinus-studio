import {h, render, Component} from 'preact';
import "./stepper.less";
/**
 * Stepper Element used for change numbers in all device easily
 * @example
 * <Stepper/>
 */
class Stepper extends Component {
	/**
	 * we don't need to rerender all over stepper when its property changes
	 * @param {object} props
	 */
	shouldComponentUpdate(props) {
		if (!this.textInput) return true;//it needs to render the element again
		if(props.value != this.value){
			this.value = props.value;
			this.textInput.value = this.value;
		}
		return false;
	}

	/**
	 * set value on and text value from props
	 */
	componentWillMount() {
		this.value = this.props.value || 0;
		this.textInput.value = this.value;
	}

	value = 0;

	/**
	 * increase the value of stepper
	 */
	increase() {
		this.value++;
		this.onChange();
	}

	/**
	 * decrease the value of stepper
	 */
	decrease() {
		this.value--;
		this.onChange();
	}


	/**
	 * change value on text changed
	 */
	onInputChange(e) {
		this.value = this.textInput.value;
		this.onChange();
	}


	/**
	 * call event for parents
	 */
	onChange() {
		if (this.textInput) {
			this.textInput.value = this.value;
			if (this.props.onChange) {
				this.props.onChange(this.props.name, this.value);
			}
		}
	}


	/**
	 * render function
	 * @param {object} props
	 * @param {object} state
	 */
	render(props, state) {
		return <div class="stepper">
			<input class="number" type="number" ref={(input) => {
				this.textInput = input;
			}} onInput={this.onInputChange.bind(this)}/>
			<button class="minus" onClick={this.decrease.bind(this)}>-</button>
			<button class="plus" onClick={this.increase.bind(this)}>+</button>
		</div>;
	}
}
export default Stepper;


//TODO: write on holding increase or decrease button condition
//TODO: on holding key up prevent bubling and run window key down because ThreeOrbit add listener to window
