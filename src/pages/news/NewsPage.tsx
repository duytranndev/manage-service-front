import { List } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
// import { List } from 'rc-field-form'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { NewsInterface } from '../../share/interface/image.interface'
import { fetchNewss } from '../../store/reducers/news.reducer'
import { AppState } from '../../store/types'

const NewsPage = (): JSX.Element => {
  const listNews = useSelector<AppState, NewsInterface[]>((state) => state.news.data)
  const isPending = useSelector<AppState>((state) => state.news.pending)
  const dispatch = useDispatch()
  useEffect(() => {
    if (listNews.length === 0) {
      dispatch(fetchNewss())
    }
  }, [])

  // useEffect(() => {
  //   moduleApi.get(NEWS_URL).then((res) => setListNews(res.data.data))
  // }, [])
  console.log('isPending :>> ', isPending)

  return (
    <>
      <div className='container'>
        {isPending ? <div className='classic-5'></div> : null}
        <List
          itemLayout='horizontal'
          dataSource={listNews}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
                title={<Link to={`/news/${item.slug}`}>{item.title}</Link>}
                description={item.insertTime}
              />
            </List.Item>
          )}
        />
      </div>
    </>
  )
}
export default NewsPage
