export interface ErrorDetails {
    message: string;
    field: string;
    type: string;
  }
export class NebulaValidationError extends Error{
    public name: string;
    public details: Array<ErrorDetails>;
  
    constructor(message: string, details: Array<ErrorDetails>) {
      super(message);
  
      this.name = 'ValidationError';
      this.details = details
    }
  }