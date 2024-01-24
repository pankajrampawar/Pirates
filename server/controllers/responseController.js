const ResponseModel = require('../models/Responses');
const CraftModel = require('../models/CraftModel');

exports.getAllResponses = async (req, res) => {
    try {
        const responses = await ResponseModel.find({})

        res.status(200).json({ message: "responses sent!", responses });
    } catch (error) {
        res.status(500).json({ message: "unable to get responses mongoose error", error })
    }
}

exports.addResponse = async (req, res) => {
    try {
        const { craftId, response } = req.body;

        const craftToBeResponded = await CraftModel.findById(craftId);
        
        if (!craftId || !response) {
            res.status(400).json({ message: "craftId or response content not found." })
        };

        if (!craftToBeResponded) {
            res.status(400).json({ message: "Craft not found!", craftId });
            return;
        };

        const responseToAdd = new ResponseModel(response);
        
        const newResponse = await responseToAdd.save();

        const updatedCraft = await CraftModel.findByIdAndUpdate(
            craftId, 
            { $push: { responses: newResponse._id } },
            { new: true }
        )

        res.status(200).json({ message: "response added successfully", updatedCraft })

    } catch (error) {
        console.log("error in add repsonse");
        
        res.status(500).json({ message: "Error adding the resposne, mongoose error", error });
    }
}