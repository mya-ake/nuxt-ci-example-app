<template>
  <div class="w-full max-w-xs mx-auto py-24">
    <SignInForm v-bind="signInFormProps" />
  </div>
</template>

<script lang="ts">
import { createComponent, watch } from 'vue-function-api';
import { SignInForm, SignInFormType } from '@/components/forms';
import { OnSubmit } from '@/hooks';

const submit: OnSubmit<SignInFormType.SignInFormValues> = formValues => {
  console.log(formValues);
};

export default createComponent({
  components: {
    SignInForm,
  },

  setup() {
    const signInFormProps: SignInFormType.Props = {
      submit,
    };
    return {
      signInFormProps,
    };
  },
});
</script>
