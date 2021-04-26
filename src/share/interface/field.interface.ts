import { BaseInterface } from './base.interface'
import { UnitInterface } from './unit.interface'

export interface FieldInterface extends BaseInterface {
  description?: string
  fieldCode?: string
  subMenu?: UnitInterface[]
}
