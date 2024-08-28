const express =  require('express');
const router = express.Router();



// POST /sign-up 
router.post('/', (req, res, next)=>{
    console.log(req.body);
    res.json(req.body);
})

module.exports = router;