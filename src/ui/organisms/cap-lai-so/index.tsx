import { Steps } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { PROFILE_URL } from '../../../share/common/api.constants'
import { moduleApi } from '../../../share/handle/api.module'
import ChangementPaper from '../household/changement-paper'
const { Step } = Steps

const CapLaiSo = ({ nameDocument }: any): JSX.Element => {
  const [step, setStep] = useState<number>(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formValues, setFormValues] = useState<any>({
    firstForm: undefined
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
    if (step === 1) return null
    setStep((state) => state - 1)
  }

  const handleOnConfirm = async () => {
    const document = {
      name: formValues.firstForm?.name,
      address: formValues.firstForm?.temporaryAddress,
      phone: formValues.firstForm?.phone,
      nameField: 'Dân sự',
      nameDocument: nameDocument,
      profile: {
        changementPaper: formValues.firstForm
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
    step === 1 && setIsModalVisible(true)
  }, [step])

  const Steps = (visible: number) => {
    switch (visible) {
      case 1:
        return (
          <ChangementPaper
            parentValues={formValues.firstForm}
            prevStep={prevStep}
            nextStep={nextStep}
            onNextStep={handleSecondFormChange}
          />
        )
      case 2:
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

export default CapLaiSo
