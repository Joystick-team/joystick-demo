import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import HomePage from './pages/Home';
import Socials from './pages/Socials';
import TestPage from './pages/TestPage';
import Store from './pages/Store';
import Livescream from './pages/Live';
import Library from './pages/Library';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet';
import Layout from './component/Layout';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Layout>
            <Routes>
              <Route
                exact
                path="/" element={<HomePage/>}
              />
              <Route
                path='/socials' element={<Socials/>}
              />
              <Route
                path='/test' element={<TestPage/>}
              />

              <Route
                path='/store' element={<Store/>}
              />
              <Route
                path='/livestream' element={< Livescream/>}
              />
              <Route
                path='/library' element={< Library/>}
              />
              <Route
                path='u/settings' element={<Settings/>}
              />
              <Route
                path='u/wallet' element={<Wallet/>}
              />
            </Routes>
          </Layout>
        </Router >
    </div>
  );
}

export default App;
