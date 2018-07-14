var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.use('/css',express.static(__dirname + '/build/css'));
app.use('/assets',express.static(__dirname + '/build/assets'));
app.use('/',express.static(__dirname + '/build'));

app.get('/',function(req,res){
    res.sendFile('index.html', {root: __dirname+'/build/'});
});

server.lastPlayderID = 0;

server.listen(process.env.PORT || 8081,function(){
    console.log('Listening on '+server.address().port);
});