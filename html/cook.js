var express = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser("secret"))

app.get('/', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
/*
//cookie的有效期为900000ms
res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
//cookie的有效期为900000ms
res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true });
res.cookie('nameee', 'koby', {  maxAge: 900000,httpOnly: true});
//cookie的value为对象
res.cookie('cart', { items: [1,2,3] });
res.cookie('cart', { items: [1,2,3] }, { maxAge: 900000 });
*/
    // Cookies that have not been signed


	res.cookie('name', 'tobi', { signed: true, maxAge: 900000 });
  console.log('Cookies: ', req.cookies)

  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
  res.end();
})

app.listen(8066)
