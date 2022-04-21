import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import HomePage from './pages/Home';
import WelcomePage from './pages/Welcome';
import Socials from './pages/Socials';
import TestPage from './pages/TestPage';
import Store from './pages/Store';

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

            <Route
              exact
              path='/socials' element={<Socials/>}
            />


            <Route
              exact
              path='/test' element={<TestPage/>}
            />

            <Route
              exact
              path='/store' element={<Store/>}
            />
          </Routes>
        </Router >
    </div>
  );
}

export default App;
