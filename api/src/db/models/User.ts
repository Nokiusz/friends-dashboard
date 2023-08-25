import mongoose, { Schema as Model } from 'mongoose';

interface User {
  id: string;
  discordId: string;
  email: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
}

const UserModel = new Model<User>({
  discordId: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  avatar: {
    type: mongoose.SchemaTypes.String,
    required: false,
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
