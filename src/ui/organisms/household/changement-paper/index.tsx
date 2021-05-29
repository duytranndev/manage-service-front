import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form, Radio } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import { ChangeEvent, useState } from 'react'
import { ChangementPaperInterface } from '../../../../share/interface/changementpaper.interface'
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
  parentValues: ChangementPaperInterface | any
}

export default function ChangementPaper({ parentValues, onNextStep, nextStep, prevStep }: StepFormProps) {
  const classes = useStyles()
  const [formData, setFormData] = useState<ChangementPaperInterface>(parentValues || null)

  const [inputFields, setInputFields] = useState<any>([
    {
      _id: new Date().toLocaleString(),
      name: '',
      dayOfBirth: '',
      gender: '',
      domicile: '',
      occupations: '',
      nation: '',
      nationality: '',
      cardId: '',
      relative: ''
    }
  ])

  const handleChangeFieldInput = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const newInputFields = inputFields.map((item: { [x: string]: string; _id: string }) => {
      if (id === item._id) {
        item[e.target.name] = e.target.value
      }
      return item
    })
    setInputFields(newInputFields)

    // const values = [...inputFields]
    // values[index][e.target.name] = e.target.value
    // setInputFields(values)
  }
  const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        _id: new Date().toLocaleString(),
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
  }
  const handleRemoveFields = (id: string) => {
    if (inputFields.length === 1) {
      return null
    }
    const values = [...inputFields]
    // values.splice(index, 1)
    values.splice(
      values.findIndex((item) => item._id === id),
      1
    )
    setInputFields(values)
  }

  const continueStep = () => {
    if (!formData) {
      return null
    }
    const secondFormData = {
      ...formData,
      member: inputFields
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
        Phiếu báo thay đổi hộ khẩu, nhân khẩu
      </header>
      <Form layout='horizontal' wrapperCol={{ span: 16 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
            Thông tin về người viết phiếu báo
          </header>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='Họ và tên'
                required
                style={{ margin: 8 }}
                placeholder='Họ và tên'
                onChange={handelOnChange}
                fullWidth
                name='name'
                value={formData?.name || ''}
                margin='normal'
              />
            </Grid>
            <Grid item xs={3}>
              <Radio.Group name='gender' className={classes.paper} onChange={(e: any) => handelOnChange(e)}>
                <Radio value='Nam'>Nam</Radio>
                <Radio value='Nữ'>Nữ</Radio>
                <Radio value='Khác'>Khác</Radio>
              </Radio.Group>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='CMND số'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='CMND số'
                name='cardId'
                value={formData?.cardId || ''}
                fullWidth
                type='number'
                margin='normal'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Hộ chiếu số'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                name='passport'
                value={formData?.passport || ''}
                placeholder='Hộ chiếu số'
                type='number'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                required
                label='Nơi thường trú'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='Nơi thường trú'
                name='address'
                value={formData?.address || ''}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='Địa chỉ chỗ ở hiện nay'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                required
                placeholder='Địa chỉ chỗ ở hiện nay'
                name='temporaryAddress'
                value={formData?.temporaryAddress}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='Số điện thoại liên hệ'
                style={{ margin: 8 }}
                required
                type='number'
                name='phone'
                value={formData?.phone || ''}
                onChange={handelOnChange}
                placeholder='Số điện thoại liên hệ'
                fullWidth
                margin='normal'
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
          Thông tin về người có thay đổi hộ khẩu, nhân khẩu
        </header>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='Họ và tên'
                required
                style={{ margin: 8 }}
                placeholder='Họ và tên'
                onChange={handelOnChange}
                name='namePeopleChange'
                value={formData?.namePeopleChange}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <Radio.Group
                value={formData?.genderPeopleChange || 'Nam'}
                name='genderPeopleChange'
                className={classes.paper}
                onChange={(e: any) => handelOnChange(e)}>
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
                style={{ margin: 8 }}
                placeholder='Ngày, tháng, năm sinh'
                onChange={handelOnChange}
                value={formData?.dayOfBirthPeopleChange}
                name='dayOfBirthPeopleChange'
                type='date'
                fullWidth
                margin='normal'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={5}>
              <TextField
                id='standard-full-width'
                label='Nơi sinh'
                onChange={handelOnChange}
                style={{ margin: 8 }}
                required
                placeholder='Nơi sinh'
                name='birthplacePeopleChange'
                value={formData?.birthplacePeopleChange}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                id='standard-full-width'
                label='Nguyên quán'
                required
                onChange={handelOnChange}
                style={{ margin: 8 }}
                placeholder='Nguyên quán'
                name='homeTownPeopleChange'
                value={formData?.homeTownPeopleChange}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='Dân tộc'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='nationPeopleChange'
                value={formData?.nationPeopleChange}
                placeholder='Dân tộc'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='Quốc tịch'
                onChange={handelOnChange}
                style={{ margin: 8 }}
                required
                name='nationalityPeopleChange'
                value={formData?.nationalityPeopleChange}
                placeholder='Quốc tịch'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='CMND số'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.cardIdPeopleChange}
                name='cardIdPeopleChange'
                type='number'
                placeholder='CMND số'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='Hộ chiếu số'
                onChange={handelOnChange}
                value={formData?.passportPeopleChange}
                name='passportPeopleChange'
                style={{ margin: 8 }}
                type='number'
                placeholder='Hộ chiếu số'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nghề nghiệp, nơi làm việc'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.occupationsPeopleChange}
                name='occupationsPeopleChange'
                required
                placeholder='Nghề nghiệp, nơi làm việc'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi thường trú'
                required
                style={{ margin: 8 }}
                name='addressPeopleChange'
                value={formData?.addressPeopleChange}
                placeholder='Nơi thường trú'
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='Địa chỉ chỗ ở hiện nay'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                value={formData?.temporaryAddressPeopleChange}
                name='temporaryAddressPeopleChange'
                placeholder='Địa chỉ chỗ ở hiện nay'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='Số điện thoại liên hệ'
                required
                onChange={handelOnChange}
                name='phonePeopleChange'
                value={formData?.phonePeopleChange}
                type='number'
                style={{ margin: 8 }}
                placeholder='Số điện thoại liên hệ'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                onChange={handelOnChange}
                required
                label='Họ và tên chủ hộ'
                value={formData?.nameOwn}
                name='nameOwn'
                style={{ margin: 8 }}
                placeholder='Họ và tên chủ hộ'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                required
                label='Quan hệ với chủ hộ'
                style={{ margin: 8 }}
                name='relative'
                value={formData?.relative}
                onChange={handelOnChange}
                placeholder='Quan hệ với chủ hộ'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nội dung thay đổi hộ khẩu, nhân khẩu'
                style={{ margin: 8 }}
                required
                name='content'
                value={formData?.content}
                placeholder='Nội dung thay đổi hộ khẩu, nhân khẩu'
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
          Những người cùng thay đổi
        </header>
        <div className={classes.root} style={{ marginLeft: 6 }}>
          {inputFields.map((item: any, index: number) => {
            return (
              <Grid key={item._id} container spacing={0} style={{ display: 'flex' }}>
                <Grid item xs={1}>
                  <TextField
                    id='standard-secondary'
                    label='Họ và tên'
                    size='small'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    color='secondary'
                    name='name'
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    size='small'
                    type='date'
                    color='secondary'
                    name='dayOfBirth'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    id='standard-secondary'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    label='Giới tính'
                    size='small'
                    color='secondary'
                    fullWidth
                    name='gender'
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    id='standard-secondary'
                    label='Nơi sinh'
                    size='small'
                    color='secondary'
                    name='domicile'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    id='standard-secondary'
                    label='Nghề nghiệp'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    size='small'
                    color='secondary'
                    name='occupations'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    id='standard-secondary'
                    label='Dân tộc'
                    size='small'
                    name='nation'
                    color='secondary'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <TextField
                    id='standard-secondary'
                    label='Quốc tịch'
                    size='small'
                    name='nationality'
                    color='secondary'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='CMND số (Hộ chiếu số)'
                    name='cardId'
                    size='small'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    color='secondary'
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
                    name='relative'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    color='secondary'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <div style={{ margin: '10px 10px' }}>
                    <button type='button'>
                      <HighlightOffIcon onClick={() => handleRemoveFields(item._id)} />
                    </button>
                    <button type='button'>
                      <AddCircleOutlineIcon onClick={handleAddFields} />
                    </button>
                  </div>
                </Grid>
              </Grid>
            )
          })}
        </div>
        <ButtonGroup>
          <Button
            variant='contained'
            onClick={comeBackStep}
            fullWidth
            className={classes.button}
            startIcon={<KeyboardBackspaceIcon />}>
            BACK
          </Button>
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
