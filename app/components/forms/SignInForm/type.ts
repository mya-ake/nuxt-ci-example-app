import { OnSubmit } from '@/hooks';

export namespace SignInFormType {
  export interface SignInFormValues {
    id: string;
    password: string;
  }

  export type Props = {
    initialValues?: Optional<SignInFormValues>;
    submit: OnSubmit<SignInFormValues>;
  };
}
