import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form, Radio } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import { ChangeEvent, default as React, useState } from 'react'

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
  parentValues: TransferPaperField
}
type TransferPaperField = {
  name?: string
  dayOfBirth?: string
  birthplace?: string
  gender?: string
  nameOwn?: string //họ tên chủ hộ nơi đi
  homeTown?: string // nguyên quán
  nation?: string // dân tộc
  religion?: string // tôn giáo
  address?: string // địa chỉ
  domicile?: string // nguyên quán
  nationality?: string // quốc tịch
  cardId?: string
  relative?: string // quan hệ
  reason?: string //lý do
  destination?: string // nơi chuyển đến
}

export default function TransferPaper({ onNextStep, nextStep, parentValues }: StepFormProps) {
  const [formData, setFormData] = useState<TransferPaperField>(parentValues)
  const classes = useStyles()
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
    const firstFormData = {
      ...formData,
      member: inputFields
    }
    onNextStep(firstFormData)
    nextStep()
  }

  return (
    <Form layout='horizontal' wrapperCol={{ span: 20 }} hideRequiredMark>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <TextField
              id='standard-full-width'
              label='Họ và tên'
              style={{ margin: 8 }}
              placeholder='Họ và tên'
              fullWidth
              required
              margin='normal'
              name='name'
              onChange={handelOnChange}
              value={formData.name || ''}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <Radio.Group
              name='gender'
              className={classes.paper}
              onChange={(e: any) => handelOnChange(e)}
              value={formData.gender || ''}>
              <Radio value='Nam'>Nam</Radio>
              <Radio value='Nữ'>Nữ</Radio>
              <Radio value='Khác'>Khác</Radio>
            </Radio.Group>
          </Grid>

          <Grid item xs={4}>
            <TextField
              id='standard-full-width'
              label='Ngày, tháng, năm sinh'
              style={{ margin: 8 }}
              placeholder='Ngày, tháng, năm sinh'
              onChange={handelOnChange}
              name='dayOfBirth'
              value={formData.dayOfBirth || ''}
              type='date'
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
              label='Nơi sinh'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              value={formData.birthplace || ''}
              placeholder='Nơi sinh'
              name='birthplace'
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
              label='Nguyên quán'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              name='homeTown'
              value={formData.homeTown || ''}
              placeholder='Nguyên quán'
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
              label='Dân tộc'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              placeholder='Dân tộc'
              value={formData.nation || ''}
              fullWidth
              name='nation'
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              id='standard-full-width'
              label='Tôn giáo'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              name='religion'
              //religion - tôn giáo
              value={formData.religion || ''}
              placeholder='Tôn giáo'
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
              label='Quốc tịch'
              name='nationality'
              //nationality quốc tịch
              style={{ margin: 8 }}
              value={formData.nationality || ''}
              placeholder='Quốc tịch'
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
              onChange={handelOnChange}
              value={formData.address || ''}
              name='address'
              placeholder='Nơi thường trú'
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
              label='Họ và tên chủ hộ nơi đi'
              style={{ margin: 8 }}
              placeholder='Họ và tên chủ hộ nơi đi'
              name='nameOwn'
              value={formData.nameOwn || ''}
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
              label='Quan hệ với chủ hộ'
              onChange={handelOnChange}
              style={{ margin: 8 }}
              placeholder='Quan hệ với chủ hộ'
              name='relative'
              value={formData.relative || ''}
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
              label='Lý do chuyển hộ khẩu'
              style={{ margin: 8 }}
              placeholder='Lý do chuyển hộ khẩu'
              name='reason'
              value={formData.reason || ''}
              fullWidth
              margin='normal'
              onChange={handelOnChange}
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='standard-full-width'
              label='Nơi chuyển đến'
              style={{ margin: 8 }}
              onChange={handelOnChange}
              name='destination' // nơi đến
              value={formData.destination || ''}
              placeholder='Nơi chuyển đến'
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
        Những người trong hộ cùng chuyển hộ khẩu
      </header>
      <div className={classes.root} style={{ marginLeft: 6 }}>
        {inputFields.map((item: any, index: number) => {
          return (
            <Grid key={index} container spacing={0} style={{ display: 'flex' }}>
              <Grid item xs={1}>
                <TextField
                  id='standard-secondary'
                  label='Họ và tên'
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
                  label='Ngày, tháng, năm sinh'
                  style={{ margin: 0 }}
                  placeholder='Ngày, tháng, năm sinh'
                  onChange={handelOnChange}
                  name='dayOfBirth'
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
                  label='Nguyên quán'
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
                  size='small'
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
                  label='CMND số (Hộ chiếu số)'
                  size='small'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
                  color='secondary'
                  type='number'
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(index, e)}
                  color='secondary'
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                <ButtonGroup style={{ margin: '10px 10px' }}>
                  <HighlightOffIcon onClick={() => handleRemoveFields(index)} />
                  <AddCircleOutlineIcon onClick={handleAddFields} />
                </ButtonGroup>
              </Grid>
            </Grid>
          )
        })}

        <Button
          onClick={continueStep}
          variant='contained'
          fullWidth
          className={classes.button}
          color='primary'
          endIcon={<NavigateNextIcon />}>
          NEXT
        </Button>
      </div>
    </Form>
  )
}
