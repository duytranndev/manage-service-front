import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AboutPage from '../../pages/about'
import DetailEventUnit from '../../pages/detail'
import DetailField from '../../pages/detail-field'
import HomePage from '../../pages/home'
import TermsCondition from '../../pages/terms-and-condition'

export default function AppRouting() {
  const routeList = [
    {
      component: <Route key='5' path='/dvc-cong-dan/:slug' children={<DetailEventUnit />} exact />
    },
    {
      component: <Route key='6' path='/dvc-cong-dan' children={<DetailField />} exact />
    },
    {
      component: <Route key='3' path='/faq' component={TermsCondition} exact />
    },
    {
      component: <Route key='4' path='/about' component={AboutPage} exact />
    },
    {
      component: <Route key='1' path='/' component={HomePage} exact />
    },
    {
      component: <Route key='2' path='/home' component={HomePage} exact />
    }
  ]
  return (
    <>
      <Switch>
        {routeList.map((item) => item.component)}
        <Redirect path='home' to='/' exact></Redirect>
      </Switch>
    </>
  )
}
