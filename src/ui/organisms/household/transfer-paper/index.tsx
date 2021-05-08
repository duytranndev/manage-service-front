import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form, Radio } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import { ChangeEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { TransferPaperInterface } from '../../../../share/interface/transferpaper.interface'
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
  parentValues: TransferPaperInterface | any
}

export default function TransferPaper({ onNextStep, nextStep, parentValues }: StepFormProps) {
  const [formData, setFormData] = useState<TransferPaperInterface>(parentValues || null)
  const classes = useStyles()
  const [inputFields, setInputFields] = useState<any>([
    {
      _id: new Date().toLocaleString(),
      name: '',
      dayOfBirth: '',
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

  const handleChangeFieldInput = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const newInputFields = inputFields.map((item: { [x: string]: string; _id: string }) => {
      if (id === item._id) {
        item[e.target.name] = e.target.value
      }
      return item
    })
    // const values = [...inputFields]
    // values[index][e.target.name] = e.target.value
    setInputFields(newInputFields)
  }

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        _id: new Date().toLocaleString(),
        name: '',
        dayOfBirth: '',
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
      toast.error('Xin vui lòng điền đầy đủ thông tin...', {
        duration: 3000
      })
      return null
    }
    const firstFormData = {
      ...formData,
      member: inputFields
    }
    onNextStep(firstFormData)
    nextStep()
  }

  return (
    <>
      <header
        className='header'
        style={{
          margin: '10px 5px 10px',
          fontSize: '150%',
          fontWeight: 500,
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>
        Giấy chuyển hộ khẩu
      </header>
      <Form layout='horizontal' wrapperCol={{ span: 20 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
            Phần cấp cho người chuyển hộ khẩu
          </header>
          <Grid container spacing={2}>
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
                value={formData?.name || ''}
              />
            </Grid>

            <Grid item xs={3}>
              <Radio.Group name='gender' className={classes.paper} onChange={(e: any) => handelOnChange(e)}>
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
                required
                onChange={handelOnChange}
                name='dayOfBirth'
                value={formData?.dayOfBirth || ''}
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
                required
                value={formData?.birthplace || ''}
                placeholder='Nơi sinh'
                name='birthplace'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Nguyên quán'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='homeTown'
                value={formData?.homeTown || ''}
                placeholder='Nguyên quán'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Dân tộc'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                placeholder='Dân tộc'
                value={formData?.nation || ''}
                fullWidth
                name='nation'
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Tôn giáo'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                name='religion'
                //religion - tôn giáo
                value={formData?.religion || ''}
                placeholder='Tôn giáo'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Quốc tịch'
                name='nationality'
                //nationality quốc tịch
                style={{ margin: 8 }}
                required
                value={formData?.nationality || ''}
                placeholder='Quốc tịch'
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi thường trú'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.address || ''}
                required
                name='address'
                placeholder='Nơi thường trú'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Họ và tên chủ hộ nơi đi'
                style={{ margin: 8 }}
                placeholder='Họ và tên chủ hộ nơi đi'
                required
                name='nameOwn'
                value={formData?.nameOwn || ''}
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='Quan hệ với chủ hộ'
                onChange={handelOnChange}
                style={{ margin: 8 }}
                placeholder='Quan hệ với chủ hộ'
                required
                name='relative'
                value={formData?.relative || ''}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Lý do chuyển hộ khẩu'
                style={{ margin: 8 }}
                required
                placeholder='Lý do chuyển hộ khẩu'
                name='reason'
                value={formData?.reason || ''}
                fullWidth
                margin='normal'
                onChange={handelOnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Nơi chuyển đến'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                required
                name='destination' // nơi đến
                value={formData?.destination || ''}
                placeholder='Nơi chuyển đến'
                fullWidth
                margin='normal'
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
          Những người trong hộ cùng chuyển hộ khẩu
        </header>
        <div className={classes.root} style={{ marginLeft: 6 }}>
          {inputFields.map((item: any, index: number) => {
            return (
              <Grid key={item._id} container spacing={0} style={{ display: 'flex' }}>
                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='Họ và tên'
                    size='small'
                    color='secondary'
                    name='name'
                    value={inputFields?.name}
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
                    label='Ngày, tháng, năm sinh'
                    style={{ margin: 0 }}
                    placeholder='Ngày, tháng, năm sinh'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
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
                    label='Nguyên quán'
                    size='small'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    color='secondary'
                    name='domicile'
                    value={item.domicile}
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
                    name='nation'
                    value={item.nation}
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    size='small'
                    color='secondary'
                    name='nationality'
                    value={item.nationality}
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    color='secondary'
                    type='number'
                    name='cardId'
                    value={item.cardId}
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeFieldInput(item._id, e)}
                    size='small'
                    color='secondary'
                    name='relative'
                    value={item.relative}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>

                <Grid item xs={1}>
                  <ButtonGroup style={{ margin: '10px 10px' }}>
                    <button type='button'>
                      <HighlightOffIcon onClick={() => handleRemoveFields(item._id)} />
                    </button>
                    <button type='button'>
                      <AddCircleOutlineIcon onClick={handleAddFields} />
                    </button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            )
          })}

          <Button
            type='submit'
            variant='contained'
            fullWidth
            className={classes.button}
            color='primary'
            endIcon={<NavigateNextIcon />}>
            NEXT
          </Button>
        </div>
        <Toaster />
      </Form>
    </>
  )
}
