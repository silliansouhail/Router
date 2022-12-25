import './App.css';
import MovieList from './component/MovieList';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Description from './component/Description';

function App() {
  return (
<Router>
  <div className="App">
    <Routes>
    <Route path="/"element={<MovieList />} />
    <Route path="/description/:movieId" element={<Description />} />
    </Routes>
    
  </div>
</Router>
  );
}

export default App;
