import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import Grid from '@material-ui/core/Grid'
import 'antd/dist/antd.css'
import Button from 'antd/lib/button'
import Form from 'antd/lib/form/Form'
import Input from 'antd/lib/input/Input'
import { createRef, useState } from 'react'
import toast from 'react-hot-toast'
import { PROFILE_URL } from '../../../share/common/api.constants'
import { moduleApi } from '../../../share/handle/api.module'
import { ProfileInterface } from '../../../share/interface/profile.interface'
import './index.scss'

const SearchComponent = (): JSX.Element => {
  const myRef = createRef<HTMLDivElement>()
  const [keyWord, setKeyWord] = useState<string>('')
  const [searchResult, setSearchResult] = useState<ProfileInterface[]>([])
  // const onSearch = (value: string) => console.log(value)

  const handleOnChange = (e: any) => {
    setSearchResult([])
    setKeyWord(e.target.value)
  }

  const handleOnSearch = async (e: any) => {
    e.preventDefault()
    const searchPromise = moduleApi.get(`${PROFILE_URL}?search=${keyWord}`)
    await toast.promise(
      searchPromise,
      {
        loading: 'Đang tìm kiếm',
        success: (res) => {
          if (res.data.data.length > 0) {
            return `Tìm kiếm thành công với mã hồ sơ ${keyWord}`
          } else {
            return `Không tìm thấy hồ sơ ${keyWord}`
          }
        },
        error: (err) => `Không tìm thấy hồ sơ ${keyWord}`
      },
      {
        style: {
          minWidth: '250px',
          fontSize: '110%'
        },
        success: {
          duration: 3000,
          icon: '🔥'
        }
      }
    )
    const data = await searchPromise.then((res) => res.data.data)
    if (data.length > 0) {
      setSearchResult(data)
      setKeyWord('')
    }
  }

  const handleSetDefault = () => {
    setSearchResult([])
  }

  return (
    <div ref={myRef} className='search-banner'>
      <div className='container'>
        <div className='search'>
          <div className='form-group'>
            <div className='box-search'>
              <div className='title'>Tra cứu thông tin hồ sơ</div>
              <Form onSubmitCapture={handleOnSearch}>
                <Grid container spacing={0} className='row-search'>
                  <Grid item xs={10} className='col-xs-10'>
                    <Input
                      autoFocus={true}
                      value={keyWord}
                      className='input-search'
                      onChange={handleOnChange}
                      placeholder='Nhập mã hồ sơ tìm kiếm'
                      size='large'
                    />
                  </Grid>
                  <Grid item xs={2} className='col-xs-2'>
                    <Button
                      htmlType='submit'
                      className='btn-search'
                      size='large'
                      style={{ width: '100%', height: '37px' }}
                      icon={<SearchOutlined />}>
                      Tìm kiếm
                    </Button>
                  </Grid>
                </Grid>
              </Form>
              {searchResult?.length > 0 && (
                <div className='search-content'>
                  <div className='result'>
                    {searchResult.map((item, index) => (
                      <div key={index} className='item'>
                        <div className='name-service'>{item.nameDocument}</div>
                        <div className='field-name'>{item.fieldName}</div>
                        <div className='profile-code'>{item.profileCode}</div>
                        <div className='insert-time'>{item.insertTime}</div>
                        <div className='browsed'>{item.browsed ? 'Đã duyệt' : 'Hồ sơ chưa được duyệt'}</div>
                        <div className='status'>
                          {item.browsed
                            ? item.status === 'YES'
                              ? 'Hồ sơ đã được thông qua'
                              : 'Hồ sơ không được thông qua'
                            : 'Hồ sơ chưa được duyệt'}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='icon' onClick={handleSetDefault}>
                    <CloseOutlined />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='actions'>
            <Grid container spacing={0}>
              <Grid item xs={12}></Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SearchComponent
