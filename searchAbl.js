const productDao = require('folderpathProProductDao');

async function searchAbl(req, res) {
    try {
        const search = req.query ? req.query : req.body;
        const productList = productDao.search(search);

        if(!productList) {
            res.status(500).json({ 
                message: "Nelze načíst produkty.",
                code: "failedToListProducts",
            });
            return;
        }
  
        res.json({ productList: productList });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    searchAbl
}