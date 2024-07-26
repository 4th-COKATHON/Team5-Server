const express = require("express");
const cookieparser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config();
const authRouter = require("./routes/auth");
const friendRouter = require("./routes/friend");
const bucketlistRouter = require("./routes/bucketlist");
const diaryRouter = require("./routes/diary");
const { sequelize } = require("./models");
const passportConfig = require("./passport");
const Endpoints = require("./constant/endpoints");

const app = express();
passportConfig();
app.set("port", process.env.PORT || 8001);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error("데이터베이스 연결 실패:", err);
  });

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);
app.use("/api", bucketlistRouter);
app.use(Endpoints.FRIENDS, friendRouter);
app.use(Endpoints.DIARIES, diaryRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: `${req.method} ${req.url} 라우터가 없습니다.`,
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV !== "production" ? err : {},
  });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
