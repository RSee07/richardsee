import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// All that is required to use React 16 to test with Enzyme
// Separate test setup file could also have been created as Adapter only needs to be added once
// Adapter required for React 16, 15, etc using specific version of enzyme-adapter-react-xx
configure({ adapter: new Adapter() })