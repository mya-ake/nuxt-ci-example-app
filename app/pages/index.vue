<template>
  <div class="w-full max-w-xs mx-auto py-24">
    <SignInForm v-bind="signInFormProps" />
  </div>
</template>

<script lang="ts">
import { createComponent, watch } from 'vue-function-api';
import { SignInForm, SignInFormType } from '@/components/forms';
import { OnSubmit } from '@/hooks';
import { IHttp } from '../lib/http';

const createSubmit = (
  http: IHttp,
): OnSubmit<SignInFormType.SignInFormValues> => {
  return async formValues => {
    console.log(formValues);
    const response = await http.request({
      url: 'users/login?test=a',
      method: 'post',
      body: formValues,
    });
    console.log(response);
  };
};

export default createComponent({
  components: {
    SignInForm,
  },

  setup(_, ctx) {
    const { $_http } = ctx.root;
    const signInFormProps: SignInFormType.Props = {
      submit: createSubmit($_http),
    };
    return {
      signInFormProps,
    };
  },
});
</script>
