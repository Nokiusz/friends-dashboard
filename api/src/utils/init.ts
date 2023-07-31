import express, { Express } from 'express';
import routes from '../routes';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();
require('../strategies/discord');

export function init(): Express {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );

  app.use(
    session({
      secret: 'NOKIUSZ',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/api', routes);
  return app;
}
