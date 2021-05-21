import { Button, ButtonGroup, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form } from 'antd'
import { ChangeEvent, useState } from 'react'
import { RegistrationDeclaredPaperBirthInterface } from '../../../../share/interface/RegistrationDeclaredPaperbirth.interface'
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
  parentValues: RegistrationDeclaredPaperBirthInterface | any
}

const RegistrationDeclaredPaperBirth = ({ parentValues, onNextStep, nextStep }: StepFormProps): JSX.Element => {
  const classes = useStyles()
  const [formData, setFormData] = useState<RegistrationDeclaredPaperBirthInterface>(parentValues || null)

  const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const continueStep = () => {
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
        Tờ khai đăng ký khai sinh
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
                label='Họ, chữ đệm, tên người yêu cầu'
                required
                style={{ margin: 8 }}
                placeholder='Họ, chữ đệm, tên người yêu cầu'
                onChange={handelOnChange}
                fullWidth
                name='nameRequest'
                value={formData?.nameRequest || ''}
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Giấy tờ tuỳ thân (2)'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='Giấy tờ tuỳ thân'
                name='identification'
                value={formData?.identification || ''}
                fullWidth
                type='text'
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi cư trú (3)'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='addressRequester'
                value={formData?.addressRequester || ''}
                placeholder='Nơi cư trú'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Số điện thoại liên lạc'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='phone'
                value={formData?.phone || ''}
                placeholder='Số điện thoại liên lạc'
                type='text'
                fullWidth
                margin='normal'
              />
            </Grid>
            <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
              Đề nghị cơ quan đăng ký khai sinh cho người dưới đây:
            </header>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                required
                label='Họ, chữ đệm, tên'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='Họ, chữ đệm, tên'
                name='name'
                value={formData?.name || ''}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Ngày tháng năm sinh'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                required
                placeholder='Ngày tháng năm sinh'
                name='dayOfBirth'
                value={formData?.dayOfBirth || ''}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Ghi bằng chữ'
                style={{ margin: 8 }}
                required
                type='text'
                name='dayOfBirthByString'
                value={formData?.dayOfBirthByString || ''}
                onChange={handelOnChange}
                placeholder='Ngày tháng năm sinh'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi sinh (4)'
                required
                style={{ margin: 8 }}
                placeholder='Nơi sinh'
                onChange={handelOnChange}
                name='birthPlace'
                value={formData?.birthPlace || ''}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Giới tính'
                onChange={handelOnChange}
                style={{ margin: 8 }}
                required
                placeholder='Giới tính'
                name='gender'
                value={formData?.gender || ''}
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
            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Quốc tịch'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='nationality'
                value={formData?.nationality || ''}
                placeholder='Quốc tịch'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Quê quán'
                onChange={handelOnChange}
                style={{ margin: 8 }}
                required
                name='homeTown'
                value={formData?.homeTown || ''}
                placeholder='Quê quán'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Họ, chữ đệm, tên cha'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.nameFather || ''}
                name='nameFather'
                type='text'
                placeholder='Họ, chữ đệm, tên cha'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Năm sinh'
                onChange={handelOnChange}
                value={formData?.dayOfBirthFather || ''}
                name='dayOfBirthFather'
                style={{ margin: 8 }}
                type='text'
                placeholder='Năm sinh'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Dân tộc'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.nationFather || ''}
                name='nationFather'
                placeholder='Dân tộc'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Quốc tịch'
                style={{ margin: 8 }}
                name='nationalityFater'
                value={formData?.nationalityFater || ''}
                placeholder='Quốc tịch'
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi cư trú'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.addressFather || ''}
                name='addressFather'
                placeholder='Nơi cư trú'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Họ, chữ đệm, tên mẹ'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.nameMother || ''}
                name='nameMother'
                type='text'
                placeholder='Họ, chữ đệm, tên mẹ'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Năm sinh'
                onChange={handelOnChange}
                value={formData?.dayOfBirthMother || ''}
                name='dayOfBirthMother'
                style={{ margin: 8 }}
                type='text'
                placeholder='Năm sinh'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Dân tộc'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.nationMother || ''}
                name='nationMother'
                placeholder='Dân tộc'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Quốc tịch'
                style={{ margin: 8 }}
                name='nationalityMother'
                value={formData?.nationalityMother || ''}
                placeholder='Quốc tịch'
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi cư trú'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.addressMother || ''}
                name='addressMother'
                placeholder='Nơi cư trú'
                fullWidth
                margin='normal'
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
        </ButtonGroup>
      </Form>
    </>
  )
}
export default RegistrationDeclaredPaperBirth
