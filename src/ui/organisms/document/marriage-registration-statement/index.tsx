/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, ButtonGroup, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form } from 'antd'
import { ChangeEventHandler, SyntheticEvent, useState } from 'react'
import { MarriageRegistrationInterface } from '../../../../share/interface/MarriageRegistration.interface'

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
  parentValues: MarriageRegistrationInterface | any
}

const MarriageRegistrationStatement = ({ onNextStep, nextStep, parentValues }: StepFormProps) => {
  const [formData, setFormData] = useState<MarriageRegistrationInterface>(parentValues || null)
  const classes = useStyles()

  const handelOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  const continueStep = (e: SyntheticEvent) => {
    // e.preventDefault()
    if (!formData) {
      return null
    }
    const secondFormData = {
      ...formData
    }
    onNextStep(secondFormData)
    nextStep()
  }

  return (
    <>
      <header
        style={{
          margin: '10px 5px 10px',
          fontSize: '150%',
          fontWeight: 500,
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>
        Tờ khai đăng ký kết hôn
      </header>

      <Form layout='horizontal' wrapperCol={{ span: 16 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>Thông tin về bên nam</header>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Họ, chữ đệm, tên'
                required
                style={{ margin: 8 }}
                placeholder='Họ, chữ đệm, tên'
                onChange={handelOnChange}
                fullWidth
                name='nameHusband'
                value={formData?.nameHusband || ''}
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Ngày, tháng, năm sinh'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='Ngày, tháng, năm sinh'
                name='dayOfBirthHusband'
                value={formData?.dayOfBirthHusband || ''}
                fullWidth
                type='text'
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Dân tộc'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='nationHusband'
                value={formData?.nationHusband || ''}
                placeholder='Dân tộc'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Quốc tịch'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='nationalityHusband'
                value={formData?.nationalityHusband || ''}
                placeholder='Quốc tịch'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi cư trú (4)'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='addressHusband'
                value={formData?.addressHusband || ''}
                placeholder='Nơi cư trú'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Giấy tờ tuỳ thân (5)'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='identityDocumentsHusband'
                value={formData?.identityDocumentsHusband || ''}
                placeholder='Giấy tờ tuỳ thân'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Số điện thoại'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='phoneHusband'
                value={formData?.phoneHusband || ''}
                placeholder='Số điện thoại'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Kết hôn lần thứ'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='timesHusband'
                value={formData?.timesHusband || ''}
                placeholder='Kết hôn lần thứ'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
          </Grid>

          <header style={{ margin: '15px 5px -10px', fontSize: '130%', fontWeight: 500 }}>Thông tin về bên nữ</header>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Họ, chữ đệm, tên'
                required
                style={{ margin: 8 }}
                placeholder='Họ, chữ đệm, tên'
                onChange={handelOnChange}
                fullWidth
                name='nameWife'
                value={formData?.nameWife || ''}
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Ngày, tháng, năm sinh'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='Ngày, tháng, năm sinh'
                name='dayOfBirthWife'
                value={formData?.dayOfBirthWife || ''}
                fullWidth
                type='text'
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Dân tộc'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='nationWife'
                value={formData?.nationWife || ''}
                placeholder='Dân tộc'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Quốc tịch'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='nationalityWife'
                value={formData?.nationalityWife || ''}
                placeholder='Quốc tịch'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi cư trú (4)'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='addressWife'
                value={formData?.addressWife || ''}
                placeholder='Nơi cư trú'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Giấy tờ tuỳ thân (5)'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='identityDocumentsWife'
                value={formData?.identityDocumentsWife || ''}
                placeholder='Giấy tờ tuỳ thân'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Số điện thoại'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='phoneWife'
                value={formData?.phoneWife || ''}
                placeholder='Số điện thoại'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Kết hôn lần thứ'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='timesWife'
                value={formData?.timesWife || ''}
                placeholder='Kết hôn lần thứ'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '15px 5px 5px', fontSize: '130%', fontWeight: 600 }}>*Chú thích</header>

        <div className='article' style={{ marginLeft: '15px' }}>
          <p id='6177'>
            (1) (2) Trường hợp làm thủ tục đăng ký kết hôn có yếu tố nước ngoài, thì phải dán ảnh của hai bên nam, nữ.
            <br />
            (3) Ghi rõ tên cơ quan đăng ký kết hôn.
            <br />
            (4) Ghi theo nơi đăng ký thường trú, nếu không có nơi đăng ký thường trú thì ghi theo nơi đăng ký tạm trú;
            trường hợp không có nơi đăng ký thường trú và nơi đăng ký tạm trú thì ghi theo nơi đang sinh sống.
            <br />
            (5) Ghi thông tin về giấy tờ tùy thân như: hộ chiếu, chứng minh nhân dân hoặc giấy tờ hợp lệ thay thế (ví
            dụ: Chứng minh nhân dân số 001089123 do Công an thành phố Hà Nội cấp ngày 20/10/1982).
            <br />
            (6) Đề nghị đánh dấu X vào ô nếu có yêu cầu cấp bản sao và ghi rõ số lượng.
          </p>
        </div>

        <ButtonGroup fullWidth>
          <Button
            type='submit'
            variant='contained'
            fullWidth
            className={classes.button}
            color='primary'
            endIcon={<NavigateNextIcon />}>
            NEXT
          </Button>
        </ButtonGroup>
      </Form>
    </>
  )
}
export default MarriageRegistrationStatement
