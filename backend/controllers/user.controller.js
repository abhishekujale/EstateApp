const { User } = require("../db")
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error fetching users"
        })
    }
}
const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await User.findById(id);
        res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error fetching user"
        })
    }
}
const updateUsers = async (req, res) => {
    console.log("User Model", User);
    const id = req.params.id;
    const tokenUserId = req.userId;
    const { password, avatar, ...inputs } = req.body;
    let updatedPassword = null;
    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" });
    }
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }
        const updatedUser = await User.findOneAndUpdate({
            _id: id
        },
            {
                ...inputs,
                ...(updatedPassword && { password: updatedPassword }),
                ...(avatar && { avatar }),
            },
            {
                new: true
            }
        );
        console.log(updatedUser);
        const { password: userPassword, ...rest } = updatedUser;

        res.status(200).json(updatedUser);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error updating users"
        })
    }
}
const deleteUser = async (req, res) => {
    const id = req.params.id;
    const tokenId = req.userId;
    if (id != tokenId) {
        return res.status(403).json({
            msg: "Not Authorized"
        })
    }
    try {

        await User.findOneAndDelete({
            _id: id
        }, {
            new: true
        })

        res.status(200).json({
            msg: "User deleted successfully"
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error deleting users"
        })
    }
}
module.exports = {
    getUsers,
    getUser,
    deleteUser,
    updateUsers
}