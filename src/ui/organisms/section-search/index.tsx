import { SearchOutlined } from '@ant-design/icons'
import Grid from '@material-ui/core/Grid'
import 'antd/dist/antd.css'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input/Input'
import './index.scss'

const SearchComponent = (): JSX.Element => {
  const onSearch = (value: string) => console.log(value)

  return (
    <div className='search-banner'>
      <div className='container'>
        <div className='search'>
          <div className='form-group'>
            <div className='box-search'>
              <div className='title'>Tra cứu thông tin hồ sơ</div>
              <Grid container spacing={0} className='row-search'>
                <Grid item xs={10} className='col-xs-10'>
                  <Input className='input-search' placeholder='Nhập mã hồ sơ tìm kiếm' size='large' />
                </Grid>
                <Grid item xs={2} className='col-xs-2'>
                  <Button className='btn-search' size='large' icon={<SearchOutlined />}>
                    Tìm kiếm
                  </Button>
                </Grid>
              </Grid>
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
