require('dotenv').config();


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var shortid = require('shortid');
var cookieParser = require('cookie-parser');

var db = require('./db');
var userRoute = require('./routes/user.route');

var authRoute = require('./routes/auth.route');

var productRoute = require('./routes/product.router');

app.use(bodyParser.json()); //for parsing application/json
app.use(bodyParser.urlencoded({ extended: true}));//for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_SECRET));

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', function(req, res){
	// response.send('<h1>Nguyen Sy Hiep</h1><a href = "/users">User list</a>');
	res.render('index',{
		name: 'AAA'
	});
	// res.render('views/index.pug');
});


app.use('/users', userRoute);

app.use('/auth', authRoute);

app.use('/products', productRoute);

app.listen(port, function(){
	console.log('Server listening on port' + port);
});
