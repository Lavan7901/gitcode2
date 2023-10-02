import { Button } from "../Components/Button";


export default {
  title: "Button",
  component: Button,
}

const Temp = args => <Button {...args} />
 
export const Red = Temp.bind({})
Red.args = {
  label: "Calculate",
}
export const Primary = Temp.bind({})
Primary.args = {
  label: "Reset",
}

