var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);

var yes = 0;
var no = 0;
var idk = 0;

app.get('/*', function(req, res){
  res.sendFile(__dirname + req.path);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


io.on("connection", function(socket){
	io.emit("newData", [yes, no, idk]);
	socket.on("buttonClicked", function(button) {
		if (button === "yes") {
			yes++;
		};
		if (button === "no") {
			no++;
		};
		if (button === "idk") {
			idk++;
		};
		io.emit("newData", [yes, no, idk]);
	})
});
