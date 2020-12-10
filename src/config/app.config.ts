import { ConfigCore } from '../core';
import { ENV_DEVELOPMENT, ENV_PRODUCTION, ENV_TEST } from '../utils/Constants';

class AppConfig extends ConfigCore {
  nodeENV: string;
  name: string;

  constructor() {
    super();
    this.nodeENV = this.set('NODE_ENV', (v) => [ENV_DEVELOPMENT, ENV_PRODUCTION, ENV_TEST].includes(v), ENV_DEVELOPMENT);
    this.name = this.set('APP_NAME', this.joi.string().required(), 'LOGGER');
  }
}

export const appConfig = new AppConfig();
