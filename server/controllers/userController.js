const bcrypt = require('bcrypt')
const UserModel = require('../models/UserModel');

exports.createNewUser = async (req, res) => {
    try {
        const { username, password, college, year, branch } = req.body.user

        const userExist = await UserModel.findOne({ userName : username})

        if(userExist) {
            res.status(409).json({ message: "username already taken" });
            return;
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new UserModel({
            userName: username,
            password: hashedPassword,
            college: college,
            year: year,
            branch: branch,
        })

        await newUser.save();

        return res.status(200).json({ message: `Welcome to new gen, ${username} enter the Nexus world...` });

    } catch(error) {
        return res.status(500).json({ message: "unable to create the user, please try again later. (controller error)", error });
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { username, password } = req.body.user;

        // check if user name exists
        const user = await UserModel.findOne({ userName: username })

        if (!user) {
            return res.status(400).json({ message: "username does not exist" });
        }

        // check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(400).json({ message: "invalid password" });
        }

        return res.status(200).json({ message: "welcome back to Nexus"})

    } catch (error) {
       return res.status(500).json({ message: "unable to create the user, please try again later. (controller error)", error });
    }
}