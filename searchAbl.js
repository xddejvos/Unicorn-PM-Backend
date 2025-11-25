const dao = require('productDao');

async function searchAbl(dtoIn, res) {
    try {
        const result = await dao.search(dtoIn);
        res.json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    searchAbl
}