import passport from 'passport';
import { Profile, Strategy } from 'passport-discord';
import { VerifyCallback } from 'passport-oauth2';
import { User } from '../db/models';

passport.serializeUser((user: any, done) => {
  return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    return user ? done(null, user) : done(null, null);
  } catch (error) {
    console.error(error);
    done(error, null);
  }
});

passport.use(
  new Strategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      callbackURL: process.env.DISCORD_REDIRECT_ID,
      scope: [
        'identify',
        'guilds',
        'email',
        // 'relationships.read'
      ],
    },
    async (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback
    ) => {
      console.log(profile);
      const { id, email, avatar } = profile;

      try {
        const user = await User.findOneAndUpdate(
          { id, email, avatar },
          { accessToken, refreshToken },
          { new: true }
        );

        if (user) return done(null, user);

        const newUser = await User.create({
          id,
          email,
          avatar,
          accessToken,
          refreshToken,
        });

        const savedUser = await newUser.save();
        return done(null, savedUser);
      } catch (error) {
        console.error(error);
        done(error as Error, undefined);
      }
    }
  )
);
