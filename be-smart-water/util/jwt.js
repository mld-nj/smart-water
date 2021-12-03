const jwt = require("jsonwebtoken");
const jwtSercret = "aed46bf1-9838-4cf4-83b4-8cbc60f6f359";
exports.sign = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, jwtSercret, (err, token) => {
      if (err) {
        return reject(err);
      }
      resolve(token);
    });
  });
};
//验证jwt
exports.verify = (token) => {
  return new Promise((reslove, reject) => {
    jwt.verify(token, jwtSercret, (err, res) => {
      if (err) {
        return reject(err);
      }
      reslove(res);
    });
  });
};
