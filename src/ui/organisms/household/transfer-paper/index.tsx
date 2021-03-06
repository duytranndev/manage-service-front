import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form, Radio } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
import { ChangeEvent, useState } from 'react'
import toast from 'react-hot-toast'
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
      toast.error('Xin vui l??ng ??i???n ?????y ????? th??ng tin...', {
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
        Gi???y chuy???n h??? kh???u
      </header>
      <Form layout='horizontal' wrapperCol={{ span: 20 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
            Ph???n c???p cho ng?????i chuy???n h??? kh???u
          </header>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='H??? v?? t??n (1)'
                style={{ margin: 8 }}
                placeholder='H??? v?? t??n'
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
                <Radio value='N???'>N???</Radio>
                <Radio value='Kh??c'>Kh??c</Radio>
              </Radio.Group>
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Ng??y, th??ng, n??m sinh'
                style={{ margin: 8 }}
                placeholder='Ng??y, th??ng, n??m sinh'
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
                label='N??i sinh'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                required
                value={formData?.birthplace || ''}
                placeholder='N??i sinh'
                name='birthplace'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Nguy??n qu??n'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='homeTown'
                value={formData?.homeTown || ''}
                placeholder='Nguy??n qu??n'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='D??n t???c'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                placeholder='D??n t???c'
                value={formData?.nation || ''}
                fullWidth
                name='nation'
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='T??n gi??o'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                name='religion'
                //religion - t??n gi??o
                value={formData?.religion || ''}
                placeholder='T??n gi??o'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                id='standard-full-width'
                label='Qu???c t???ch'
                name='nationality'
                //nationality qu???c t???ch
                style={{ margin: 8 }}
                required
                value={formData?.nationality || ''}
                placeholder='Qu???c t???ch'
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='N??i th?????ng tr??'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.address || ''}
                required
                name='address'
                placeholder='N??i th?????ng tr??'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='H??? v?? t??n ch??? h??? n??i ??i'
                style={{ margin: 8 }}
                placeholder='H??? v?? t??n ch??? h??? n??i ??i'
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
                label='Quan h??? v???i ch??? h???'
                onChange={handelOnChange}
                style={{ margin: 8 }}
                placeholder='Quan h??? v???i ch??? h???'
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
                label='L?? do chuy???n h??? kh???u'
                style={{ margin: 8 }}
                required
                placeholder='L?? do chuy???n h??? kh???u'
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
                label='N??i chuy???n ?????n'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                required
                name='destination' // n??i ?????n
                value={formData?.destination || ''}
                placeholder='N??i chuy???n ?????n'
                fullWidth
                margin='normal'
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
          Nh???ng ng?????i trong h??? c??ng chuy???n h??? kh???u (2)
        </header>
        <div className={classes.root} style={{ marginLeft: 6 }}>
          {inputFields.map((item: any, index: number) => {
            return (
              <Grid key={item._id} container spacing={0} style={{ display: 'flex' }}>
                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='H??? v?? t??n'
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
                    label='Ng??y, th??ng, n??m sinh'
                    style={{ margin: 0 }}
                    placeholder='Ng??y, th??ng, n??m sinh'
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
                    label='Gi???i t??nh'
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
                    label='Nguy??n qu??n'
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
                    label='D??n t???c'
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
                    label='Qu???c t???ch'
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
                    label='CMND s??? (H??? chi???u s???)'
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
                    label='Quan h??? (3)'
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
          <header style={{ margin: '15px 5px 5px', fontSize: '130%', fontWeight: 600, display: 'inline-block' }}>
            *Ch?? th??ch
          </header>

          <div className='article' style={{ margin: '15px', display: 'inline-block' }}>
            <p id='6177'>
              (1) Vi???t ch??? in hoa ????? d???u;
              <br />
              (2) Ghi theo s??? ????ng k?? th?????ng tr??, s??? h??? kh???u c??c th??ng tin c???a ng?????i trong h??? c??ng chuy???n h??? kh???u.
              <br />
              (3) Ghi m???i quan h??? v???i ng?????i chuy???n h??? kh???u t???i M???c 1.
              <br />
              Ghi ch??: L???p 02 b???n, m???t b???n c???p cho c??ng d??n ????? n???p t???i n??i ????ng k?? th?????ng tr??, m???t b???n l??u t???i n??i c???p
              gi???y.
            </p>
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
        </div>
      </Form>
    </>
  )
}
