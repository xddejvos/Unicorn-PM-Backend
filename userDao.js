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

async function get(dtoIn) {
    try {
        //db
        const result = await db.findOne({"email": dtoIn},{projection: {_id: 0}});
        return result;

    } catch (error) {
        throw error
    }
};

module.exports = {
    create,
    get
}