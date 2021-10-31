import './App.css';

import { Search } from './Components/Search/Search';
import { LanguageSettings } from './Components/LanguageSettings/LanguageSettings';
import { WeatherBlock } from './Components/WeatherBlock/WeatherBlock';


function App() {

  return (
    <div className='App'>
      <section>
        <LanguageSettings />
      </section>

      <section>
        <Search />
      </section>

      <section className='main'>
        <WeatherBlock />
      </section>
    </div>

  );
}

export default App;
