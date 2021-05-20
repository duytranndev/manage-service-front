import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { NewsInterface } from '../../../share/interface/image.interface'
import { fetchNewss } from '../../../store/reducers/news.reducer'
import { AppState } from '../../../store/types'

const NewsDetail = (): JSX.Element => {
  const { slug } = useParams<any>()
  const listNews = useSelector<AppState, NewsInterface[]>((state) => state.news.data)
  const [news, setNews] = useState<NewsInterface>()
  const dispatch = useDispatch()

  useEffect(() => {
    if (listNews.length === 0) {
      dispatch(fetchNewss())
    }
  }, [])
  useEffect(() => {
    setNews(listNews.find((item) => item.slug === slug))
  }, [listNews])
  return (
    <div className='container'>
      <div className='title' style={{ margin: '20px 0px', fontSize: '24px', fontWeight: 500 }}>
        {news?.title}
        <br />
        {news?.insertTime}
      </div>
      <div className='time-create'></div>
      <img
        src='https://dichvucong.gov.vn/images/news/20200213031023_dvc_banner.jpg
'
        alt=''
      />
      <div className='content' dangerouslySetInnerHTML={{ __html: news?.content as string }} />
    </div>
  )
}
export default NewsDetail
