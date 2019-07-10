<template>
  <div>
    <label :for="attrs.id" class="block text-gray-700 text-sm font-bold mb-2">
      <slot />
    </label>
    <input
      v-model="model"
      v-bind="attrs"
      :type="attrType"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { computed, createComponent, value } from 'vue-function-api';
import { BaseInputType } from './type';

export default createComponent({
  inheritAttrs: false,

  props: {
    value: {},
    type: {},
  } as BaseInputType.Props,

  setup(props, ctx) {
    const { type: attrType = 'text' } = props;

    const model = computed(
      () => props.value,
      value => {
        ctx.emit('input', value);
      },
    );

    return {
      model,
      attrType,
      attrs: ctx.attrs,
    };
  },
});
</script>
