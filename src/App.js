import { Route, Routes } from 'react-router';
import './App.css';
import Home from './containers/Home';
import Header from './components/partials/Header';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element= { <Home /> } />
        </Routes>
    </div>
  );
}

export default App;
