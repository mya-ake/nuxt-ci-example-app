import { OnSubmit } from '@/hooks';

export namespace SignInFormType {
  export interface SignInFormValues {
    id: string;
    password: string;
  }

  export type SignInFormInitialValues = Optional<SignInFormValues>;

  export type Props = {
    initialValues?: SignInFormInitialValues;
    submit: OnSubmit<SignInFormValues>;
  };
}
