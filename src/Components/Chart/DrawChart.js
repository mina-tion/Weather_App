export const drawChart = (color, color2, data, className) => {
	if (!data) {
		return;
	}
	let canvasRef = document.querySelector(`.${className}`);
	let ctx = canvasRef.getContext('2d');

	let dataMin = Math.min.apply(null, data);
	let dataMax = Math.max.apply(null, data);

	ctx.beginPath();
	ctx.moveTo(canvasRef.width, canvasRef.height);
	ctx.lineTo(0, canvasRef.height);

	let fillGradient = ctx.createLinearGradient(0, 0, 0, canvasRef.height);
	fillGradient.addColorStop(0, color);
	fillGradient.addColorStop(1, color2);
	ctx.fillStyle = fillGradient;

	let yStart =
		(1 - (data[0] - dataMin) / (dataMax - dataMin)) * canvasRef.height;
	ctx.lineTo(0, yStart);

	let transformXY = function (i) {
		return [
			(canvasRef.width * i) / (data.length - 1),
			(0.85 - ((data[i] - dataMin) / (dataMax - dataMin)) * 0.7) *
				canvasRef.height,
		];
	};

	let [x0, y0] = transformXY(0);
	ctx.lineTo(x0, y0);

	let x1, x2, y1, y2;
	for (var i = 1; i < data.length - 2; i++) {
		[x1, y1] = transformXY(i);
		[x2, y2] = transformXY(i + 1);
		let xc = (x1 + x2) / 2;
		let yc = (y1 + y2) / 2;
		ctx.quadraticCurveTo(x1, y1, xc, yc);
	}
	let [xl, yl] = transformXY(i + 1);
	ctx.quadraticCurveTo(x2, y2, xl, yl);
	ctx.fill();
};
