import {Heading, CustomButton} from './styledComponent'
import './App.css'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button" outline={false}>
      Click
    </CustomButton>
    <CustomButton type="button" outline={true}>
      Click
    </CustomButton>
  </>
)

export default App
