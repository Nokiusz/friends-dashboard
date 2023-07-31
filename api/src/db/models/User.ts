import mongoose, { Schema as Model } from 'mongoose';

interface User {
    id: string;
    email: string;
    accessToken: string;
    refreshToken: string;
}

const UserModel = new Model<User>({
  id: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  accessToken: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  refreshToken: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});


export default mongoose.model('users', UserModel);