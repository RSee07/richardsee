import React from 'react'
import { storiesOf } from '@storybook/react'
import { ArrowRight, ArrowDown } from '../components/Arrow'

storiesOf('Arrow', module)
    .add('Arrow Right', () => (
        <ArrowRight />
    ))
    .add('Arrow Down', () => (
        <ArrowDown />
    ))