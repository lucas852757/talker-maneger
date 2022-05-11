const { generateToken } = require('../crypto');

const login = (req, res) => {
  try {
    const { email, password } = req.body;
    const newToken = generateToken();
    
    if (!email || !password) {
      return res.status(400).end();
    }
    return res.status(200).json({ token: newToken });
  } catch (error) {
    return res.status(500).end();
  }
};

module.exports = login;