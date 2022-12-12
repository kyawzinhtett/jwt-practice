const login = async (req, res) => {
  res.status(200).send('Fake Login/Register/Signup');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `Hello, John Doe`,
    data: `Here is your authorized data. Your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
