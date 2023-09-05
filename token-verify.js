const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiY3VzdG9tZXIiLCJpYXQiOjE2ODYzNzU3NjR9._5rqEPXntu6Uu07C-jonegFsi9nzPi6BsJ7B5e2EvS4'

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);