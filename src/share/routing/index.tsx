import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import AboutPage from '../../pages/about/AboutPage'
import ContactPage from '../../pages/contact/ContactPage'
import DetailField from '../../pages/detail-field/DetailFieldPage'
import DetailService from '../../pages/detail-service/DetailServicePage'
import HowToUse from '../../pages/help/HelpPage'
import HomePage from '../../pages/home/HomePage'
import MyProfile from '../../pages/MyProfile/MyProfile'
import NewsPage from '../../pages/news/NewsPage'
import NotFound from '../../pages/NotFound/NotFoundPage'
import DetailEventUnit from '../../pages/service/ServicePage'
import TermsCondition from '../../pages/terms-and-condition/FaqPage'
import { fetchFields } from '../../store/reducers/field.reducer'
import { fetchUnits } from '../../store/reducers/unit.reducer'
import NewsDetail from '../../ui/organisms/detail-news'

export default function AppRouting() {
  const dispatch = useDispatch()
  useEffect(() => {
    const loadUnit = async () => {
      await dispatch(fetchUnits())
    }
    loadUnit()
  }, [])

  useEffect(() => {
    const loadField = async () => {
      await dispatch(fetchFields())
    }
    loadField()
  }, [])

  const routeList = [
    {
      component: <Route key='8' path='/dvc/chi-tiet-dich-vu/:slug' children={<DetailService />} exact />
    },
    {
      component: <Route key='13' path='/news/:slug' component={NewsDetail} exact />
    },
    {
      component: <Route key='9' path='/dvc/doanh-nghiep/:slug' children={<DetailEventUnit />} exact />
    },
    {
      component: <Route key='5' path='/dvc/cong-dan/:slug' children={<DetailEventUnit />} exact />
    },
    {
      component: <Route key='6' path='/dvc/:slug' children={<DetailField />} exact />
    },
    {
      component: <Route key='3' path='/terms' component={TermsCondition} exact />
    },
    {
      component: <Route key='14' path='/my-profile' component={MyProfile} exact />
    },
    {
      component: <Route key='4' path='/about' component={AboutPage} exact />
    },
    {
      component: <Route key='1' path='/' component={HomePage} exact />
    },
    {
      component: <Route key='2' path='/home' component={HomePage} exact />
    },
    {
      component: <Route key='7' path='/how-to-use' component={HowToUse} exact />
    },
    {
      component: <Route key='10' path='/news' component={NewsPage} exact />
    },
    {
      component: <Route key='11' path='/contact' component={ContactPage} exact />
    }
  ]
  return (
    <>
      <Switch>
        {routeList.map((item) => item.component)}
        <Route path='*' component={NotFound} exact />
        <Redirect path='home' to='/' exact></Redirect>
      </Switch>
    </>
  )
}
