import { user } from "../db"

import bcrypt from "bcrypt"

export const getUsers = async (req, res) => {

    try {
        const users = await user.find();
        return users;
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Failed to get users!"
        })
    }
}

export const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await user.findById(id);
        return user;
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to get user!" });
    }
}
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;

    const { password, avatar, ...inputs } = req.body;
    if (tokenUserId != id) {
        return res.json({
            msg: "You can't update this user!"
        })
    }

    let updatedPassword = null;
    try {
        if (password) {
            updatedPassword = await bcrypt.hash(password, 10);
        }
        const updatedPupdatedUserassword = await user.updateOne({
            _id: id,
            ...inputs,
            ...(updatedPassword && { password: updatedPassword }),
            ...(avatar && { avatar }),
        })
        const { password: userPassword, ...rest } = updatedUser;
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update users!" });
    }
}