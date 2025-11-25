async function create(dtoIn) {
    try {
        const result = await db.collection.insertOne({dtoIn})
        return result;

    } catch (error) {
        throw { code: "failedToCreateProduct", product: error.product };
    }
};

async function update(dtoIn) {
    try {
        const {_id, ...rest} = dtoIn
        const result = await db.collection.updateOne({_id: _id}, {$set: rest});
        return result;

    } catch (error) {
        throw { code: 'failedToUpdateProduct', product: error.product }
    }
}

async function list() {
    try {
        const result = await db.collection.find({});
        return result;

    } catch (error) {
        throw { code: "failedToListProducts", product: error.product };
    }
};

async function search(dtoIn) {
    try {
        const result = db.collection.find({"name": {$regex: "^" + dtoIn, $options: "i"}});
        return result;
    } catch (error) {
        throw { code: 'unexpectedError', product: error.product };
    };
}

module.exports = {
    create,
    update,
    list,
    search
}