import { ConfigCore } from '@core/index';
import { ENV_DEVELOPMENT, ENV_PRODUCTION, ENV_TEST } from '@utils/index';

class AppConfig extends ConfigCore {
  env: string;
  name: string;

  constructor() {
    super();

    this.env = this.set<string>(
      'ENV',
      this.joi.string().valid(ENV_DEVELOPMENT, ENV_PRODUCTION, ENV_TEST),
      ENV_DEVELOPMENT,
    );
    this.name = this.set<string>('APP_NAME', this.joi.string().required(), '');
  }
}

export default new AppConfig();
