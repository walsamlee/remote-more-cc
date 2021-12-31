import react from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home.components';
import RepoList from './components/repoList.component';
import './App.css';
import Details from './components/details.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home />}
          />
          <Route
            exact
            path='/projects/'
            element={ <RepoList />}
          />
          <Route
            exact
            path='/details/'
            element={ <Details />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
