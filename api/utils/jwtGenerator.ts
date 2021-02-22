require('dotenv').config();
import jwt from 'jsonwebtoken';

function jwtGenerator(user_id : any) {
  const payload = {
    user: user_id
  }

  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1hr" })
}

module.exports = jwtGenerator;