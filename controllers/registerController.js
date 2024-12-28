const { createUser } = require("../services/userServices");

const registerUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const user = await createUser({ userName, email, password });
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al registrar el usuario", error: error.message });
  }
};

module.exports = registerUser;
