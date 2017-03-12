import { h } from 'preact';
import Rotor2D from './rotors2D/rotors2D.js'
import './rotorsContainer.less';

/**
 * present all dimension controllers
 * @return {object} presentation element
 */
const RotorsContainer = ({}) => (
	<div class="controlChanges">
		<Rotor2D label="xy"/>
		<Rotor2D label="yz"/>
		<Rotor2D label="xz"/>
	</div>
);

export default RotorsContainer;
