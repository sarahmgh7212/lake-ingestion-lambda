<template>
  <div class="neb-field-text">
    <input 
      type="email"
      :id="inputId"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @keypress="$emit('keypress', $event)"
      :placeholder="placeholder"
      class="h-10 rounded border px-3 w-full"
      :class="fullClasses"
      v-if="editable"
    />
    <p v-if="!editable">{{ value }}</p>
    <p v-if="validationMessage" class="text-red-400 mt-1" :class="validationClasses">{{ validationMessage }}</p>
  </div>
</template>

<script>
import formComponentMixin from './ui/mixins/formComponent.mixin';

export default {
  name: 'NebEmail',

  mixins: [formComponentMixin],

  props: {
    placeholder: {
      type: String,
    },

    hidden: {
      type: Boolean,
    },
  },
};
</script>