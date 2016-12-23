var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);
var uName=[];	
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	var clientIp = socket.request.connection.remoteAddress;

	socket.on('user name',function(data,callback)
	{
		if(uName.indexOf(data)!=-1)
		{
			callback(false)
		}
		else
		{
			callback(true);
			socket.nickname=data;
			// uName.push(socket.nickname);
			// io.sockets.emit('usernames',uName);
			console.log(data);
		}
	});
  socket.on('chat message', function(msg){
    io.emit('chat message',msg,socket.nickname);
  });
});

http.listen(3000,function(){
	console.log('listening on port:3000');
});