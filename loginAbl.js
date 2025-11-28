const dao = require('userDao');

async function loginAbl(req, res) {
    try {
        const dtoIn = req.body;
        const result = await dao.get(dtoIn.email);
        if (dtoIn.password !== result.password) {
            res.status(400).json({ code: "notMatchingInput", message: 'špatný email nebo heslo' });
            return;
        }
        return res.json(result);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    loginAbl
}