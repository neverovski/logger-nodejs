export class AssertionError extends Error {
  code: string;
  status: number;
  message: string;

  constructor(message: string) {
    super();
    this.message = message || 'Assertion error';
    this.code = 'ASSERTION_ERROR';
    this.status = 500;
  }
}
