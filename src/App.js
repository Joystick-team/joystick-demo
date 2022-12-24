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
import Layout from './Layout';
import Leaderboard from './component/ContentTab/Leaderboard';
import Staking from './component/ContentTab/Staking';
import Rewards from './component/ContentTab/Rewards';
import Message from './component/ContentTab/Message';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from './ThemeContext';
import AppContextContainer from './context/AppContext';
import WebinarCall from './pages/Live/WebinarCall';
import ErrorBoundary from './Layout/ErrorBoundary/index.js';
import SinglePost from './pages/Socials/pages/Feeds/SinglePost';
import Messenger from './pages/Messenger';


function App() {

  return (
      <div className="App">
        <Router>
          <ErrorBoundary>
          <AppContextContainer>
          <ThemeProvider>
          <Layout>
          
          
              <Routes>
              <Route
                  exact
                  path="/" element={<LandingPage />}
                />
                <Route
                  exact
                  path="/home" element={<HomePage/>}
                />
                <Route
                  path='/socials' element={<Socials/>}
                />
                <Route
                  path='/socials/:id' element={<SinglePost/>} 
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
                <Route
                  exact
                  path="/leaderboard" element={<Leaderboard />}
                />
                <Route
                  exact
                  path="/staking" element={<Staking />}
                />
                <Route
                  exact
                  path="/rewards" element={<Rewards />}
                />
                <Route
                  exact
                  path="/message" element={< Messenger/>}
                />
                <Route
                  exact
                  path="*" element={<ErrorPage />}
                />
                
                <Route
                  exact
                  path="/test" element={<TestPage />
                    
                  }
                />
              <Route
                path='/store' element={<Store/>}
              />
              <Route
                exact path='/livestream' element={< Livescream/>}
              />
              <Route
                exact path='/livestream/:url' element={<WebinarCall/>}
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
              <Route
                exact
                path="/leaderboard" element={<Leaderboard />}
              />
              <Route
                exact
                path="/staking" element={<Staking />}
              />
              <Route
                exact
                path="/rewards" element={<Rewards />}
              />
              <Route
                exact
                path="*" element={<ErrorPage />}
              />
            </Routes>
            </Layout>
            </ThemeProvider>
            </AppContextContainer>
            </ErrorBoundary>
          </Router >
      </div>
  );
}

export default App;
