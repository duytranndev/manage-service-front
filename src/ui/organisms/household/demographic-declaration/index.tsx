import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form, Radio } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import TextArea from 'antd/lib/input/TextArea'
import { ChangeEvent, useState } from 'react'
import { DemographicDeclarationInterface } from '../../../../share/interface/demographicdeclaration.interface'
// import './index.scss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    button: {
      margin: theme.spacing(1),
      marginTop: '50px'
    }
  })
)

type StepFormProps = {
  onNextStep: Function
  nextStep: Function
  prevStep: Function
  parentValues: DemographicDeclarationInterface | any
}

export default function DemographicDeclaration({ onNextStep, nextStep, prevStep, parentValues }: StepFormProps) {
  const classes = useStyles()
  const [formData, setFormData] = useState<DemographicDeclarationInterface>(parentValues || null)
  const [aboutFamily, setAboutFamily] = useState<any>([
    {
      _id: new Date().toLocaleString(),
      name: '',
      dayOfBirth: '',
      gender: '',
      occupations: '',
      temporaryAddress: '',
      relative: ''
    }
  ])
  const [aboutYourself, setAboutYourself] = useState<any>([
    {
      _id: new Date().toLocaleString(),
      fromDate: '',
      address: '',
      occupations: ''
    }
  ])

  const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChangeAboutFamily = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const newAboutFamily = aboutFamily.map((item: { [x: string]: string; _id: string }) => {
      if (id === item._id) {
        item[e.target.name] = e.target.value
      }
      return item
    })
    setAboutFamily(newAboutFamily)
  }

  const handleChangeAboutYourSelf = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const newAboutYourself = aboutYourself.map((item: { [x: string]: string; _id: string }) => {
      if (id === item._id) {
        item[e.target.name] = e.target.value
      }
      return item
    })
    setAboutYourself(newAboutYourself)
  }

  const handleAddAboutFamily = () => {
    setAboutFamily([
      ...aboutFamily,
      {
        _id: new Date().toLocaleString(),
        name: '',
        dayOfBirth: '',
        gender: '',
        occupations: '',
        temporaryAddress: '',
        relative: ''
      }
    ])
  }

  const handleAddAboutYourSelf = () => {
    setAboutYourself([
      ...aboutYourself,
      {
        _id: new Date().toLocaleString(),
        fromDate: '',
        address: '',
        occupations: ''
      }
    ])
  }

  const handleRemoveAboutFamily = (id: string) => {
    if (aboutFamily.length === 1) {
      return null
    }
    const values = [...aboutFamily]
    // values.splice(index, 1)
    values.splice(
      values.findIndex((item) => item._id === id),
      1
    )
    setAboutFamily(values)
  }

  const handleRemoveAboutYourSelf = (id: string) => {
    if (aboutYourself.length === 1) {
      return null
    }
    const values = [...aboutYourself]
    // values.splice(index, 1)
    values.splice(
      values.findIndex((item) => item._id === id),
      1
    )
    setAboutYourself(values)
  }
  const continueStep = () => {
    if (!formData) {
      return null
    }
    const thirdFormData = {
      ...formData,
      aboutFamily,
      aboutYourself
    }
    console.log('thirdFormData :>> ', thirdFormData)
    // onNextStep(thirdFormData)
    // nextStep()
  }

  const comeBackStep = () => {
    prevStep()
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <header
        style={{
          margin: '10px 5px 10px',
          fontSize: '150%',
          fontWeight: 500,
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>
        Bản khai nhân khẩu
      </header>
      <Form layout='horizontal' wrapperCol={{ span: 16 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='Họ và tên (1)'
                style={{ margin: 8 }}
                placeholder='Họ và tên'
                name='name'
                value={formData?.name || ''}
                onChange={handelOnChange}
                required
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={3}>
              <Radio.Group name='gender' className={classes.paper} onChange={(e: any) => handelOnChange(e)}>
                <Radio value='Nam'>Nam</Radio>
                <Radio value='Nữ'>Nữ</Radio>
                <Radio value='Khác'>Khác</Radio>
              </Radio.Group>
            </Grid>

            <Grid item xs={2}>
              <TextField
                id='standard-full-width'
                required
                label='Ngày, tháng, năm sinh'
                type='date'
                style={{ margin: 8 }}
                placeholder='Ngày, tháng, năm sinh'
                fullWidth
                name='dayOfBirth'
                value={formData?.dayOfBirth || ''}
                onChange={handelOnChange}
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                required
                id='standard-full-width'
                label='Nơi sinh'
                style={{ margin: 8 }}
                placeholder='Nơi sinh'
                fullWidth
                name='birthPlace'
                value={formData?.birthPlace || ''}
                onChange={handelOnChange}
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                id='standard-full-width'
                label='Nguyên quán'
                style={{ margin: 8 }}
                placeholder='Nguyên quán'
                fullWidth
                required
                name='homeTown'
                value={formData?.homeTown || ''}
                onChange={handelOnChange}
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Dân tộc'
                style={{ margin: 8 }}
                required
                placeholder='Dân tộc'
                name='nation'
                value={formData?.nation || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                id='standard-full-width'
                label='Tôn giáo'
                style={{ margin: 8 }}
                placeholder='Tôn giáo'
                name='religion'
                value={formData?.religion || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                required
                label='Quốc tịch'
                style={{ margin: 8 }}
                placeholder='Quốc tịch'
                name='nationality'
                value={formData?.nationality || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='CMND số'
                style={{ margin: 8 }}
                type='number'
                required
                placeholder='CMND số'
                name='cardId'
                value={formData?.cardId || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Hộ chiếu số'
                style={{ margin: 8 }}
                type='number'
                placeholder='Hộ chiếu số'
                name='passport'
                value={formData?.passport || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi thường trú'
                required
                style={{ margin: 8 }}
                placeholder='Nơi thường trú'
                name='address'
                value={formData?.address || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                required
                label='Địa chỉ chỗ ở hiện nay'
                style={{ margin: 8 }}
                placeholder='Địa chỉ chỗ ở hiện nay'
                name='temporaryAddress'
                value={formData?.temporaryAddress || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Trình độ học vấn (2)'
                style={{ margin: 8 }}
                placeholder='Trình độ học vấn'
                name='education'
                value={formData?.education || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Trình độ chuyên môn (3)'
                style={{ margin: 8 }}
                placeholder='Trình độ chuyên môn'
                name='specialize'
                value={formData?.specialize || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Biết tiếng dân tộc'
                style={{ margin: 8 }}
                placeholder='Biết tiếng dân tộc'
                name='ethnicity'
                value={formData?.ethnicity || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Trình độ ngoại ngữ'
                style={{ margin: 8 }}
                placeholder='Trình độ ngoại ngữ'
                name='foreignLanguage'
                value={formData?.foreignLanguage || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nghề nghiệp, nơi làm việc'
                required
                style={{ margin: 8 }}
                placeholder='Nghề nghiệp, nơi làm việc'
                name='occupations'
                value={formData?.occupations || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <header style={{ margin: '10px 15px 10px', fontSize: '120%', fontWeight: 500 }}>
              Tiền án (Tội danh, hình phạt, theo bản án số, ngày, tháng, năm của Tòa án):
            </header>
            <Grid item xs={12}>
              <TextArea
                // required
                name='criminalRecord'
                value={formData?.criminalRecord || ''}
                onChange={(e: any) => handelOnChange(e)}
                placeholder='Tiền án (Tội danh, hình phạt, theo bản án số, ngày, tháng, năm của Tòa án)'
                rows={4}
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '10px 6px 10px', fontSize: '120%', fontWeight: 500 }}>
          Tóm tắt về gia đình (Bố, mẹ; vợ/chồng; con; anh, chị, em ruột) (4):
        </header>
        <div className={classes.root} style={{ marginLeft: 6 }}>
          {aboutFamily.map((item: any, index: number) => {
            return (
              <Grid key={item._id} container spacing={0} style={{ display: 'flex' }}>
                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='Họ và tên'
                    size='small'
                    color='secondary'
                    name='name'
                    value={item?.name || ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='Ngày, tháng, năm sinh'
                    style={{ margin: 0 }}
                    placeholder='Ngày, tháng, năm sinh'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
                    name='dayOfBirth'
                    value={item.dateOfBirth}
                    size='small'
                    type='date'
                    fullWidth
                    // margin='normal'
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    id='standard-secondary'
                    label='Giới tính'
                    name='gender'
                    size='small'
                    value={item.gender}
                    color='secondary'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    id='standard-secondary'
                    label='Quan hệ'
                    size='small'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
                    color='secondary'
                    name='relative'
                    value={item.relative}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>

                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='Nghề nghiệp'
                    size='small'
                    color='secondary'
                    name='occupations'
                    value={item.occupations}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id='standard-secondary'
                    label='Địa chỉ chỗ ở hiện nay'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
                    size='small'
                    color='secondary'
                    name='temporaryAddress'
                    value={item.temporaryAddress}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>

                <Grid item xs={1}>
                  <ButtonGroup style={{ margin: '10px 10px' }}>
                    <button type='button'>
                      <HighlightOffIcon onClick={() => handleRemoveAboutFamily(item._id)} />
                    </button>
                    <button type='button'>
                      <AddCircleOutlineIcon onClick={handleAddAboutFamily} />
                    </button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            )
          })}
        </div>
        <header style={{ margin: '10px 5px 10px', fontSize: '120%', fontWeight: 500 }}>
          Tóm tắt về bản thân (Từ đủ 14 tuổi trở lên đến nay ở đâu, làm gì):
        </header>

        <div className={classes.root} style={{ marginLeft: 6 }}>
          {aboutYourself.map((item: any, index: number) => {
            return (
              <Grid container key={item._id} spacing={0} style={{ display: 'flex' }}>
                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='Từ tháng, năm đến tháng, năm'
                    size='small'
                    color='secondary'
                    name='fromDate'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutYourSelf(item._id, e)}
                    value={item.fromDate}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id='standard-secondary'
                    label='Chỗ ở (Ghi rõ số nhà, đường; thôn, xóm, làng, ấp, bản,...; xã/phường/thị trấn; quận/huyện; tỉnh/thành phố. Nếu ở nước ngoài thì ghi rõ tên nước)'
                    color='secondary'
                    name='address'
                    value={item.address}
                    size='small'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutYourSelf(item._id, e)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id='standard-secondary'
                    label='Nghề nghiệp, nơi làm việc'
                    size='small'
                    name='occupations'
                    value={item.occupations}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutYourSelf(item._id, e)}
                    color='secondary'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <ButtonGroup style={{ margin: '10px 10px' }}>
                    <button type='button'>
                      <HighlightOffIcon onClick={() => handleRemoveAboutYourSelf(item._id)} />
                    </button>
                    <button type='button'>
                      <AddCircleOutlineIcon onClick={handleAddAboutYourSelf} />
                    </button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            )
          })}
        </div>
        <header style={{ margin: '15px 5px 5px', fontSize: '130%', fontWeight: 600, display: 'inline-block' }}>
          *Chú thích
        </header>

        <div className='article' style={{ marginLeft: '15px', display: 'inline-block' }}>
          <p id='6177'>
            (1) Viết chữ in hoa đủ dấu;
            <br />
            (2) Ghi rõ trình độ học vấn cao nhất (Tiến sỹ, Thạc sỹ, Đại học, Cao đẳng, Trung cấp, tốt nghiệp phổ thông
            trung học, tốt nghiệp phổ thông cơ sở...; nếu không biết chữ thì ghi rõ "không biết chữ");
            <br />
            (3) Ghi rõ chuyên ngành được đào tạo hoặc trình độ tay nghề, bậc thợ, chuyên môn kỹ thuật khác được ghi
            trong văn bằng, chứng chỉ.
            <br />
            (4) Ghi cả cha, mẹ, con nuôi; người nuôi dưỡng; người giám hộ theo quy định của pháp luật (nếu có).
          </p>
        </div>
        <ButtonGroup>
          <Button
            onClick={comeBackStep}
            fullWidth
            variant='contained'
            className={classes.button}
            startIcon={<KeyboardBackspaceIcon />}>
            BACK
          </Button>
          <Button
            type='submit'
            variant='contained'
            className={classes.button}
            color='primary'
            fullWidth
            endIcon={<NavigateNextIcon />}>
            NEXT
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  )
}
