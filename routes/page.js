const express = require("express");
const { renderMain } = require("../controllers/page");
const { render } = require("nunjucks");

const router = express.Router();

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
});

router.get('/profile', isLoggedIn, renderProfile);
router.get('/join', isNotLoggedIn, renderJoin);

module.exports = router;