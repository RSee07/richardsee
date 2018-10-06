import React from 'react'
import { storiesOf } from '@storybook/react'
import { ArrowRight, ArrowDown } from '../components/Arrow'

storiesOf('Arrow', module)
    .addWithJSX('Arrow Right', () => (
        <ArrowRight />
    ))
    .addWithJSX('Arrow Down', () => (
        <ArrowDown />
    ))