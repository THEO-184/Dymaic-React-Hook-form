import React from "react";
import { Config } from "../../utils/interfaces";
import { useFormContext } from "react-hook-form";

function TextArea({ name, label, props }: Config<"textarea">) {
  const { register } = useFormContext();
  return (
    <div className="text-left my-2">
      <div className="pb-1 text-sm">{label}</div>
      <textarea
        {...props}
        {...register(name)}
        className="w-full border p-3"
      ></textarea>
    </div>
  );
}

export default TextArea;
