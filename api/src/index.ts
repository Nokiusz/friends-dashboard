import express, { Express } from 'express';
import { config as dotenvConfig } from 'dotenv';
import routes from './routes';

dotenvConfig();

const _PORT_ = process.env.PORT || 3001;

function createApp(): Express {
  const app = express();
  app.use('/', routes);
  return app;
}

async function main() {
  try {
    const app = createApp();
    app.listen(_PORT_, () => {
      console.log(`Server running on port ${_PORT_}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
