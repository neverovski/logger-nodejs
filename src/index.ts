import { Logger } from './utils';

Logger.fatal('Logger FATAL', new Error('MESSAGE - FATAL'));
Logger.error('Logger ERROR', new Error('MESSAGE - ERROR'));
Logger.warn('Logger WARN', new Error('MESSAGE - WARN'));
Logger.info('Logger INFO', { message: 'MESSAGE - INFO' });
Logger.debug('Logger DEBUG', { message: 'MESSAGE - DEBUG' });
Logger.trace('Logger TRACE', { message: 'MESSAGE - TRACE' });
