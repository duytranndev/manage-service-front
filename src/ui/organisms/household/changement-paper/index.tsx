import { Button, ButtonGroup, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form, Radio } from 'antd'
import React, { ChangeEvent, useState } from 'react'

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
}

type PeopleProps = {
  name?: string
  birth?: string
  gender?: string
  domicile?: string
  nation?: string
  nationality?: string
  cardId?: string
  relative?: string
}

export default function ChangementPaper({ onNextStep, nextStep, prevStep }: StepFormProps) {
  const classes = useStyles()
  const [value, setValue] = useState('')
  const [formData, setFormData] = useState({})
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

  const handleChangeFieldInput = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const values = [...inputFields]
    values[index][e.target.name] = e.target.value
    setInputFields(values)
  }
  const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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

  const handleChange = (value: any) => {
    console.log(`selected ${value}`)
  }

  const continueStep = () => {
    nextStep()
  }

  const comeBackStep = () => {
    prevStep()
  }

  return (
    <Form layout='horizontal' wrapperCol={{ span: 16 }} hideRequiredMark>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              id='standard-full-width'
              label='Họ và tên'
              style={{ margin: 8 }}
              placeholder='Họ và tên'
              onChange={handelOnChange}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <Radio.Group name='gender' className={classes.paper} onChange={(e: any) => handelOnChange(e)} value={value}>
              <Radio value='Nam'>Nam</Radio>
              <Radio value='Nữ'>Nữ</Radio>
              <Radio value='Khác'>Khác</Radio>
            </Radio.Group>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='standard-full-width'
              label='CMND số'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              placeholder='CMND số'
              fullWidth
              type='number'
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
              onChange={handelOnChange}
              placeholder='Hộ chiếu số'
              type='number'
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
              style={{ margin: 8 }}
              onChange={handelOnChange}
              placeholder='Nơi thường trú'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              id='standard-full-width'
              label='Địa chỉ chỗ ở hiện nay'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              placeholder='Địa chỉ chỗ ở hiện nay'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id='standard-full-width'
              label='Số điện thoại liên hệ'
              style={{ margin: 8 }}
              type='number'
              onChange={handelOnChange}
              placeholder='Số điện thoại liên hệ'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
        </Grid>
      </div>
      <header style={{ margin: '10px 5px 10px', fontSize: '150%', fontWeight: 500 }}>
        Thông tin về người có thay đổi hộ khẩu, nhân khẩu
      </header>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <TextField
              id='standard-full-width'
              label='Họ và tên'
              style={{ margin: 8 }}
              placeholder='Họ và tên'
              onChange={handelOnChange}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <Radio.Group className={classes.paper} onChange={(e: any) => handelOnChange(e)} value={value}>
              <Radio value='Nam'>Nam</Radio>
              <Radio value='Nữ'>Nữ</Radio>
              <Radio value='Khác'>Khác</Radio>
            </Radio.Group>
          </Grid>

          <Grid item xs={2}>
            <TextField
              id='standard-full-width'
              label='Ngày, tháng, năm sinh'
              style={{ margin: 8 }}
              placeholder='Ngày, tháng, năm sinh'
              onChange={handelOnChange}
              name='dayOfBirth'
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
              placeholder='Nơi sinh'
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
              label='Nguyên quán'
              onChange={handelOnChange}
              style={{ margin: 8 }}
              placeholder='Nguyên quán'
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
              label='Dân tộc'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              placeholder='Dân tộc'
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
              label='Quốc tịch'
              onChange={handelOnChange}
              style={{ margin: 8 }}
              placeholder='Quốc tịch'
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
              onChange={handelOnChange}
              type='number'
              placeholder='CMND số'
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
              onChange={handelOnChange}
              style={{ margin: 8 }}
              type='number'
              placeholder='Hộ chiếu số'
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
              style={{ margin: 8 }}
              placeholder='Nghề nghiệp, nơi làm việc'
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
              style={{ margin: 8 }}
              placeholder='Nơi thường trú'
              onChange={handelOnChange}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>

          <Grid item xs={9}>
            <TextField
              id='standard-full-width'
              label='Địa chỉ chỗ ở hiện nay'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              placeholder='Địa chỉ chỗ ở hiện nay'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              id='standard-full-width'
              label='Số điện thoại liên hệ'
              onChange={handelOnChange}
              type='number'
              style={{ margin: 8 }}
              placeholder='Số điện thoại liên hệ'
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
              onChange={handelOnChange}
              label='Họ và tên chủ hộ'
              style={{ margin: 8 }}
              placeholder='Họ và tên chủ hộ'
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
              label='Quan hệ với chủ hộ'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              placeholder='Quan hệ với chủ hộ'
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
              label='Nội dung thay đổi hộ khẩu, nhân khẩu'
              style={{ margin: 8 }}
              placeholder='Nội dung thay đổi hộ khẩu, nhân khẩu'
              onChange={handelOnChange}
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
        </Grid>
      </div>
      <header style={{ margin: '10px 5px 10px', fontSize: '150%', fontWeight: 500 }}>Những người cùng thay đổi:</header>
      <div className={classes.root} style={{ marginLeft: 6 }}>
        {inputFields.map((item: any, index: number) => {
          return (
            <Grid key={index} container spacing={0} style={{ display: 'flex' }}>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Họ và tên'
                  size='small'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
                  color='secondary'
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
                  size='small'
                  type='date'
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
                  label='Giới tính'
                  size='small'
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
                  label='Nơi sinh'
                  size='small'
                  color='secondary'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
                  size='small'
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
                  label='Dân tộc'
                  size='small'
                  color='secondary'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
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
                  color='secondary'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
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
                  size='small'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          )
        })}
      </div>
      <ButtonGroup fullWidth>
        <Button
          onClick={continueStep}
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
  )
}
