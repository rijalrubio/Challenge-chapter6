const userRepository = require("./user.repository");

const getAllUsers = async () => {
    return await userRepository.getAllUsers();
};

const createNewUser = async (username, password) => {
    const userExist = await userRepository.getUserByUsername(username);
    if (!userExist) {
        return await userRepository.createNewUser(username,password);
    }else {
        return "User dengan username tersebut telah digunakan";
    }
};

const updateUser = async (id, password) => {
    try {
        await userRepository.updateUser(id,password);
        return "password berhasil diubah" 
    } catch (error) {
        return "id yang dimasukkan tidak valid" + error;   
    }
}

const deleteUser = async (userId)=> {
    try {
        await userRepository.deleteUser(userId);
        return "User telah di hapus"
    } catch (error) {
        return "id tidak ditemukan pada database"
    }
}

const userService = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};

module.exports = userService;