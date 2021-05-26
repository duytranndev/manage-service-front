import { Modal, Steps } from 'antd'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { PROFILE_URL } from '../../../share/common/api.constants'
import { moduleApi } from '../../../share/handle/api.module'
import BirthCertificate from '../document/birth-certificate'
import RegistrationDeclaredPaperBirth from '../document/registration-declared-paper-birth'
const { Step } = Steps

const SignUpForBirth = ({ nameDocument }: any): JSX.Element => {
  const [step, setStep] = useState<number>(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const [formValues, setFormValues] = useState<any>({
    firstForm: undefined,
    secondForm: undefined
  })

  const handleFirstFormChange = (values: any) => {
    console.log('values :>> ', values)
    setFormValues({
      ...formValues,
      firstForm: values
    })
  }
  const handleSecondFormChange = (values: any) => {
    console.log('values :>> ', values)

    setFormValues({
      ...formValues,
      secondForm: values
    })
  }

  const nextStep = () => {
    setStep((state) => state + 1)
  }

  const prevStep = () => {
    if (step === 0) return null
    setStep((state) => state - 1)
  }

  const handleOnConfirm = async () => {
    const document = {
      name: formValues.firstForm?.nameRequest,
      address: formValues.firstForm?.addressRequester,
      phone: formValues.firstForm?.phone,
      fieldName: 'Dân sự',
      nameDocument: nameDocument,
      profiles: {
        registrationDeclaredPaperBirth: formValues.firstForm,
        birthCertificate: formValues.secondForm
      }
    }
    console.log('document :>> ', document)
    const addProfile = moduleApi.create(PROFILE_URL, document)
    await toast.promise(
      addProfile,
      {
        loading: 'Loading',
        success: (res) => `Đăng ký xử lý dịch vụ thành công, mã hồ sơ của bạn là: ${res.data.data.profileCode}`,
        error: (err) => `Đăng ký xử lý dịch vụ thất bại ${err.toString()}`
      },
      {
        style: {
          minWidth: '250px',
          fontSize: '110%'
        },
        success: {
          duration: 15000,
          icon: '🔥'
        }
      }
    )
    const status = await addProfile.then((res) => res.data.message)
    const data = await addProfile.then((res) => res.data.data)
    if (status === 'success') {
      console.log('data :>> ', data)
      setFormValues({})
      setStep(1)
      setIsModalVisible(false)
      dispatch({ type: 'SET_PROFILE', payload: data })
      history.push('/my-profile')
    } else {
      setIsModalVisible(false)
    }
  }

  const handleCancel = () => {
    setStep((step) => step - 1)
    setIsModalVisible(false)
  }

  useEffect(() => {
    step === 2 && setIsModalVisible(true)
  }, [step])

  const Steps = (visible: number) => {
    switch (visible) {
      case 1:
        return (
          <RegistrationDeclaredPaperBirth
            parentValues={formValues.firstForm}
            nextStep={nextStep}
            onNextStep={handleFirstFormChange}
          />
        )
      case 2:
        return (
          <BirthCertificate
            parentValues={formValues.secondForm}
            prevStep={prevStep}
            nextStep={nextStep}
            onNextStep={handleSecondFormChange}
          />
        )
      case 3:
        return (
          <>
            <Modal title='Basic Modal' visible={isModalVisible} onOk={handleOnConfirm} onCancel={handleCancel}>
              Bạn đã chắc chắn?
            </Modal>
          </>
        )
      default:
        break
    }
  }

  return <>{Steps(step)}</>
}
export default SignUpForBirth
