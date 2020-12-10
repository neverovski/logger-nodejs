import { LogFn } from 'pino';

// Automatically concatenate and cast to string consecutive parameters
export function logMethod (args: any[], method: LogFn) {
  if (args.length === 2) {
    args[0] = `${args[0]} %j`;
  }
  method.apply(this, args);
}
