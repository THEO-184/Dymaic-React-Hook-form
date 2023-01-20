import { Config, ComponentMapProps } from "./interfaces";
import Form from "../Form/Form";

export const sampleFormData: Config<"textarea" | "input">[] = [
  {
    name: "first_name",
    label: "First Name",
    type: "input",
    props: {
      placeholder: "Please Enter Your First name"
    }
  },
  {
    name: "last_name",
    label: "Last Name",
    type: "input",
    props: {
      placeholder: "Please Enter Your Last name"
    }
  },
  {
    name: "message",
    label: "Send Us Mail",
    type: "textarea",
    props: {
      placeholder: "Enter your message here"
    }
  }
];

export const componentMap: ComponentMapProps<any> = {
  input: Form.Input,
  textarea: Form.TextAreaInput
};
