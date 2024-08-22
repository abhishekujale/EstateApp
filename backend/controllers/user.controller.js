const { user } = require("../db")
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
    try {
        const data = await user.find();
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
        const data = await user.findById(id);
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
    const id = req.params.id;
    const tokenId = req.userId;
    const { password, avatar, ...inputs } = req.body;
    // if (id != tokenId) {
    //     return res.status(403).json({
    //         message: "You can only update your own user"
    //     })
    // }
    let updatedPassword = null;

    if (id !== tokenUserId) {
        return res.status(403).json({ message: "Not Authorized!" });
    }
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }
        const updatedUser = await user.findOneAndUpdate({
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
        const { password: userPassword, ...rest } = updatedUser;

        res.status(200).json(rest);
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

        await user.findOneAndDelete({
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