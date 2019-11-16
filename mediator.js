const User = function(name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
};

const Chatroom = function() {
  let users = {}; //list of users
  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, fromUser, toUser) {
      if (toUser) {
        //Single user message
        toUser.receive(message, fromUser);
      } else {
        //Mass message
        for (key in users) {
          if (users[key] !== fromUser) {
            users[key].receive(message, fromUser);
          }
        }
      }
    }
  };
};

const brad = new User("Brad");
const jeff = new User("Jeff");
const sara = new User("Sara");

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send("Hello Jeff", jeff);
sara.send("Hello Brad", brad);
jeff.send("Hello Everyone");
