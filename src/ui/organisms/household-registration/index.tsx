import { Button, Steps } from 'antd'
import Modal from 'antd/lib/modal/Modal'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import ChangementPaper from '../household/changement-paper'
import DemographicDeclaration from '../household/demographic-declaration'
import TransferPaper from '../household/transfer-paper'
const { Step } = Steps

const HouseholdRegistration = (): JSX.Element => {
  const [step, setStep] = useState<number>(1)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const notify = () => toast.success('Successfully saved!')
  const [formValues, setFormValues] = useState({
    firstForm: {},
    secondForm: {},
    thirdForm: {}
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

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const Steps = (visible: number) => {
    switch (visible) {
      case 1:
        return <TransferPaper nextStep={nextStep} onNextStep={handleFirstFormChange} />
      case 2:
        return <ChangementPaper nextStep={nextStep} onNextStep={handleSecondFormChange} />
      case 3:
        return <DemographicDeclaration nextStep={nextStep} onNextStep={handleThirdFormCChange} />

      case 4:
        return (
          <>
            <Button type='primary' onClick={showModal}>
              Open Modal
            </Button>
            <Modal title='Basic Modal' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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

export default HouseholdRegistration
