const jwt = require('jsonwebtoken');

import { Payload } from '../types/payload';

function jwtGenerator(id: number) {
  const payload: Payload = {
    userId: id,
  };
  return jwt.sign(payload, process.env.SECRET, { expiresIn: '1hr' });
}

module.exports = jwtGenerator;
