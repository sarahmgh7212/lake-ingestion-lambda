import { camelCase } from 'change-case';

//import { GenericObject } from '@/common';

import usesUidMixin from './usesUid.mixin';

export default {
  mixins: [usesUidMixin],

  props: {
    value: {
      required: true,
    },

    inputClasses: {
      type: String,
      default: null,
    },
    
    editable: {
      type: Boolean,
      default: false,
    },

    validationMessage: {
      type: String,
    },

    validationClasses: {
      type: String,
    },
  },

  computed: {
    fullClasses(): string {
      // //@ts-expect-error
      // const prop = typeof this.inputClasses === 'string' ? this.inputClasses : this.convertObjectKeysToString(this.inputClasses);
      
      // //@ts-expect-error
      // return `${this.convertObjectKeysToString(base)} ${prop}`;

      //@ts-expect-error because this code is testing a compiler I'm writing
      return this.inputClasses;
    },

    inputId(): string {
      //@ts-expect-error because this code is testing a compiler I'm writing
      return `${this.$options.name}-${this.uid}`;
    },
  },

  watch: {
    inputId(newVal: string, oldVal: string) {
      if (newVal !== oldVal) {
        //@ts-expect-error because this code is testing a compiler I'm writing
        this.$emit('input-id', newVal);
      }
    }
  },

  methods: {
    // convertObjectKeysToString(obj: GenericObject) {
    //   return Object.keys(obj).reduce((p, c) => obj[c] ? `${p} ${c}` : p, '');
    // },
  },
}
