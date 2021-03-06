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
        Phi???u b??o thay ?????i h??? kh???u, nh??n kh???u
      </header>
      <Form layout='horizontal' wrapperCol={{ span: 16 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
            Th??ng tin v??? ng?????i vi???t phi???u b??o
          </header>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='H??? v?? t??n (1)'
                required
                style={{ margin: 8 }}
                placeholder='H??? v?? t??n'
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
                <Radio value='N???'>N???</Radio>
                <Radio value='Kh??c'>Kh??c</Radio>
              </Radio.Group>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                label='CMND s???'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='CMND s???'
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
                label='H??? chi???u s???'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                name='passport'
                value={formData?.passport || ''}
                placeholder='H??? chi???u s???'
                type='number'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                required
                label='N??i th?????ng tr??'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                placeholder='N??i th?????ng tr??'
                name='address'
                value={formData?.address || ''}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='?????a ch??? ch??? ??? hi???n nay'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                required
                placeholder='?????a ch??? ch??? ??? hi???n nay'
                name='temporaryAddress'
                value={formData?.temporaryAddress}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='S??? ??i???n tho???i li??n h???'
                style={{ margin: 8 }}
                required
                type='number'
                name='phone'
                value={formData?.phone || ''}
                onChange={handelOnChange}
                placeholder='S??? ??i???n tho???i li??n h???'
                fullWidth
                margin='normal'
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
          Th??ng tin v??? ng?????i c?? thay ?????i h??? kh???u, nh??n kh???u
        </header>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='H??? v?? t??n (1)'
                required
                style={{ margin: 8 }}
                placeholder='H??? v?? t??n'
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
                <Radio value='N???'>N???</Radio>
                <Radio value='Kh??c'>Kh??c</Radio>
              </Radio.Group>
            </Grid>

            <Grid item xs={2}>
              <TextField
                id='standard-full-width'
                required
                label='Ng??y, th??ng, n??m sinh'
                style={{ margin: 8 }}
                placeholder='Ng??y, th??ng, n??m sinh'
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
                label='N??i sinh'
                onChange={handelOnChange}
                style={{ margin: 8 }}
                required
                placeholder='N??i sinh'
                name='birthplacePeopleChange'
                value={formData?.birthplacePeopleChange}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                id='standard-full-width'
                label='Nguy??n qu??n'
                required
                onChange={handelOnChange}
                style={{ margin: 8 }}
                placeholder='Nguy??n qu??n'
                name='homeTownPeopleChange'
                value={formData?.homeTownPeopleChange}
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='D??n t???c'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                name='nationPeopleChange'
                value={formData?.nationPeopleChange}
                placeholder='D??n t???c'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='Qu???c t???ch'
                onChange={handelOnChange}
                style={{ margin: 8 }}
                required
                name='nationalityPeopleChange'
                value={formData?.nationalityPeopleChange}
                placeholder='Qu???c t???ch'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='CMND s???'
                required
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.cardIdPeopleChange}
                name='cardIdPeopleChange'
                type='number'
                placeholder='CMND s???'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='H??? chi???u s???'
                onChange={handelOnChange}
                value={formData?.passportPeopleChange}
                name='passportPeopleChange'
                style={{ margin: 8 }}
                type='number'
                placeholder='H??? chi???u s???'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='Ngh??? nghi???p, n??i l??m vi???c'
                style={{ margin: 8 }}
                onChange={handelOnChange}
                value={formData?.occupationsPeopleChange}
                name='occupationsPeopleChange'
                required
                placeholder='Ngh??? nghi???p, n??i l??m vi???c'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='N??i th?????ng tr??'
                required
                style={{ margin: 8 }}
                name='addressPeopleChange'
                value={formData?.addressPeopleChange}
                placeholder='N??i th?????ng tr??'
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='?????a ch??? ch??? ??? hi???n nay'
                style={{ margin: 8 }}
                required
                onChange={handelOnChange}
                value={formData?.temporaryAddressPeopleChange}
                name='temporaryAddressPeopleChange'
                placeholder='?????a ch??? ch??? ??? hi???n nay'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                id='standard-full-width'
                label='S??? ??i???n tho???i li??n h???'
                required
                onChange={handelOnChange}
                name='phonePeopleChange'
                value={formData?.phonePeopleChange}
                type='number'
                style={{ margin: 8 }}
                placeholder='S??? ??i???n tho???i li??n h???'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                onChange={handelOnChange}
                required
                label='H??? v?? t??n ch??? h???'
                value={formData?.nameOwn}
                name='nameOwn'
                style={{ margin: 8 }}
                placeholder='H??? v?? t??n ch??? h???'
                fullWidth
                margin='normal'
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id='standard-full-width'
                required
                label='Quan h??? v???i ch??? h???'
                style={{ margin: 8 }}
                name='relative'
                value={formData?.relative}
                onChange={handelOnChange}
                placeholder='Quan h??? v???i ch??? h???'
                fullWidth
                margin='normal'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='standard-full-width'
                label='N???i dung thay ?????i h??? kh???u, nh??n kh???u (2)'
                style={{ margin: 8 }}
                required
                name='content'
                value={formData?.content}
                placeholder='N???i dung thay ?????i h??? kh???u, nh??n kh???u'
                onChange={handelOnChange}
                fullWidth
                margin='normal'
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '10px 5px 10px', fontSize: '130%', fontWeight: 500 }}>
          Nh???ng ng?????i c??ng thay ?????i
        </header>
        <div className={classes.root} style={{ marginLeft: 6 }}>
          {inputFields.map((item: any, index: number) => {
            return (
              <Grid key={item._id} container spacing={0} style={{ display: 'flex' }}>
                <Grid item xs={1}>
                  <TextField
                    id='standard-secondary'
                    label='H??? v?? t??n'
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
                    label='Ng??y, th??ng, n??m sinh'
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
                    label='Gi???i t??nh'
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
                    label='N??i sinh'
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
                    label='Ngh??? nghi???p'
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
                    label='D??n t???c'
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
                    label='Qu???c t???ch'
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
                    label='CMND s??? (H??? chi???u s???)'
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
                    label='Quan h???'
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
        <header style={{ margin: '15px 5px 5px', fontSize: '130%', fontWeight: 600, display: 'inline-block' }}>
          *Ch?? th??ch
        </header>

        <div className='article' style={{ marginLeft: '15px', display: 'inline-block' }}>
          <p id='6177'>
            (1) Vi???t ch??? in hoa ????? d???u;
            <br />
            (2) Ghi t??m t???t n???i dung thay ?????i h??? kh???u, nh??n kh???u. V?? d???: ????ng k?? th?????ng tr??, t???m tr??; thay ?????i n??i ????ng
            k?? th?????ng tr??, t???m tr??; t??ch s??? h??? kh???u; ??i???u ch???nh nh???ng thay ?????i trong s??? h??? kh???u ...
            <br />
            (3) Ghi r?? ?? ki???n c???a ch??? h??? l?? ?????ng ?? cho ????ng k?? th?????ng tr??, ????ng k?? t???m tr?? ho???c ?????ng ?? cho t??ch s??? h???
            kh???u; ch??? h??? k?? v?? ghi r?? h??? t??n, ng??y, th??ng, n??m.
            <br />
            (4) ??p d???ng ?????i v???i tr?????ng h???p: X??c nh???n vi???c c??ng d??n tr?????c ????y ???? ????ng k?? th?????ng tr?? v?? tr?????ng h???p c???p l???i
            s??? h??? kh???u do b??? m???t.
            <br />
            Ghi ch??: Tr?????ng h???p ng?????i vi???t phi???u b??o c??ng l?? ng?????i c?? thay ?????i h??? kh???u, nh??n kh???u th?? c??ng d??n ch??? c???n
            k?? khai nh???ng n???i dung quy ?????nh t???i m???c II
          </p>
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
