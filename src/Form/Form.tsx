import React from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormReturn,
  useForm,
  FormProvider
} from "react-hook-form";

import { Input, TextArea } from "./FormInputs";

interface Props {
  onSubmit: SubmitHandler<FieldValues>;
  formMethods: UseFormReturn<FieldValues>;
}

function Form({
  onSubmit,
  children,
  formMethods
}: React.PropsWithChildren<Props>) {
  const { handleSubmit } = useForm();

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full" id="hook-form">
        {children}
      </form>
    </FormProvider>
  );
}

Form.Input = Input;
Form.TextAreaInput = TextArea;

export default Form;
