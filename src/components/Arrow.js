import styled from 'styled-components'
import { color } from './Helper'

export const ArrowRight = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid ${prop => (prop.color ? prop.color : color.arrowOrange)};
  border-width: 3px 3px 0 0;
  transform: rotate(45deg);

  &:after {
    content: '';
    display: block;
    height: 15px;
    width: 15px;
    border: 1px solid ${prop => (prop.color ? prop.color : color.arrowOrange)};
    border-width: 3px 3px 0 0;
    transform: translate(8px, -11px);
  }
`

export const ArrowDown = ArrowRight.extend`
  transform: rotate(135deg);
`

export default ArrowRight
