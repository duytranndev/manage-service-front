import { Button, ButtonGroup, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form, Radio } from 'antd'
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
  const [inputFields, setInputFields] = useState<any>([
    {
      name: '',
      birth: '',
      gender: '',
      domicile: '',
      nation: '',
      nationality: '',
      cardId: '',
      relative: ''
    }
  ])
  const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChangeFieldInput = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const values = [...inputFields]
    values[index][e.target.name] = e.target.value
    setInputFields(values)
  }

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { name: '', birth: '', gender: '', domicile: '', nation: '', nationality: '', cardId: '', relative: '' }
    ])
  }
  const handleRemoveFields = (index: number) => {
    if (inputFields.length === 1) {
      return null
    }
    const values = [...inputFields]
    values.splice(index, 1)
    // values.splice(values.findIndex((item) => item.id === id, 1))
    setInputFields(values)
  }

  const continueStep = () => {
    if (!formData) {
      return null
    }
    const thirdFormData = {
      ...formData,
      member: inputFields
    }
    onNextStep(thirdFormData)
    nextStep()
  }

  const comeBackStep = () => {
    prevStep()
  }

  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    // setErrors(validate(formData))
    // setIsSubmitting(true)
    // if (isReady) {
    //   const data = { ...formData }
    //   console.log('data :>> ', data)
    //   setFormData({})
    //   setInputFields([])
    //   onSubmit('awdawd')
    // }
    // return null
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
        Bản khai nhân khẩu
      </header>
      <Form layout='horizontal' wrapperCol={{ span: 16 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='Họ và tên'
                style={{ margin: 8 }}
                placeholder='Họ và tên'
                name='name'
                value={formData?.name || ''}
                onChange={handelOnChange}
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                // required
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
                label='Trình độ học vấn'
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
                label='Trình độ chuyên môn'
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
                // required
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
            <header style={{ margin: '10px 15px 10px', fontSize: '120%', fontWeight: 500 }}>
              Tóm tắt về gia đình (Bố, mẹ; vợ/chồng; con; anh, chị, em ruột):
            </header>
            <Grid item xs={12}>
              <TextArea
                // required
                name='familySummary'
                value={formData?.familySummary || ''}
                onChange={(e: any) => handelOnChange(e)}
                placeholder='Tóm tắt về gia đình (Bố, mẹ; vợ/chồng; con; anh, chị, em ruột)'
                rows={4}
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '10px 5px 10px', fontSize: '120%', fontWeight: 500 }}>
          Tóm tắt về bản thân (Từ đủ 14 tuổi trở lên đến nay ở đâu, làm gì):
        </header>

        <div className={classes.root} style={{ marginLeft: 6 }}>
          <Grid container spacing={0} style={{ display: 'flex' }}>
            <Grid item xs={2}>
              <TextField
                id='standard-secondary'
                label='Từ tháng, năm đến tháng, năm'
                size='small'
                color='secondary'
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
                size='small'
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
                color='secondary'
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={1}>
              {/* <TextField id='standard-secondary' label='Nơi sinh' size='small' color='secondary' /> */}
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
            onClick={comeBackStep}
            variant='contained'
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
