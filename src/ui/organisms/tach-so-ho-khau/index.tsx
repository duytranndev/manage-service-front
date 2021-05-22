import { Steps } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { PROFILE_URL } from '../../../share/common/api.constants'
import { moduleApi } from '../../../share/handle/api.module'
import ChangementPaper from '../household/changement-paper'
import SoHoKhau from '../household/so-ho-khau'
import './index.scss'
const { Step } = Steps

const TachHoKhau = ({ nameDocument }: any): JSX.Element => {
  const [step, setStep] = useState<number>(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
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
  const handleThirdFormCChange = (values: any) => {
    console.log('values :>> ', values)

    setFormValues({
      ...formValues,
      thirdForm: values
    })
  }

  const nextStep = () => {
    setStep((state) => state + 1)
  }

  const prevStep = () => {
    if (step === 0) return null
    setStep((state) => state - 1)
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOnConfirm = async () => {
    const document = {
      name: formValues.secondForm?.name,
      address: formValues.secondForm?.temporaryAddress,
      phone: formValues.secondForm?.phone,
      fieldName: 'Dân sự',
      nameDocument: nameDocument,
      profiles: {
        registrationBook: formValues.firstForm,
        changementPaper: formValues.secondForm
      }
    }
    const addProfile = moduleApi.create(PROFILE_URL, document)
    await toast.promise(addProfile, {
      loading: 'Loading',
      success: 'Đăng ký xử lý dịch vụ thành công',
      error: 'Đăng ký xử lý dịch vụ thất bại'
    })
    const status = await addProfile.then((res) => res.data.message)
    const data = await addProfile.then((res) => res.data.data)
    if (status === 'success') {
      console.log('data :>> ', data)
      setFormValues({})
      setStep(1)
      setIsModalVisible(false)
    }
  }

  const handleCancel = () => {
    setStep(1)
    setIsModalVisible(false)
  }

  useEffect(() => {
    step === 2 && setIsModalVisible(true)
  }, [step])

  const Steps = (visible: number) => {
    switch (visible) {
      case 1:
        return <SoHoKhau parentValues={formValues.firstForm} nextStep={nextStep} onNextStep={handleFirstFormChange} />
      case 2:
        return (
          <ChangementPaper
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
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </>
        )
      default:
        break
    }
  }

  return <>{Steps(step)}</>
}

export default TachHoKhau
