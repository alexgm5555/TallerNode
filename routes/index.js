var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Servidor Node' });
});
function iniciar(){
	alert('hola holaz');
}
module.exports = router;
