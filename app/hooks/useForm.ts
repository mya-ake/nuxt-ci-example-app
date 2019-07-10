import { value } from 'vue-function-api';

type FormValue = string | number | boolean;

export type FormValues<T> = { [P in keyof T]: T[P] } extends {
  [k: string]: FormValue;
}
  ? { [P in keyof T]: T[P] }
  : never;

export type OnSubmit<FV> = (form: FV) => void | Promise<void>;

export function useForm<FV extends FormValues<FV>>(
  formValues: FV,
  onSubmitFunction: OnSubmit<FV>,
) {
  const form = value(formValues);

  const onSubmit = () => onSubmitFunction({ ...form.value });

  return {
    form,
    onSubmit,
  };
}
