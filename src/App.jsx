import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Leaderboard from './component/ContentTab/Leaderboard'
import Message from './component/ContentTab/Message'
import Rewards from './component/ContentTab/Rewards'
import Staking from './component/ContentTab/Staking'
import AppContextContainer from './context/AppContext'
import Layout from './Layout'
import ErrorBoundary from './Layout/ErrorBoundary'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/Home'
import LandingPage from './pages/LandingPage'
import Library from './pages/Library'
import Livescream from './pages/Live'
import WebinarCall from './pages/Live/WebinarCall'
import Settings from './pages/Settings'
import Socials from './pages/Socials'
import Store from './pages/Store'
import TestPage from './pages/TestPage'
import Wallet from './pages/Wallet'
import { ThemeProvider } from './ThemeContext'

function App() {
  return (
    <div className='App'>
      <Router>
        <ErrorBoundary>
          <AppContextContainer>
            <ThemeProvider>
              <Layout>
                <Routes>
                  <Route exact path='/' element={<LandingPage />} />
                  <Route exact path='/page/:id' element={<LandingPage />} />
                  <Route exact path='/home' element={<HomePage />} />
                  <Route path='/socials' element={<Socials />} />
                  <Route path='/test' element={<TestPage />} />

                  <Route path='/store' element={<Store />} />
                  <Route path='/livestream' element={<Livescream />} />
                  <Route path='/library' element={<Library />} />
                  <Route path='u/settings' element={<Settings />} />
                  <Route path='u/wallet' element={<Wallet />} />
                  <Route exact path='/leaderboard' element={<Leaderboard />} />
                  <Route exact path='/staking' element={<Staking />} />
                  <Route exact path='/rewards' element={<Rewards />} />
                  <Route exact path='/message' element={<Message />} />
                  <Route exact path='*' element={<ErrorPage />} />

                  <Route exact path='/test' element={<TestPage />} />
                  <Route path='/store' element={<Store />} />
                  <Route exact path='/livestream' element={<Livescream />} />
                  <Route
                    exact
                    path='/livestream/:url'
                    element={<WebinarCall />}
                  />
                  <Route path='/library' element={<Library />} />
                  <Route path='u/settings' element={<Settings />} />
                  <Route path='u/wallet' element={<Wallet />} />
                  <Route exact path='/leaderboard' element={<Leaderboard />} />
                  <Route exact path='/staking' element={<Staking />} />
                  <Route exact path='/rewards' element={<Rewards />} />
                  <Route exact path='/message' element={<Message />} />
                  <Route exact path='*' element={<ErrorPage />} />
                </Routes>
              </Layout>
            </ThemeProvider>
          </AppContextContainer>
        </ErrorBoundary>
      </Router>
    </div>
  )
}

export default App