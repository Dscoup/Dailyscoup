//import io from 'socket.io-client';

 //const socket  = io.connect('https://isocket.integra.co.in/integra', {reconnect: true});

export const socketObj = {
  sendProduct,
  joinPacketRoom,
  socket
};

// socket.on('connect', res => {
//   console.log("connected")
//   socket.emit('joinIPub', JSON.stringify({ product: "iPUb", AutomationId: 1 }));
// });

// function sendProduct(productDetal) {
//   socket.emit('sendProduct', JSON.stringify({ ...productDetal }))
// };

// function joinPacketRoom(uniqueObj) {
//   socket.emit('joinPacketRoom', JSON.stringify({ ...uniqueObj }))
// }

// function joinIPub(product) {
//   socket.emit('joinIPub', JSON.stringify(product))
// };


// socket.on('recieveProduct', err => {
//   console.log('recieveProduct', new Date());
//   //console.log('recieveProduct response '+ err); 
// });

// socket.on('disconnect', err => {
//   console.log('Socket disconnect', new Date());
// });

// socket.on('recievePacket', (data) => {
//   let status_info = JSON.parse(data);
  
//     console.log("recievePacket" + status_info);
// });

// socket.on('error', function (err) {
//   console.log('received socket error:')
//   console.log(err)
// })




// import io from 'socket.io-client';

// export default function () {
//   const socket = io.connect('https://isocket.integra.co.in/integra');

//   function registerHandler(onMessageReceived) {
//     socket.on('message', onMessageReceived)
//   }

//   function unregisterHandler() {
//     socket.off('message')
//   }

//   socket.on('error', function (err) {
//     console.log('received socket error:')
//     console.log(err)
//   })

//   function register(name, cb) {
//     socket.emit('register', name, cb)
//   }

//   function join(chatroomName, cb) {
//     socket.emit('join', chatroomName, cb)
//   }

//   function leave(chatroomName, cb) {
//     socket.emit('leave', chatroomName, cb)
//   }

//   function message(chatroomName, msg, cb) {
//     socket.emit('message', { chatroomName, message: msg }, cb)
//   }

//   function getChatrooms(cb) {
//     socket.emit('chatrooms', null, cb)
//   }

//   function getAvailableUsers(cb) {
//     socket.emit('availableUsers', null, cb)
//   }

//   return {
//     register,
//     join,
//     leave,
//     message,
//     getChatrooms,
//     getAvailableUsers,
//     registerHandler,
//     unregisterHandler
//   }
// }

