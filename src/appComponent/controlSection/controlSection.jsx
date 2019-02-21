import {h} from 'preact';
import Rotor2D from './rotors2D/rotors2D.js';
import DrawSettings from './drawSettings/drawSettings.js';
import './controlSection.less';

/**
 * present control section
 */
const ControlsSectionElement = () => (
	<div class="controlSection">
		<div class="controlChanges">
			<Rotor2D label="xy"/>
			<Rotor2D label="yz"/>
			<Rotor2D label="xz"/>
		</div>
		<DrawSettings/>
	</div>
);

export default ControlsSectionElement;
