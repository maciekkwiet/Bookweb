require('dotenv').config();
const jwt = require('jsonwebtoken');
// import jwt, { sign } from 'jsonwebtoken';

function jwtGenerator(id: any) {
  const payload = {
    user: id,
  };
  const decod = jwt.sign(payload, process.env.SECRET!, { expiresIn: '1hr' });
  return decod;
}

module.exports = jwtGenerator;
