/**
 * @author Thassio Victor <tvmcarvalho@gmail.com>
    * @desc Buscar uma piada pela API
    *
    */

var http = require('http');

var API = 'http://api.icndb.com/jokes/random';

http.get(API, function(res) {
    var finalData = '';
    res.on('data', function(d) {
        finalData += d;
    });

    res.on('end', function() {
        finalData = JSON.parse(finalData);
        console.log('#' + finalData.value.id);
        console.log(finalData.value.joke);
    });
});
