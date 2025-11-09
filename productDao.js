//line 1 - 38 je kdybychom nemeli backend, je to zaklad predtim nez se da implementovat search product
const fs = require("fs");
const path = require("path");
const crypto = require("crypto"); //šifrování a dešifrování dat

const productFolderPath = path.join(__dirname, "storage", "productList");

function create(product) {
    try {
        product.id = crypto.randomBytes(16).toString("hex");
        const filePath = path.join(productFolderPath, `${product.id}.json`);
        const fileData = JSON.stringify(product);

        fs.writeFileSync(filePath, fileData, "utf8");
        return product;

    } catch (error) {
        throw { code: "failedToCreateProduct", product: error.product };
    }
};

function update(product) {
    try {
    const prevData = get(product.id);
    const currData = { ... prevData, ...product };

    const filePath = path.join(productFolderPath, `${product.id}.json`);
    const fileData = JSON.stringify(currData);
    fs.writeFileSync(filePath, fileData, 'utf8');

    return currData;

    } catch (error) {
        throw { code: 'failedToUpdateProduct', product: error.product }
    }
}

function list() {
    try {
        //productFolderPath se zmeni na mongodb, ted ale nechame ve storage lokalne nebo idk
        const files = fs.readdirSync(productFolderPath);
        const productList = files.map((file) => {

            const fileData = fs.readFileSync(path.join(productFolderPath, file), "utf8");
            return JSON.parse(fileData);
        });

        return productList;

    } catch (error) {
        throw { code: "failedToListProducts", product: error.product };
    }
};
//line 1 - 38 je kdybychom nemeli backend, je to zaklad predtim nez se da implementovat search product

function search(query) {
    const productList = list();
    return productList.filter((item) => item.name === query);
}

module.exports = {
    create,
    update,
    list,
    search
}