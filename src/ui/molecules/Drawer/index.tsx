import { Button, Drawer } from 'antd'
import { ReactNode } from 'react'

type DrawerComponentProps = {
  children?: ReactNode
  onClose: () => void
  visible: boolean
  width: number
  title: string
}

const DrawerComponent = ({ children, title, width, onClose, visible }: DrawerComponentProps): JSX.Element => {
  return (
    <Drawer
      title={title}
      width={width}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <div
          style={{
            textAlign: 'right'
          }}>
          <Button onClick={onClose} style={{ marginRight: 65 }}>
            Cancel
          </Button>
        </div>
      }>
      {children}
    </Drawer>
  )
}

export default DrawerComponent
