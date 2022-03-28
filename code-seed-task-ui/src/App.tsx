import './App.scss';
import BeerProvider from './context/BeerContext';
import HomePage from './pages/Home';

function App() {
  return (
    <BeerProvider>
      <HomePage />
    </BeerProvider>
  );
}

export default App;
