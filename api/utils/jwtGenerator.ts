const jwt = require('jsonwebtoken');

function jwtGenerator(id: any) {
  const payload = {
    user: id,
  };
  return jwt.sign(payload, process.env.SECRET, { expiresIn: '1hr' });
}

module.exports = jwtGenerator;
