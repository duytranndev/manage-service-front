import { Button, createStyles, Grid, makeStyles, TextField, Theme } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Form, Radio } from 'antd'
import ButtonGroup from 'antd/lib/button/button-group'
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
  const [aboutFamily, setAboutFamily] = useState<any>([
    {
      _id: new Date().toLocaleString(),
      name: '',
      dayOfBirth: '',
      gender: '',
      occupations: '',
      temporaryAddress: '',
      relative: ''
    }
  ])
  const [aboutYourself, setAboutYourself] = useState<any>([
    {
      _id: new Date().toLocaleString(),
      fromDate: '',
      address: '',
      occupations: ''
    }
  ])

  const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleChangeAboutFamily = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const newAboutFamily = aboutFamily.map((item: { [x: string]: string; _id: string }) => {
      if (id === item._id) {
        item[e.target.name] = e.target.value
      }
      return item
    })
    setAboutFamily(newAboutFamily)
  }

  const handleChangeAboutYourSelf = (id: string, e: ChangeEvent<HTMLInputElement>) => {
    const newAboutYourself = aboutYourself.map((item: { [x: string]: string; _id: string }) => {
      if (id === item._id) {
        item[e.target.name] = e.target.value
      }
      return item
    })
    setAboutYourself(newAboutYourself)
  }

  const handleAddAboutFamily = () => {
    setAboutFamily([
      ...aboutFamily,
      {
        _id: new Date().toLocaleString(),
        name: '',
        dayOfBirth: '',
        gender: '',
        occupations: '',
        temporaryAddress: '',
        relative: ''
      }
    ])
  }

  const handleAddAboutYourSelf = () => {
    setAboutYourself([
      ...aboutYourself,
      {
        _id: new Date().toLocaleString(),
        fromDate: '',
        address: '',
        occupations: ''
      }
    ])
  }

  const handleRemoveAboutFamily = (id: string) => {
    if (aboutFamily.length === 1) {
      return null
    }
    const values = [...aboutFamily]
    // values.splice(index, 1)
    values.splice(
      values.findIndex((item) => item._id === id),
      1
    )
    setAboutFamily(values)
  }

  const handleRemoveAboutYourSelf = (id: string) => {
    if (aboutYourself.length === 1) {
      return null
    }
    const values = [...aboutYourself]
    // values.splice(index, 1)
    values.splice(
      values.findIndex((item) => item._id === id),
      1
    )
    setAboutYourself(values)
  }
  const continueStep = () => {
    if (!formData) {
      return null
    }
    const thirdFormData = {
      ...formData,
      aboutFamily,
      aboutYourself
    }
    onNextStep(thirdFormData)
    nextStep()
  }

  const comeBackStep = () => {
    prevStep()
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <header
        style={{
          margin: '10px 5px 10px',
          fontSize: '150%',
          fontWeight: 500,
          textTransform: 'uppercase',
          textAlign: 'center'
        }}>
        B???n khai nh??n kh???u
      </header>
      <Form layout='horizontal' wrapperCol={{ span: 16 }} onSubmitCapture={continueStep} hideRequiredMark>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              <TextField
                id='standard-full-width'
                label='H??? v?? t??n (1)'
                style={{ margin: 8 }}
                placeholder='H??? v?? t??n'
                name='name'
                value={formData?.name || ''}
                onChange={handelOnChange}
                required
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
                <Radio value='N???'>N???</Radio>
                <Radio value='Kh??c'>Kh??c</Radio>
              </Radio.Group>
            </Grid>

            <Grid item xs={2}>
              <TextField
                id='standard-full-width'
                required
                label='Ng??y, th??ng, n??m sinh'
                type='date'
                style={{ margin: 8 }}
                placeholder='Ng??y, th??ng, n??m sinh'
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
                required
                id='standard-full-width'
                label='N??i sinh'
                style={{ margin: 8 }}
                placeholder='N??i sinh'
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
                label='Nguy??n qu??n'
                style={{ margin: 8 }}
                placeholder='Nguy??n qu??n'
                fullWidth
                required
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
                label='D??n t???c'
                style={{ margin: 8 }}
                required
                placeholder='D??n t???c'
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
                required
                id='standard-full-width'
                label='T??n gi??o'
                style={{ margin: 8 }}
                placeholder='T??n gi??o'
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
                required
                label='Qu???c t???ch'
                style={{ margin: 8 }}
                placeholder='Qu???c t???ch'
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
                label='CMND s???'
                style={{ margin: 8 }}
                type='number'
                required
                placeholder='CMND s???'
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
                id='standard-full-width'
                label='H??? chi???u s???'
                style={{ margin: 8 }}
                type='number'
                placeholder='H??? chi???u s???'
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
                label='N??i th?????ng tr??'
                required
                style={{ margin: 8 }}
                placeholder='N??i th?????ng tr??'
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
                required
                label='?????a ch??? ch??? ??? hi???n nay'
                style={{ margin: 8 }}
                placeholder='?????a ch??? ch??? ??? hi???n nay'
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
                label='Tr??nh ????? h???c v???n (2)'
                style={{ margin: 8 }}
                placeholder='Tr??nh ????? h???c v???n'
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
                label='Tr??nh ????? chuy??n m??n (3)'
                style={{ margin: 8 }}
                placeholder='Tr??nh ????? chuy??n m??n'
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
                label='Bi???t ti???ng d??n t???c'
                style={{ margin: 8 }}
                placeholder='Bi???t ti???ng d??n t???c'
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
                label='Tr??nh ????? ngo???i ng???'
                style={{ margin: 8 }}
                placeholder='Tr??nh ????? ngo???i ng???'
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
                label='Ngh??? nghi???p, n??i l??m vi???c'
                required
                style={{ margin: 8 }}
                placeholder='Ngh??? nghi???p, n??i l??m vi???c'
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
              Ti???n ??n (T???i danh, h??nh ph???t, theo b???n ??n s???, ng??y, th??ng, n??m c???a T??a ??n):
            </header>
            <Grid item xs={12}>
              <TextArea
                // required
                name='criminalRecord'
                value={formData?.criminalRecord || ''}
                onChange={(e: any) => handelOnChange(e)}
                placeholder='Ti???n ??n (T???i danh, h??nh ph???t, theo b???n ??n s???, ng??y, th??ng, n??m c???a T??a ??n)'
                rows={4}
              />
            </Grid>
          </Grid>
        </div>
        <header style={{ margin: '10px 6px 10px', fontSize: '120%', fontWeight: 500 }}>
          T??m t???t v??? gia ????nh (B???, m???; v???/ch???ng; con; anh, ch???, em ru???t) (4):
        </header>
        <div className={classes.root} style={{ marginLeft: 6 }}>
          {aboutFamily.map((item: any, index: number) => {
            return (
              <Grid key={item._id} container spacing={0} style={{ display: 'flex' }}>
                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='H??? v?? t??n'
                    size='small'
                    color='secondary'
                    name='name'
                    value={item?.name || ''}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
                    color='secondary'
                    name='relative'
                    value={item.relative}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>

                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='Ngh??? nghi???p'
                    size='small'
                    color='secondary'
                    name='occupations'
                    value={item.occupations}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id='standard-secondary'
                    label='?????a ch??? ch??? ??? hi???n nay'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutFamily(item._id, e)}
                    size='small'
                    color='secondary'
                    name='temporaryAddress'
                    value={item.temporaryAddress}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>

                <Grid item xs={1}>
                  <ButtonGroup style={{ margin: '10px 10px' }}>
                    <button type='button'>
                      <HighlightOffIcon onClick={() => handleRemoveAboutFamily(item._id)} />
                    </button>
                    <button type='button'>
                      <AddCircleOutlineIcon onClick={handleAddAboutFamily} />
                    </button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            )
          })}
        </div>
        <header style={{ margin: '10px 5px 10px', fontSize: '120%', fontWeight: 500 }}>
          T??m t???t v??? b???n th??n (T??? ????? 14 tu???i tr??? l??n ?????n nay ??? ????u, l??m g??):
        </header>

        <div className={classes.root} style={{ marginLeft: 6 }}>
          {aboutYourself.map((item: any, index: number) => {
            return (
              <Grid container key={item._id} spacing={0} style={{ display: 'flex' }}>
                <Grid item xs={2}>
                  <TextField
                    id='standard-secondary'
                    label='T??? th??ng, n??m ?????n th??ng, n??m'
                    size='small'
                    color='secondary'
                    name='fromDate'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutYourSelf(item._id, e)}
                    value={item.fromDate}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id='standard-secondary'
                    label='Ch??? ??? (Ghi r?? s??? nh??, ???????ng; th??n, x??m, l??ng, ???p, b???n,...; x??/ph?????ng/th??? tr???n; qu???n/huy???n; t???nh/th??nh ph???. N???u ??? n?????c ngo??i th?? ghi r?? t??n n?????c)'
                    color='secondary'
                    name='address'
                    value={item.address}
                    size='small'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutYourSelf(item._id, e)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id='standard-secondary'
                    label='Ngh??? nghi???p, n??i l??m vi???c'
                    size='small'
                    name='occupations'
                    value={item.occupations}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAboutYourSelf(item._id, e)}
                    color='secondary'
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={1}>
                  <ButtonGroup style={{ margin: '10px 10px' }}>
                    <button type='button'>
                      <HighlightOffIcon onClick={() => handleRemoveAboutYourSelf(item._id)} />
                    </button>
                    <button type='button'>
                      <AddCircleOutlineIcon onClick={handleAddAboutYourSelf} />
                    </button>
                  </ButtonGroup>
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
            (2) Ghi r?? tr??nh ????? h???c v???n cao nh???t (Ti???n s???, Th???c s???, ?????i h???c, Cao ?????ng, Trung c???p, t???t nghi???p ph??? th??ng
            trung h???c, t???t nghi???p ph??? th??ng c?? s???...; n???u kh??ng bi???t ch??? th?? ghi r?? "kh??ng bi???t ch???");
            <br />
            (3) Ghi r?? chuy??n ng??nh ???????c ????o t???o ho???c tr??nh ????? tay ngh???, b???c th???, chuy??n m??n k??? thu???t kh??c ???????c ghi
            trong v??n b???ng, ch???ng ch???.
            <br />
            (4) Ghi c??? cha, m???, con nu??i; ng?????i nu??i d?????ng; ng?????i gi??m h??? theo quy ?????nh c???a ph??p lu???t (n???u c??).
          </p>
        </div>
        <ButtonGroup>
          <Button
            onClick={comeBackStep}
            fullWidth
            variant='contained'
            className={classes.button}
            startIcon={<KeyboardBackspaceIcon />}>
            BACK
          </Button>
          <Button
            type='submit'
            variant='contained'
            className={classes.button}
            color='primary'
            fullWidth
            endIcon={<NavigateNextIcon />}>
            NEXT
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  )
}
