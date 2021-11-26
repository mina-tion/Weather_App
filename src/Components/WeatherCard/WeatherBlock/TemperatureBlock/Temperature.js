import { useState, useEffect } from 'react';
import './Temperature.css';
import { useTranslation } from 'react-i18next';

export const TemperatueBlock = ({ temp, feelsLike }) => {
	const { t } = useTranslation();
	const [unit, setUnit] = useState('C');

	const convertToCels = () => {
		setUnit('C');
	};

	const convertToFahr = () => {
		setUnit('F');
	};

	let temperature = null;
	let flTemperature = null;

	if (unit === 'C') {
		temperature = temp.C;
		flTemperature = feelsLike.C;
	} else {
		temperature = temp.F;
		flTemperature = feelsLike.F;
	}

	return (
		<div className='temperature-block'>
			<div className='temperature'>{temperature}</div>
			<div className='temperature-settings'>
				{unit === 'C' ? (
					<div className='unit active' onClick={convertToCels}>
						°C
					</div>
				) : (
					<div className='unit unactive' onClick={convertToCels}>
						°C
					</div>
				)}
				<div className='line'></div>

				{unit === 'F' ? (
					<div className='unit active' onClick={convertToFahr}>
						°F
					</div>
				) : (
					<div className='unit unactive' onClick={convertToFahr}>
						°F
					</div>
				)}
			</div>

			<div className='fl-block'>
				<div className='fl'>{t('feels_like')}: </div>
				<div className='fl-value'>{`${flTemperature} °${unit}`} </div>
			</div>
		</div>
	);
};
