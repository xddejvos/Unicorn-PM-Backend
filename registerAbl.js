const dao = require('userDao');

//dependency ajv, ajv-formats
const Ajv = require("ajv");
const addFormats = require("ajv-formats").default;
const ajv = new Ajv();
addFormats(ajv);

const schema = {
    type: 'object',
    properties: {
        name: {type: 'string', maxLength: 30},
        email: {type: 'string', maxLength: 50},
        password: {type: 'string', minLength: 6, maxLength: 18}
    },

    required: ['name', 'email', 'password'],
    additionalProperties: false
}

async function searchAbl(req, res) {
    try {
        const dtoIn = req.body;
        const valid = ajv.validate(schema, dtoIn);
        if (!valid) {
            res.status(400).json({code: 'invalidInput', message: 'vstupní hodnoty nejsou validní'});
            return;
        }

        const user = {
            name: dtoIn.name,
            email: dtoIn.email,
            password: dtoIn.password
        }

        const result = await dao.create(user);
        return res.json(result);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    searchAbl
}