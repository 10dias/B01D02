/**
 * @author Thassio Victor <tvmcarvalho@gmail.com>
    * @desc Buscar uma piada pela API
    *
    */

var http = require('http');

var API = 'http://api.icndb.com/jokes/random';

http.get(API, function(res) {
    console.log(res);
});
