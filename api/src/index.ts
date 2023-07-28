import { config as dotenvConfig } from 'dotenv';
import { init } from './utils/init';

dotenvConfig();

const _PORT_ = process.env.PORT || 3001;

async function main() {
  try {
    const app = init();
    app.listen(_PORT_, () => {
      console.log(`Server running on port ${_PORT_}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
