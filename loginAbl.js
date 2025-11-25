const dao = require('userDao');

async function loginAbl(dtoIn, res) {
    try {
        const result = await dao.get(dtoIn.email);
        if (dtoIn.password !== result.password) {
            //nepovoleni vstupu do dashboardu
            res.status(400).json({ code: "invalidInput", message: 'špatný email nebo heslo' });
            return;
        }
        res.json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    loginAbl
}