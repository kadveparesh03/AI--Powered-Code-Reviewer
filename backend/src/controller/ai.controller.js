
const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
    const code = req.body.code;
    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);

    if (response.code !== 200) {
        return res.status(response.code).json({ message: response.message, error: response.error });
    }

    res.status(200).json({
        message: response.message,
        data: response.data
    });
};
