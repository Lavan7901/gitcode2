import { Input } from "../Components/Input";


export default {
  title: "Input",
  component: Input,
}

const Temp = args => <Input {...args} />
 
export const Red = Temp.bind({})
Red.args = {
    type: "number",
    
}
