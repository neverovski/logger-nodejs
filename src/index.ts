import { Logger } from '@core/index';

Logger.fatal('Logger FATAL', new Error('MESSAGE - FATAL'));
Logger.error('Logger ERROR', new Error('MESSAGE - ERROR'));
Logger.warn('Logger WARN', new Error('MESSAGE - WARN'));
Logger.info('Logger INFO');
Logger.debug('Logger DEBUG');
Logger.trace('Logger TRACE');
