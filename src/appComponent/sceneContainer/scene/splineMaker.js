import * as THREE from 'three';

/**
 * it's the way it calculate the points position
 * @param dimensionData data of a dimension
 * @param time changes in a range
 * @return {number} result
 */
const calcDimension = (dimensionData, time) => {
	let value = [0, 0];
	for (let di of dimensionData) {
		const width = parseInt(di.width);
		const start = parseInt(di.start);
		const step = parseInt(di.step);
		value[0] += Math.cos((start + time * step) / 180 * Math.PI) * width;
		value[1] += Math.sin((start + time * step) / 180 * Math.PI) * width;
	}
	return value;
};

const pointsColor=[];
let hasPreviousHSL=false;
const getPointsColor = (vertexCount,hasHSL) => {
	if ((vertexCount != pointsColor.length) || (hasHSL!=hasPreviousHSL)){
		hasPreviousHSL=hasHSL;
		while (pointsColor.length)pointsColor.pop();

		for (let i = 0; i <= vertexCount; i++) {
			pointsColor[i] = new THREE.Color(0xffffff);
			if (hasHSL)pointsColor[i].setHSL(i / vertexCount, 1.0, 0.5);
		}
	}
	return pointsColor;
};

/**
 * rebuild object
 * @param data it's instance of store
 * @return {object} created spline
 */
const MakeSpline = (data) => {
	const {rotorsData, options}=data;
	const spline = new THREE.Geometry();
	const precent = Math.min(options.precent, options.steps);
	let length = precent/options.steps*360 + 1;
	let steps = options.steps || 360;
	let everyStep = Math.round((360 / steps) * 100000) / 100000;
	for (let time = 0; time < length; time += everyStep) {
		const xy = calcDimension(rotorsData.xy, time);
		let x = xy[0];
		let y = xy[1];
		const xz = calcDimension(rotorsData.xz, time);
		x += xz[1];
		let z = xz[0];
		const yz = calcDimension(rotorsData.yz, time);
		y += yz[0];
		z += yz[1];
		const point = new THREE.Vector3(x, y, z);
		spline.vertices.push(point);
	}
	spline.colors = getPointsColor(spline.vertices.length, options.hasHSL);

	const material = new THREE.LineBasicMaterial({
		color: 0xffffff,
		opacity: 1,
		linewidth: 2,
		vertexColors: THREE.VertexColors
	});
	const line = new THREE.Line(spline, material);
	line.scale.x = line.scale.y = line.scale.z = 1;
	line.position.x = 0;
	line.position.y = 0;
	line.position.z = 0;

	return line;
};

export default MakeSpline;
