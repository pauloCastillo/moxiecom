const {Router} = require('express');
const fs = require('fs');

const router = Router();
const pathRoutes = __dirname
const removeExtension = (fileName)=>{
    return fileName.split(".").shift()
}

fs.readdirSync(pathRoutes).filter(file => {
    const fileName = removeExtension(file)
    if(fileName !== "index"){
        return router.use(`/${fileName}`, require(`./${file}`))
    }

});

module.exports = router