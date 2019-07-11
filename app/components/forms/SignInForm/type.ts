import { Optional } from '@/types/utils';
import { OnSubmit } from '@/hooks';

export namespace SignInFormType {
  export type SignInFormValues = {
    id: string;
    password: string;
  };

  export type SignInFormInitialValues = Optional<SignInFormValues>;

  export type Props = {
    initialValues?: SignInFormInitialValues;
    submit: OnSubmit<SignInFormValues>;
  };
}
