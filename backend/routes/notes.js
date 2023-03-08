const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("notess hit")
})
module.exports = router;