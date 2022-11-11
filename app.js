const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//const expressHbs = require('express-handlebars');

const adminRoutes   = require('./routes/admin');
const shopRoutes    = require('./routes/shop');

const errorController = require('./controllers/error');

//app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs' }));
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded(({ extended: false })));

// this command gives a READ ACCESS to static files, like CSS
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);

// od 