import Modal from 'antd/lib/modal/Modal'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { PROFILE_URL } from '../../../share/common/api.constants'
import { moduleApi } from '../../../share/handle/api.module'
import ChangementPaper from '../household/changement-paper'
import DemographicDeclaration from '../household/demographic-declaration'
import TransferPaper from '../household/transfer-paper'
import './index.scss'

const HouseholdRegistration = ({ nameDocument }: any): JSX.Element => {
  const [step, setStep] = useState<number>(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formValues, setFormValues] = useState<any>({
    firstForm: undefined,
    secondForm: undefined,
    thirdForm: undefined
  })

  const handleFirstFormChange = (values: any) => {
    setFormValues({
      ...formValues,
      firstForm: values
    })
  }
  const handleSecondFormChange = (values: any) => {
    setFormValues({
      ...formValues,
      secondForm: values
    })
  }
  const handleThirdFormCChange = (values: any) => {
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

  const handleOnConfirm = async () => {
    const document = {
      name: formValues.secondForm?.name,
      address: formValues.secondForm?.address,
      phone: formValues.secondForm?.phone,
      fieldName: 'Dân sự',
      nameDocument: nameDocument,
      profiles: {
        transferPaper: formValues.firstForm,
        changementPaper: formValues.secondForm,
        demographicDeclaration: formValues.thirdForm
      }
    }
    const addProfile = moduleApi.create(PROFILE_URL, document)
    await toast.promise(addProfile, {
      loading: 'Loading',
      success: (res) => `Đăng ký xử lý dịch vụ thành công, mã hồ sơ của bạn là: ${res.data.data.profileCode}`,
      error: 'Đăng ký xử lý dịch vụ thất bại'
    })
    const status = await addProfile.then((res) => res.data.message)
    const data = await addProfile.then((res) => res.data.data)
    if (status === 'success') {
      setFormValues({})
      setStep(1)
      setIsModalVisible(false)
    }
  }

  const handleCancel = () => {
    setStep((step) => step - 1)
    setIsModalVisible(false)
  }

  useEffect(() => {
    step === 3 && setIsModalVisible(true)
  }, [step])

  const Steps = (visible: number) => {
    switch (visible) {
      case 1:
        return (
          <TransferPaper parentValues={formValues.firstForm} nextStep={nextStep} onNextStep={handleFirstFormChange} />
        )
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
          <DemographicDeclaration
            parentValues={formValues.thirdForm}
            prevStep={prevStep}
            nextStep={nextStep}
            onNextStep={handleThirdFormCChange}
          />
        )

      case 4:
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

export default HouseholdRegistration
