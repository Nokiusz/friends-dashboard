import mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

mongoose
  .connect(process.env.MONGODOB_CONNECTION_STRING!)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error(err);
  });
