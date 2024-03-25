const { User } = require('../models');

const userData =
[
  {
    "username": "Leonis",
    "email": "leonhsu95@gmail.com",
    "password": "admin12345"
  },
  {
    "username": "Isabela",
    "email": "isabela@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "Simon",
    "email": "simon0@gmail.com",
    "password": "simon1234"
  },
  {
    "username": "Maiko",
    "email": "amiko@yahoo.com",
    "password": "password12345"
  },
  {
    "username": "Dan",
    "email": "dan@gmail.com",
    "password": "dan9519"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;