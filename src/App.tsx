import * as React from "react";
import { SubmitHandler, FieldValues, useForm } from "react-hook-form";
import "./styles.css";
import { sampleFormData } from "./utils/constants";
import DynamicForm from "./Form/DynamicForm";

export default function App() {
  const { handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log("datass", data);
  };

  return (
    <div className="App w-11/12 mx-auto">
      <h1>Reusable react hook form for your next project</h1>
      <div className="w-full flex flex-col items-start justify-center ml-2">
        <DynamicForm onSubmit={onSubmit} data={sampleFormData} />
        {/* <button type="submit" form="hook-form" onClick={handleSubmit(onSubmit)}>
          Submit
        </button> */}
      </div>
    </div>
  );
}
