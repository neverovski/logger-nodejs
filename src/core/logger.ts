import pino from 'pino';
import { Assert as assert } from './assert';
import { appConfig } from '../config';
import { ENV_TEST } from '../utils/constants';
import { logMethod } from '../utils/helpers';

interface ILogger {
  name: string;
}

/**
 * Logger information
 */
class Logger {
  private fatalLogger: pino.Logger;
  private errorLogger: pino.Logger;
  private warnLogger: pino.Logger;
  private infoLogger: pino.Logger;
  private debugLogger: pino.Logger;
  private traceLogger: pino.Logger;

  constructor(app: ILogger) {
    this.fatalLogger = pino({
      name: `${app.name.toLowerCase()}::fatal`,
      level: 'fatal',
      hooks: { logMethod },
      // prettyPrint: this.prettyPrint
    });
    this.errorLogger = pino({
      name: `${app.name.toLowerCase()}::error`,
      level: 'error',
      hooks: { logMethod },
      prettyPrint: this.prettyPrint
    });
    this.warnLogger = pino({
      name: `${app.name.toLowerCase()}::warn`,
      level: 'warn',
      hooks: { logMethod },
      prettyPrint: this.prettyPrint
    });
    this.infoLogger = pino({
      name: `${app.name.toLowerCase()}::info`,
      level: 'info',
      hooks: { logMethod },
      prettyPrint: this.prettyPrint
    });
    this.debugLogger = pino({
      name: `${app.name.toLowerCase()}::debug`,
      level: 'debug',
      hooks: { logMethod },
      prettyPrint: this.prettyPrint
    });
    this.traceLogger = pino({
      name: `${app.name.toLowerCase()}::trace`,
      level: 'trace',
      hooks: { logMethod },
      prettyPrint: this.prettyPrint
    });
  }

  get prettyPrint() {
    return {
      colorize: true,
      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
      ignore: 'hostname'
    }
  }

  /**
   * Fatal error
   *
   * @param message
   * @param error
   * @param meta
   */
  fatal(message: string, error: Error, meta?: any): void {
    assert.string(message, { required: true });
    assert.isOk(error, { required: true });
    assert.object(meta);

    if (appConfig.nodeENV !== ENV_TEST) {
      this.fatalLogger.fatal(message, meta || error.toString());
    }
  }

  /**
   * Error
   *
   * @param message
   * @param error
   * @param meta
   */
  error(message: string, error: Error, meta?: any): void {
    assert.string(message, { required: true });
    assert.isOk(error, { required: true });
    assert.object(meta);

    if (appConfig.nodeENV !== ENV_TEST) {
      this.errorLogger.error(message, meta || error.toString());
    }
  }

  /**
   * Warn
   *
   * @param message
   * @param error
   * @param meta
   */
  warn(message: string, error: Error, meta?: any): void {
    assert.string(message, { required: true });
    assert.isOk(error, { required: true });
    assert.object(meta);

    if (appConfig.nodeENV !== ENV_TEST) {
      this.warnLogger.warn(message, meta || error.toString());
    }
  }

  /**
   * Info
   *
   * @param message
   * @param meta
   */
  info(message: string, meta: any = {}): void {
    assert.string(message, { required: true });
    assert.isOk(meta);

    if (appConfig.nodeENV !== ENV_TEST) {
      this.infoLogger.info(message, Object.keys(meta).length ? meta : '');
    }
  }

  /**
   * Debug
   *
   * @param message
   * @param meta
   */
  debug(message: string, meta: any = {}): void {
    assert.string(message, { required: true });
    assert.isOk(meta);

    if (appConfig.nodeENV !== ENV_TEST) {
      this.debugLogger.debug(message, Object.keys(meta).length ? meta : '');
    }
  }

  /**
   * Trace
   *
   * @param message
   * @param meta
   */
  trace(message: string, meta: any = {}): void {
    assert.string(message, { required: true });
    assert.isOk(meta);

    if (appConfig.nodeENV !== ENV_TEST) {
      this.traceLogger.trace(message, Object.keys(meta).length ? meta : '');
    }
  }
}

export const logger = new Logger({ name: appConfig.name });
