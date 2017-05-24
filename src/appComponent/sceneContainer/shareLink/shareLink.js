import {h, render, Component} from 'preact';
import "./shareLink.less";

/**
 * Share Link element shows the link in another section
 * @example
 * <ShareLink onActivate={()=>{}}/>
 */
class ShareLink extends Component {

	/**
	 * constructor
	 */
	constructor() {
		super();
		this.state.state='close';
	}

	/**
	 * componentDidMount
	 */
	componentDidMount() {
		this.highlightAll();
		window.onclick =(e)=>{
			if(this.state.state=='open')
				this.close();
		}
	}

	boxClick(e) {
		e.stopPropagation();
	}
	/**
	 * highlight input
	 */
	highlightAll() {
		this.shareInput.focus();
		setTimeout(()=>{
			this.shareInput.setSelectionRange(0, this.shareInput.value.length);
			this.shareInput.select();
		},300)
	}
	/**
	 * close the share link win
	 */
	close(){
		this.setState({state:'close'});
	}

	link="";
	/**
	 * open and get the input data
	 */
	open(e) {
		if (this.props.getLink) {
			this.link = this.props.getLink();
		}
		this.setState({state:'open'});
		e.stopPropagation();
	}

	/**
	 * goClick function
	 */
	goClick() {
		this.props.goClick && this.props.goClick();
	}

	/**
	 * downloadImage function
	 */
	downloadImage() {
		let link = this.props.getLink();
		this.downloadLink.href = this.props.getImageData();
		this.downloadLink.download = link.split("?")[1];
	}

	/**
	 * render function
	 * @param {object} props
	 * @param {object} state
	 */
	render(props, state) {
		return <div class="shareSection">
			<a onClick={ this.open.bind(this) } class="shareButton">share</a>
			<div class={"shareBox "+(this.state.state == 'open'?"" : "hide")} onClick={this.boxClick.bind(this)}>
				<h6>share a link to this</h6>
				<div class="shareForm">
					<input type="text" ref={(input) => { this.shareInput = input; }} className="shareLink"
						   onClick={this.highlightAll.bind(this)}
						   value={this.link}/>
					<button class="goButton" onClick={this.goClick.bind(this)}>Go</button>
				</div>
				<div>
					<a href="download image" ref={(input) => { this.downloadLink = input; }} download="image.png" class="downloadImage" onClick={this.downloadImage.bind(this)}>
						Download As Image
					</a>
				</div>
			</div>
		</div>
	}
}
export default ShareLink;
