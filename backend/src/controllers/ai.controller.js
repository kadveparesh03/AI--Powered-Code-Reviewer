const aiService = require("../services/ai.service");

exports.getReview = async (req, res) => {
    try {
        const code = req.body.code;

        if (!code) {
            return res.status(400).json({
                success: false,
                message: "Code is required in request body."
            });
        }

        const response = await aiService(code);

        res.status(200).json({
            success: true,
            data: response
        });

    } catch (error) {
        console.error("Error in getReview:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
