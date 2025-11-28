const dao = require('productDao');

async function searchAbl(req, res) {
    try {
        const dtoIn = req.body.index;
        const result = await dao.search(dtoIn);
        return res.json(result);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    searchAbl
}