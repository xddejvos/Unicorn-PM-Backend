async function create(dtoIn) {
    try {
        const result = await db.collection.insertOne({dtoIn})
        return result;

    } catch (error) {
        throw { code: "failedToCreateUser", user: error.user };
    }
};

async function get(dtoIn) {
    try {
        const result = await db.collection.findOne({"email": dtoIn},{_id: 0});
        return result;

    } catch (error) {
        throw { code: "failedToGetUser", user: error.user };
    }
};

module.exports = {
    create,
    get
}