import './App.css';

import { Search } from './Components/Search/Search';
import { LanguageSettings } from './Components/LanguageSettings/LanguageSettings';
import { WeatherCard } from './Components/WeatherCard/WeatherCard';
import { UsePosition } from './Components/Position/UsePosition.js';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

function App() {
	const { t, i18n } = useTranslation();

	return (
		<div className='App'>
			<UsePosition />
			<section>
				<LanguageSettings />
			</section>

			<section>
				<Search />
			</section>

			<section className='main'>
				<WeatherCard />
			</section>
		</div>
	);
}

export default App;
