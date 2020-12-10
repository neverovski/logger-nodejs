import pino from 'pino';
import path from 'path';
import * as Join from '@hapi/joi';
import { config } from 'dotenv';

config({ path: path.join(process.cwd(), '.env') });

export default class ConfigCore {
  get joi(): Join.Root {
    return Join;
  }

  private get warnLogger(): pino.Logger {
    return pino({
      name: 'env-warning',
      prettyPrint: { translateTime: 'SYS:standard' },
    });
  }

  /**
   * get environment variable
   * if env variable missing: log warn and get default value
   * validate value and return it
   * @param env
   * @param validator
   * @param defaultVal
   * @returns {*}
   */
  set(env: any, validator: any, defaultVal: any): any {
    let value;
    if (process.env[env] || process.env[env] === '') {
      value = process.env[env];
    } else {
      if (defaultVal === undefined) {
        throw new Error(`Missing default value "${env}".`);
      }
      value = defaultVal;
      this.warnLogger.warn(`Missing env variable: "${env}". Default value was applied: ${defaultVal}`);
    }

    if (validator && (typeof validator === 'function' || typeof validator === 'object')) {
      if (typeof validator === 'object') {
        // joi object
        const joiResult = validator.validate(value);
        if (!joiResult.error) return value;
        throw new Error(`Wrong "${env}" variable; Value: "${value}" is invalid. ${joiResult.error}`);
      }

      if (!validator(value)) {
        throw new Error(`Wrong "${env}" variable; Value: "${value}" is invalid.`);
      }

      return value;
    }

    throw new Error('validator should be a function or joi rule.');
  }
}
