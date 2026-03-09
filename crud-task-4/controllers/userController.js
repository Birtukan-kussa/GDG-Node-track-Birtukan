let users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 }
];

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

const createUser = (req, res) => {
  const { name, age } = req.body;

  const newUser = {
    id: users.length + 1,
    name,
    age
  };

  users.push(newUser);

  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;

  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name;
  user.age = age;

  res.json(user);
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  users = users.filter(u => u.id !== id);

  res.json({ message: "User deleted successfully" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};