const { user_game } = require("../database/models");

const getAllUsers = async () => {
    return await user_game.findAll();
}

const getUserByUsername = async (username) => {
    return await user_game.findOne({
       where: { username: username } 
    });
}

const createNewUser = async(username, password) => {
    return await user_game.create({
        username: username,
        password: password,
        createdAt: new Date(),
        updatedAt: new Date()
    });
}

const updateUser = async (id, password) => {
    return await user_game.update({ password: password}, {
        where: {
            id: id
        }
    });
}

const deleteUser = async (userId) => {
    return await user_game.destroy({
        where: { id: userId },
    });
};

const userRepository = {
    getAllUsers,
    getUserByUsername,
    createNewUser,
    updateUser,
    deleteUser
};

module.exports = userRepository;