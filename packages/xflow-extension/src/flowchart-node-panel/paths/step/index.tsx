import { createPath } from '../../utils'
import { NODE_PADDING } from '../../constants'
import { getConfig } from '../utils'

export const StepNodePath = props => {
  const { width, height } = getConfig(props)

  const path = [
    ['M', NODE_PADDING, NODE_PADDING],
    ['L', width - width / 4, NODE_PADDING],
    ['L', width - NODE_PADDING, height / 2],
    ['L', width - width / 4, height - NODE_PADDING],
    ['L', NODE_PADDING, height - NODE_PADDING],
    ['L', width / 4, height / 2],
    ['Z'],
  ]

  return [createPath(path)]
}
