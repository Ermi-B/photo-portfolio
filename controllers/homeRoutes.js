const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('homepage',{})
})

router.get('/contact',(req,res)=>{
    res.render('contact',{})
})


module.exports = router;