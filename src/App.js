
import './App.css';
import './Component/Button';
import './Component/Cart';
import './Component/Input';
import Input from './Component/Input';
import Button from './Component/Button';
import Cart from './Component/Cart';
import { UseWeather } from './Context/WeatherContext';
function App() {
  const weather=UseWeather()
  
  return (
    <div className="App">
      <h3>Weather Forecast</h3>
      <span className='span'><Input></Input>
      <Button onClick={weather.fetchdata} value="Search"></Button></span>
      <Cart ></Cart>
      < Button value="Refresh"></Button>
    </div>
  );
}

export default App;
