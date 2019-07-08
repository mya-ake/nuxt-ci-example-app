<template>
  <div class="w-full max-w-xs mx-auto py-24">
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <label for="id" class="block text-gray-700 text-sm font-bold mb-2"
          >ID</label
        >
        <input
          id="id"
          v-model="form.id"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2"
          >Password</label
        >
        <input
          id="password"
          v-model="form.password"
          type="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { useMessage, useForm, FormValues } from '@/hooks';

interface SignInFormValues extends FormValues {
  id: string;
  password: string;
}

const createFormValues = (): SignInFormValues => ({ id: '', password: '' });

const submit = (formValues: SignInFormValues) => {
  console.log(formValues);
};

export default Vue.extend({
  setup() {
    const { form, onSubmit } = useForm(createFormValues(), submit);
    const { message, hasMessage } = useMessage();
    return {
      form,
      message,
      hasMessage,
      onSubmit,
    };
  },
});
</script>
