import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form } from 'antd'
import { ChangeEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { RegistrationBookInterface } from '../../../../share/interface/registration-book.interface'
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
  parentValues: RegistrationBookInterface | any
}

export default function SoHoKhau({ onNextStep, nextStep, parentValues }: StepFormProps) {
  const [formData, setFormData] = useState<RegistrationBookInterface>(parentValues || null)
  const classes = useStyles()

  const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const continueStep = () => {
    if (!formData) {
      toast.error('Xin vui lòng điền đầy đủ thông tin...', {
        duration: 3000
      })
      return null
    }
    const firstFormData = {
      ...formData
    }
    onNextStep(firstFormData)
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
        Sổ hộ khẩu
      </header>
      <Form layout='horizontal' wrapperCol={{ span: 20 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Số sổ hộ khẩu'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.numberRegistrationBook || ''}
                name='numberRegistrationBook'
                required
                type='number'
                placeholder='Số sổ hộ khẩu'
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Họ và tên chủ hộ'
                style={{ margin: 8 }}
                placeholder='Họ và tên chủ hộ'
                fullWidth
                required
                name='nameOwn'
                onChange={handelOnChange}
                value={formData?.nameOwn || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Hồ sơ hộ khẩu số'
                style={{ margin: 8 }}
                placeholder='Hồ sơ hộ khẩu số'
                fullWidth
                required
                type='number'
                name='numberProfileRegistrationBook'
                onChange={handelOnChange}
                value={formData?.numberProfileRegistrationBook || ''}
              />
            </Grid>
          </Grid>
        </div>

        <Button
          type='submit'
          variant='contained'
          fullWidth
          className={classes.button}
          color='primary'
          endIcon={<NavigateNextIcon />}>
          NEXT
        </Button>
        <Toaster />
      </Form>
    </>
  )
}
