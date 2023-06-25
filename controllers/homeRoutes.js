const router = require('express').Router();

router.get('/',(req,res)=>{
    res.render('homepage',{})
})

router.get('/contact',(req,res)=>{
    res.render('contact',{})
})

router.get('/pricing',(req,res)=>{
    res.render('pricing',{})
})

router.get('/blogs',(req,res)=>{
    res.render('blogs',{})
})

router.get('/booking',(req,res)=>{
    res.render('booking',{})
})


router.get('/about',(req,res)=>{
    res.render('about')
})

router.get('/gallery',(req,res)=>{
    res.render('gallery')
})

router.get('/success',(req,res)=>{
    res.render('success')
})

module.exports = router;