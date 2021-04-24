import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import HomePage from '../../pages/home'
import TermsCondition from '../../pages/terms-and-condition'

export default function AppRouting() {
  const routeList = [
    {
      component: <Route key='1' path='/' component={HomePage} exact />
    },
    {
      component: <Route key='2' path='/home' component={HomePage} exact />
    },
    {
      component: <Route key='3' path='/faq' component={TermsCondition} exact />
    }
  ]
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>{routeList.map((item) => item.component)}</Switch>
      <Redirect path='home' to='/'></Redirect>
    </Suspense>
  )
}
