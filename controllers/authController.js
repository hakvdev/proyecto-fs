const { verifyUser } = require("../services/userServices");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const verifiedUser = await verifyUser({ email, password });
    if (verifiedUser) {
      const token = jwt.sign(
        {
          id: verifiedUser.id,
          email: verifiedUser.email,
        },
        JWT_SECRET
      );

      return res.status(200).json({ token });
    }

    return res.status(400).json({ error: "invalid credentials" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const verifyToken = async (req, res, next) => {
  try {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;

    return next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { loginUser, verifyToken };
