import { value } from 'vue-function-api';

export interface FormValues {
  [name: string]: string | number | boolean;
}

type OnSubmit<FV extends FormValues> = (form: FV) => void | Promise<void>;

export function useForm<FV extends FormValues>(
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
