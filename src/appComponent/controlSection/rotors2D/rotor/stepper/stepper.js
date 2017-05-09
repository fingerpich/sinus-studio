import {h, render, Component} from 'preact';
import "./stepper.less";
/**
 * Stepper Element used for change numbers in all device easily
 * @example
 * <Stepper name="propName" onchange={(name,value)=>{}}/>
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
	delay = 150;
	timeoutObject = 0;

	/**
	 * increase the value of stepper
	 */
	increase() {
		this.value++;
		this.onChange();
	}
	/**
	 * start holding increase button
	 */
	holdUp() {
		this.timeoutObject=setTimeout(() => {
			this.increase();
			this.holdUp();
		},this.delay);
	}
	/**
	 * leave increase button
	 */
	leaveUp() {
		clearTimeout(this.timeoutObject);
	}

	/**
	 * decrease the value of stepper
	 */
	decrease() {
		this.value--;
		this.onChange();
	}
	/**
	 * start holding decrease button
	 */
	holdDown() {
		this.timeoutObject=setTimeout(() => {
				this.decrease();
				this.holdDown();
			},this.delay);
	}
	/**
	 * leave decrease buton
	 */
	leaveDown() {
		clearTimeout(this.timeoutObject);
	}

	/**
	 * change value on text changed
	 */
	onInputChange(e) {
		this.value = parseInt(this.textInput.value || 0) || 0;
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
			<button class="minus" onMouseDown={this.holdDown.bind(this)} onMouseUp={this.leaveDown.bind(this)} onClick={this.decrease.bind(this)}>-</button>
			<button class="plus" onMouseDown={this.holdUp.bind(this)} onMouseUp={this.leaveUp.bind(this)} onClick={this.increase.bind(this)}>+</button>
		</div>;
	}
}
export default Stepper;

//TODO: on holding key up prevent bubling and run window key down because ThreeOrbit add listener to window
