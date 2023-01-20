import React from "react";
import { Config } from "../../utils/interfaces";
import { useFormContext } from "react-hook-form";

function Input({ name, label, props, type }: Config<"input">) {
  const { register } = useFormContext();
  return (
    <div className="text-left my-2">
      <div className="pb-1 text-sm">{label}</div>
      <input
        {...register(name)}
        className="w-full border py-2 px-4 block placeholder:italic placeholder:text-slate-400 block"
        {...props}
        type={type}
      />
    </div>
  );
}

export default Input;
