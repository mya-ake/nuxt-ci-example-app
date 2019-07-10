<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-4">
      <BaseInput id="id" v-model="form.id">ID</BaseInput>
    </div>

    <div class="mb-4">
      <BaseInput id="password" v-model="form.password" type="password"
        >Password</BaseInput
      >
    </div>

    <p v-if="hasMessage" class="text-sm text-red-500 mb-4">{{ message }}</p>

    <div class="flex items-center">
      <button
        type="submit"
        class="font-bold py-2 px-4 rounded bg-blue-500 text-white hover:bg-blue-700"
      >
        Sign In
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { createComponent } from 'vue-function-api';
import { SignInFormType } from './type';
import { BaseInput } from '@/components/basics';
import { useForm, useMessage } from '@/hooks';

const createFormValues = (
  initialValues: SignInFormType.SignInFormInitialValues,
): SignInFormType.SignInFormValues => {
  return { id: '', password: '', ...initialValues };
};

export default createComponent({
  components: {
    BaseInput,
  },

  props: {
    initialValues: {},
    submit: {},
  } as SignInFormType.Props,

  setup(props) {
    const { submit, initialValues } = props;
    const { form, onSubmit } = useForm(
      createFormValues(initialValues || {}),
      submit,
    );
    const { message, hasMessage } = useMessage();

    return {
      form,
      onSubmit,
      message,
      hasMessage,
    };
  },
});
</script>
