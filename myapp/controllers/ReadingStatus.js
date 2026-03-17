const {ReadingStatus } = require("../../models");
let getReadingStatus = async (request, response) => {
    try {

        let readingStatus = await ReadingStatus.findAll();

        if (readingStatus.length <= 0) {

            response.status(204).json({
                status: 204,
                message: "No reading status found"
            });

        } else {

            response.status(200).json({
                status: 200,
                data: readingStatus
            });

        }

    } catch (error) {

        response.status(500).json({
            status: 500,
            message: error.message
        });

    }
}
module.exports = {
    getReadingStatus
};