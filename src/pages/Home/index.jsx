import React from 'react'
import ErrorAlert from '../../component/ErrorAlert';
import LoadingButton from '../../component/LoadingButton';
import RecentGames from '../../component/RecentGames';
import WelcomePage from '../Welcome';

export default function HomePage() {
  return (
    <div>
      <WelcomePage />
      <ErrorAlert />
      <LoadingButton color="danger" title='Connect'/>
      <LoadingButton color="success" title='Go Live'/>
      <RecentGames />
    </div>
  )
}









