import styled from 'styled-components'
import { color } from './Helper'

const Arrow = styled.div`
    height: 15px;
    width: 15px;
    border: 1px solid ${color.arrowOrange};
    border-width: 3px 3px 0 0;
    transform: rotate(45deg);

    &:after {
        content: '';
        display: block;
        height: 15px;
        width: 15px;
        border: 1px solid ${color.arrowOrange};
        border-width: 3px 3px 0 0;
        transform: translate(8px, -11px);
    }
`

export default Arrow