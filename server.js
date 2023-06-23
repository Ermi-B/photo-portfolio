const express = require('express')
const exphbs = require('express-handlebars')
const sequelize = require('./config/connection')
const routes = require('./controllers')
const path = require('path')



const app = express()
const hbs = exphbs.create()


const PORT = process.env.PORT || 5000;

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(PORT,()=>{
    console.log('Listening on '+PORT)
})