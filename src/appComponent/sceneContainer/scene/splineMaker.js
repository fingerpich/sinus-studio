import * as THREE from 'three';

/**
 * it's the way it calculate the points position
 * @param dimensionData data of a dimension
 * @param time changes in a range
 */
const calcDimension=(dimensionData,time) => {
	let value = 1;
	for (let di of dimensionData) {
		const width=parseInt(di.width);
		const start=parseInt(di.start);
		const step=parseInt(di.step);
		value *= Math.sin((start + time * step) / 180 * Math.PI) * width;
	}
	return value;
}
/**
 * rebuild object
 * @param dimensionsData it's instance of store
 */
const MakeSpline = (dimensionsData) => {

	const spline = new THREE.Geometry();

	const pointsColor = [];
	for (let i = 0; i <= 360; i++) {
		pointsColor[i] = new THREE.Color(0xffffff);
		// pointsColor[ i ].setHSL( i / 360, 1.0, 0.5 );
	}

	for (let time = 0; time <= 360; time++) {
		const x = calcDimension(dimensionsData.x, time);
		const y = calcDimension(dimensionsData.y, time);
		const z = calcDimension(dimensionsData.z, time);
		const point = new THREE.Vector3(x, y, z);
		spline.vertices.push(point);
	}
	spline.colors = pointsColor;


	const material = new THREE.LineBasicMaterial({
		color: 0xffffff,
		opacity: 1,
		linewidth: 3,
		vertexColors: THREE.VertexColors
	});
	const line = new THREE.Line(spline, material);
	line.scale.x = line.scale.y = line.scale.z = 1;
	line.position.x = 0;
	line.position.y = 0;
	line.position.z = 0;

	return line;
}

export default MakeSpline;