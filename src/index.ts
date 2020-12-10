import { logger } from './core';

logger.fatal('Logger FATAL', new Error('MESSAGE - FATAL'));
logger.error('Logger ERROR', new Error('MESSAGE - ERROR'));
logger.warn('Logger WARN', new Error('MESSAGE - WARN'));
logger.info('Logger INFO', { message: 'MESSAGE - INFO' });
logger.debug('Logger DEBUG', { message: 'MESSAGE - DEBUG' });
logger.trace('Logger TRACE', { message: 'MESSAGE - TRACE' });
