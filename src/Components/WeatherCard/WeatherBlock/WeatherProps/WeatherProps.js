import './WeatherProps.css';
import { useTranslation } from 'react-i18next';

export const WeatherProps = ({ otherInfo, weatherState }) => {
	const { t } = useTranslation();

	return (
		<div className='weather-prop-block'>
			<div className='prop-el'>
				<div className='prop'>{t('wind')}: </div>
				<div className={`value ${weatherState}`}>{`${otherInfo.wind}m/s`}</div>
			</div>
			<div className='prop-el'>
				<div className='prop'>{t('humidity')}: </div>
				<div
					className={`value ${weatherState}`}
				>{`${otherInfo.humidity}%`}</div>
			</div>
			<div className='prop-el'>
				<div className='prop'>{t('pressure')}: </div>
				<div
					className={`value ${weatherState}`}
				>{`${otherInfo.pressure}Pa`}</div>
			</div>
		</div>
	);
};
