import React from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import { Config, FormInputypes } from "../utils/interfaces";

import { componentMap } from "../utils/constants";
import Form from "./Form";

interface Props<T extends FormInputypes> {
  data: Config<T>[];
  onSubmit: SubmitHandler<FieldValues>;
}

function DynamicForm<T extends FormInputypes>({
  data,
  onSubmit,
  children
}: React.PropsWithChildren<Props<T>>) {
  const formMethods = useForm();
  console.log("dyna,ic", formMethods.watch());
  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <p>Dynamic Form</p>
      {data?.map((properties, index) => {
        return React.createElement(componentMap[properties.type], {
          ...properties,
          key: index
        });
      })}
      <button type="submit">Submit</button>
    </Form>
  );
}

export default DynamicForm;
