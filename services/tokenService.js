const jwt = require("jsonwebtoken");
const config = require("../config/jwtconfig");

//Generer le jwt token de l'user
const generateToken = (user) => jwt.sign(
    { id: user._id, role: user.roleName }, 
    config.secret, 
    { expiresIn: config.expiresIn }
);

module.exports = { generateToken };