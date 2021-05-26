import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.scss'
import CovidTracker from './pages/Covid-19/CovidTracker'
import AppLayout from './ui/templates/layout'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          {/* <Route path='' exact>
            <Login />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route> */}
          <Route path='/covid-tracker' children={<CovidTracker />} exact />
          <AppLayout />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App

const Login = (): JSX.Element => {
  return (
    <>
      <Link to='/home'>Login</Link>
    </>
  )
}
