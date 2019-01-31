const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


io.on('connection', socket => {
  // io.emit('msg', { author: '[System]', datetime: new Date(), text: 'Hi, from socket server!', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wrench_font_awesome.svg/1024px-Wrench_font_awesome.svg.png' }); 
  socket.on('user', user => {
    io.emit('msg', { author: '[System]', datetime: new Date(), text: `${user.user} just joined us on this chat room!`, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Wrench_font_awesome.svg/1024px-Wrench_font_awesome.svg.png' }); 
  });
  socket.on('msg', msg => {
    io.emit('msg', msg);
  });
});

http.listen(3000, () => {
  console.log('Listening on port 3000...');
});
