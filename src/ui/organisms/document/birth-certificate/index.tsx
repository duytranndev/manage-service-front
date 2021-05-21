import { Button, ButtonGroup, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { useState } from 'react'
import { BirthCertificateInterface } from '../../../../share/interface/birth-certificate.interface'

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
  parentValues: BirthCertificateInterface | any
}

const BirthCertificate = ({ parentValues, onNextStep, nextStep, prevStep }: StepFormProps): JSX.Element => {
  const classes = useStyles()
  const [formData, setFormData] = useState<BirthCertificateInterface>(parentValues || null)
  const [time, setTime] = useState({
    day: '',
    hour: '',
    minute: '',
    month: '',
    year: ''
  })

  const handelOnChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handelOnChangeTime = (e: any) => {
    setTime({ ...time, [e.target.name]: e.target.value })
  }

  const continueStep = () => {
    if (!formData) {
      return null
    }
    const birthTime = `${time.hour} giờ ${time.minute} phút, ngày ${time.day} tháng ${time.month} năm ${time.year}`
    const secondFormData = {
      ...formData,
      birthTime: birthTime
    }
    onNextStep(secondFormData)
    nextStep()
  }

  const comeBackStep = () => {
    prevStep()
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
        Giấy chứng sinh
      </header>
      <Form layout='horizontal' wrapperCol={{ span: 16 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
            Thông tin về người viết phiếu báo
          </header>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Họ và tên mẹ/Người nuôi dưỡng'
                required
                style={{ margin: 8 }}
                placeholder='Họ và tên mẹ/Người nuôi dưỡng'
                onChange={handelOnChange}
                fullWidth
                name='nameMother'
                value={formData?.nameMother || ''}
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Ngày sinh'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='Ngày sinh'
                name='dayOfBirthMother'
                value={formData?.dayOfBirthMother || ''}
                fullWidth
                type='text'
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi đăng ký thường trú'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='address'
                value={formData?.address || ''}
                placeholder='Nơi đăng ký thường trú'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                required
                label='Mã số BHXH/Thẻ BHYT số'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='Mã số BHXH/Thẻ BHYT số'
                name='codeBH'
                value={formData?.codeBH || ''}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Giấy CMND/Thẻ căn cước/Hộ chiếu số'
                style={{ margin: 8 }}
                required
                type='text'
                name='carId'
                value={formData?.carId || ''}
                onChange={handelOnChange}
                placeholder='Giấy CMND/Thẻ căn cước/Hộ chiếu số'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Ngày cấp'
                required
                style={{ margin: 8 }}
                placeholder='Ngày cấp'
                onChange={handelOnChange}
                name='dateOfIssue'
                value={formData?.dateOfIssue || ''}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Nơi cấp'
                onChange={handelOnChange}
                style={{ margin: 8 }}
                required
                placeholder='Nơi cấp'
                name='placeOfIssue'
                value={formData?.placeOfIssue || ''}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Dân tộc'
                required
                onChange={handelOnChange}
                style={{ margin: 8 }}
                placeholder='Dân tộc'
                name='nation'
                value={formData?.nation || ''}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Họ và tên cha'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='nameFather'
                value={formData?.nameFather || ''}
                placeholder='Họ và tên cha'
                fullWidth
                margin='normal'
              />
            </Grid>
            <header style={{ margin: '10px 0px 0px 15px', fontSize: '120%', fontWeight: 500 }}>
              Đã sinh con vào lúc:
            </header>
            <Grid item xs={12} style={{ display: 'flex', marginTop: '-20px' }}>
              <TextField
                id='standard-full-width'
                label='Giờ'
                placeholder='Giờ'
                onChange={handelOnChangeTime}
                required
                style={{ margin: 8 }}
                name='hour'
                value={time?.hour || ''}
                fullWidth
                margin='normal'
              />
              <TextField
                id='standard-full-width'
                label='Phút'
                style={{ margin: 8 }}
                placeholder='Phút'
                onChange={handelOnChangeTime}
                required
                value={time?.minute || ''}
                name='minute'
                type='text'
                fullWidth
                margin='normal'
              />
              <TextField
                id='standard-full-width'
                label='Ngày'
                style={{ margin: 8 }}
                placeholder='Ngày'
                onChange={handelOnChangeTime}
                required
                value={time?.day || ''}
                name='day'
                type='text'
                fullWidth
                margin='normal'
              />
              <TextField
                id='standard-full-width'
                label='Tháng'
                style={{ margin: 8 }}
                placeholder='Tháng'
                onChange={handelOnChangeTime}
                value={time?.month || ''}
                required
                name='month'
                type='text'
                fullWidth
                margin='normal'
              />
              <TextField
                id='standard-full-width'
                label='Năm'
                placeholder='Năm'
                style={{ margin: 8 }}
                onChange={handelOnChangeTime}
                required
                value={time?.year || ''}
                name='year'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='Tại'
                placeholder='Tại'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                required
                value={formData?.placeOfBirth || ''}
                name='placeOfBirth'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                placeholder='Số con trong lần sinh này'
                label='Số con trong lần sinh này'
                onChange={handelOnChange}
                required
                value={formData?.numberOfChildren || ''}
                name='numberOfChildren'
                style={{ margin: 8 }}
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Giới tính của con'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.gender || ''}
                name='gender'
                placeholder='Giới tính của con'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Cân nặng'
                style={{ margin: 8 }}
                required
                name='weight'
                value={formData?.weight || ''}
                placeholder='Cân nặng'
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Dự định đặt tên con là'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                value={formData?.name || ''}
                name='name'
                placeholder='Dự định đặt tên con là'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextArea
                id='standard-full-width'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                rows={4}
                value={formData?.note || ''}
                name='note'
                placeholder='Ghi chú'
              />
            </Grid>
          </Grid>
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
          <Button
            variant='contained'
            onClick={comeBackStep}
            fullWidth
            className={classes.button}
            startIcon={<KeyboardBackspaceIcon />}>
            BACK
          </Button>
        </ButtonGroup>
      </Form>
    </>
  )
}
export default BirthCertificate
