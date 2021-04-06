import { NebulaValidationError } from '@/common'

export default {
  data() {
    return {
      validationErrors: [],
    };
  },
  
  methods: {
    validationErrorHandler(error: Error) {
      if (error instanceof NebulaValidationError) {
        //@ts-ignore
        this.validationErrors = error.details;
      } else {
        throw error;
      }
    },

    getValidationMessage(field: string): string {
      //@ts-expect-error
      return (this.validationErrors.find(e => e.field === field) || {}).message;
    },

    resetValidation() {
      //@ts-expect-error
      this.validationErrors = [];
    }
  },
};
