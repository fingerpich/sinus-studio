import {h, render, Component} from 'preact';
import "./shareLink.less";
/**
 * Share Link element shows the link in another section
 * @example
 * <ShareLink onActivate={()=>{}}/>
 */
class ShareLink extends Component {

	link="";

	constructor() {
		super();
		this.state.state='close';
	}

	/**
	 * close the share link win
	 */
	close(){
		this.setState({state:'close'});
	}

	/**
	 * open and get the input data
	 */
	open(){
		if (this.props.getLink) {
			this.link = this.props.getLink();
		}
		this.setState({state:'open'});
	}

	/**
	 * toggle share box
	 */
	toggle(){
		if(this.state.state=='open'){
			this.close();
		}
		else this.open();
	}

	/**
	 * render function
	 * @param {object} props
	 * @param {object} state
	 */
	render(props, state) {
		return <div class="shareSection">
			<a onClick={ this.toggle() } class="shareButton">Share Link</a>
			<div class={"shareBox "+(this.state.state=='open'?"":"hide")}>
				<input type="text" className="shareLink" onBlur={this.close()} value={this.link}/>
			</div>
		</div>
	}
}
export default ShareLink;
