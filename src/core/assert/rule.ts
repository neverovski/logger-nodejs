export class Rule {
  validator: any;
  description: string;

  constructor(src?: { validator: any; description: string }) {
    if (!src.validator || typeof src.validator !== 'function') {
      throw new Error('Invalid validator type');
    }
    if (!src.description || typeof src.description !== 'string') {
      throw new Error('Invalid validation rule description.');
    }

    this.validator = src.validator;
    this.description = src.description;
  }
}
