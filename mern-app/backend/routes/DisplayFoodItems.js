const express = require('express')
const router = express.Router()

router.post('/foodItems', (req, res)=> {
    try{
        res.send([global.foodItems, global.foodCategory]);
    }catch(err){
        console.error(err.message)
        res.send("Server Error")
    }
})

module.exports = router;