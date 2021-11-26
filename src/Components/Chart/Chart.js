import { useEffect } from 'react';
import React from 'react';
import { drawChart } from './DrawChart';

export const Chart = ({ weatherState, className }) => {
	const colors = {
		color1: '',
		color2: '',
	};

	if (weatherState === 'cold') {
		colors.color1 = '#5B8CFF';
		colors.color2 = '#F1F2FF';
	} else if (weatherState === 'warm') {
		colors.color1 = '#FFA25B';
		colors.color2 = '#FFF4F4';
	}

	let graphData = [10, 5, 10, 14, 10, 11, 14, 13];

	useEffect(() => {
		drawChart(colors.color1, colors.color2, graphData, className);
	}, [colors]);

	return <div></div>;
};
