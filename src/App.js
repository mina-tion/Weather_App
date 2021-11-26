import './App.css';

import { Search } from './Components/Search/Search';
import { LanguageSettings } from './Components/LanguageSettings/LanguageSettings';
import { WeatherCard } from './Components/WeatherCard/WeatherCard';
import { UsePosition } from './Components/Position/UsePosition.js';

function App() {
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
