const CraftModel = require('../models/CraftModel')

exports.getAllCraft = async (req, res) => {
    try {
        const crafts = await CraftModel.find({});
        
        res.status(200).json({ message: "found the craft successfully.", crafts });
    } catch (error) {
        res.status(500).json({ message: "unable to get the the Craft, please try again later. (controller error)", error });
    }
}