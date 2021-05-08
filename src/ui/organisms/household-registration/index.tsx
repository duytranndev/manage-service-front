import { Steps } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import ChangementPaper from '../household/changement-paper'
import DemographicDeclaration from '../household/demographic-declaration'
import TransferPaper from '../household/transfer-paper'
import './index.scss'
const { Step } = Steps

const HouseholdRegistration = ({ nameDocument }: any): JSX.Element => {
  const [step, setStep] = useState<number>(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [formValues, setFormValues] = useState<any>({
    firstForm: undefined,
    secondForm: undefined,
    thirdForm: undefined
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

  const handleOnConfirm = () => {
    const document = {
      name: formValues.secondForm?.name,
      address: formValues.secondForm?.address,
      phone: formValues.secondForm?.phone,
      nameField: 'Dân sự',
      nameDocument: nameDocument,
      profiles: {
        transferPaper: formValues.firstForm,
        changementPaper: formValues.secondForm,
        demographicDeclaration: formValues.thirdForm
      }
    }
    // toast.promise(,{

    // })
    console.log('document :>> ', document)
    // setStep(1)
    // setIsModalVisible(false)
  }

  const handleCancel = () => {
    setStep(1)
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

  return (
    <>
      {Steps(step)}
      <Toaster />
    </>
  )
}

export default HouseholdRegistration