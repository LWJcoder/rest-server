/**
 * Created by Joh on 2016/10/10.
 */
var express = require('express');
var http = require('http'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/leadship', function (req, res, next) {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    next();

});

app.get('/leadship',function (req, res, next) {
    res.end('Will send all the dishes to you');
});

app.post('/leadship',function (req, res, next) {
    res.end('will add  dishes：' + req.body.name + ' with details: '+ req.body.description);
});

app.delete('/leadship', function (req, res ,next) {
    res.end('delete all the dishes');
});

app.get('/leadship/:leadshipId',function (req, res, next) {
    res.end('will send details of the dish '+ req.params.leadshipId+'to you; ');
});

app.put('/leadship/:leadshipId', function(req, res, next) {
    res.write('update the dish: '+req.params.leadshipId+ "\n ");
    res.end('update the dishes：' + req.body.name + ' with details: '+req.body.description);
});

app.delete('/leadship/:leadshipId', function (req, res, next) {
    res.end('deleting the dishes: '+req.params.leadshipId);
} );

app.use(express.static(__dirname+'/public'));

app.listen(port, hostname, function () {
    console.log('server is listenning at http://${hostname}: ${port}/');
});

