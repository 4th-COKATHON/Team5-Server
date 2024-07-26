const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const User = require('../models/user');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'nick',
        passwordField: 'password',
    }, async (nick, password, done) => {
        try {
            const user = await User.findOne({ where: { nick } });
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const result = await bcrypt.compare(password, user.password);
            if (result) {
                return done(null, user);
            }
            return done(null, false, { message: 'Incorrect password.' });
        } catch (error) {
            console.error(error);
            return done(error);
        }
    }));
};