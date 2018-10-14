import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { color } from '@storybook/addon-knobs/react'
import { ArrowRight, ArrowDown } from '../components/Arrow'
import { color as colors } from '../components/Helper'

storiesOf('Arrow', module)
  .addWithJSX(
    'Arrow Right',
    withInfo(`
      Right Arrow used in the homepage

      Add Markdown:
      ~~~js
          <Button>Test</Button>
      ~~~
    `)(() => <ArrowRight color={color('color', colors.arrowOrange)} />)
  )
  .addWithJSX(
    'Arrow Down',
    withInfo(`Down Arrow to potentially be used in the future`)(() => (
      <ArrowDown color={color('color', colors.arrowOrange)} />
    ))
  )
