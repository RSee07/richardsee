import { configure, setAddon, addDecorator } from '@storybook/react'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs/react'

setAddon(JSXAddon)
addDecorator(withKnobs)
// Find all files in src directory that end in stories.js
const req = require.context('../src', true, /.stories.js$/)

function loadStories() {
    req.keys().forEach(file => req(file))
}

configure(loadStories, module)