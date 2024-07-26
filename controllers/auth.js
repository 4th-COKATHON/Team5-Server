const bcrypt = require('bcrypt');
const passport = require('passport');
const User = require('../models/user');

exports.join = async (req, res, next) => {
    const { nick, password } = req.body;
    try {
        const exUser = await User.findOne({ where: { nick } });
        if (exUser) {
            return res.status(409).json({ message: 'User already exists' }); // 409 Conflict
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            nick,
            password: hash,
        });
        return res.status(201).json({ message: 'User registered successfully' }); // 201 Created
    } catch (error) {
        console.error(error);
        return next(error);
    }
}

exports.login = (req, res, next) => {
    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError);
            return res.status(500).json({ message: 'Authentication error' }); // 500 Internal Server Error
        }
        if (!user) {
            return res.status(401).json({ message: info.message }); // 401 Unauthorized
        }
        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError);
                return res.status(500).json({ message: 'Login error' }); // 500 Internal Server Error
            }
            return res.status(200).json({ message: 'Login successful' }); // 200 OK
        });
    })(req, res, next);
};

exports.logout = (req, res) => {
    req.logout(() => {
        res.status(200).json({ message: 'Logout successful' }); // 200 OK
    });
};
