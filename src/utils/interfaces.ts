import React from "react";

export type FormInputypes = "input" | "textarea";

export interface Config<T extends FormInputypes> {
  name: string;
  type: T;
  label: string;
  props?: React.ComponentPropsWithoutRef<T>;
}

export type ComponentMapProps<T extends FormInputypes> = {
  [key in FormInputypes]: React.FC<Config<T>>;
};
