const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // creating an user instance in the mongoDB
      const existingUser = await User.findOne({ googleId: profile.id });

      if (!existingUser) {
        const user = await new User({
          googleId: profile.id,
          name: profile.displayName,
        }).save();
        done(null, user);
      }

      done(null, existingUser);
    }
  )
);
