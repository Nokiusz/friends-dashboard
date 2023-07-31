import passport from 'passport';
import { Profile, Strategy } from 'passport-discord';
import { VerifyCallback } from 'passport-oauth2';
import { User } from '../db/models';

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
      console.log(accessToken, refreshToken);
      console.log(profile);
      const { id, email } = profile;

      try {
        const user = await User.findOneAndUpdate(
          { id, email },
          { accessToken, refreshToken },
          { new: true }
        );

        if (user) return done(null, user);

        const newUser = await User.create({
          id,
          email,
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

//https://discord.com/api/oauth2/authorize?client_id=1133707894655832125&permissions=51200&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&response_type=code&scope=bot%20identify%20guilds%20gdm.join%20email%20relationships.read%20dm_channels.read
