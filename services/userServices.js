const User = require("../models/User");

const createUser = async ({ userName, email, password }) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Email already in use");
  }

  const user = new User({ userName, email, password });
  await user.save();
  return user;
};

const verifyUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // Busca el usuario por el correo
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found"); // Error si no se encuentra el usuario
  }

  // Compara la contraseña
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    throw new Error("Invalid password"); // Error si la contraseña es incorrecta
  }

  return {
    id: user._id,
    email: user.email,
    userName: user.userName,
  };
};

module.exports = { verifyUser, createUser };
