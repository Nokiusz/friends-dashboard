import mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODOB_CONNECTION_STRING!);
    console.log('Connected to MongoDB');
  }
  catch(err){
    console.error(err);
  }
}

connectToMongoDB();