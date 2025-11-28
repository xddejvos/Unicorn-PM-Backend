//pripojeni db

async function create(dtoIn) {
    try {
        //db
        const result = await db.insertOne(dtoIn);
        return result;

    } catch (error) {
        throw error
    }
};

async function update(dtoIn) {
    try {
        //db
        const {_id, ...rest} = dtoIn
        const result = await db.updateOne({_id: new ObjectId(_id)}, {$set: rest});
        return result;

    } catch (error) {
        throw error
    }
}

async function list() {
    try {
        //db
        const result = await db.find({});
        return result;

    } catch (error) {
        throw error
    }
};

async function search(dtoIn) {
    try {
        //db
        const result = db.find({"name": {$regex: "^" + dtoIn, $options: "i"}});
        return result;

    } catch (error) {
        throw error
    };
}

module.exports = {
    create,
    update,
    list,
    search
}