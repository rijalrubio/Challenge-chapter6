const userService = require("./user.service");

const getAllUsers = async (req,res) => {
    const { q } = req.query;
    const users = await userService.getAllUsers(q);
    res.json(users); 
};

const createNewUser = async (req,res) => {
    const { username, password } = req.body;
    const newUser = await userService.createNewUser(username,password);
    res.json(newUser); 
};

const updateUser = async (req,res) => {
    const { id, password } = req.body;
    const updateUser = await userService.updateUser(id,password);
    res.json(updateUser);
}

const deleteUser = async (req,res) => {
    const { id } = req.params;
    const deleteUser = await userService.deleteUser(id);
    res.json(deleteUser);
}
const userController = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
};

module.exports = userController;
