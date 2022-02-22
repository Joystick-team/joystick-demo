import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import WelcomePage from './pages/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route
              exact
              path="/" element={<HomePage/>}
            />

            <Route
              exact
              path='/welcome' element={<WelcomePage/>}
            />

          </Routes>
        </Router >
    </div>
  );
}

export default App;
