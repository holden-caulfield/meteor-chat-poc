Messages = new Mongo.Collection("messages");

if (Meteor.isClient) {
  Template.main.helpers({
    user: function() {
      return Session.get("user");
    }
  })

  Template.userSelect.events({
    'submit #user-form':  function(event) {
      console.log("holaaaa");
      event.preventDefault();
      Session.set("user", event.target.user.value)
    }
  });

  Template.chatroom.helpers({
    messages: function () {
      return Messages.find();
    }
  });

  Template.message.helpers({
    formatDate: function(date) {
      return moment(date).calendar();
    },
    typeOfMessage: function(author) {
      return (author == Session.get("user")) ? "outgoing" : "incoming";
    }
  })

  Template.chatroom.events({
    'submit #new-message': function(event) {
      event.preventDefault();
      var text = event.target.message.value;

      Messages.insert({
        text: text,
        createdAt: new Date(), // current time
        author: Session.get("user")
      });

      scrollChat()
      event.target.message.value = "";
    }
  });
}

function scrollChat() {
  var elem = document.getElementById('chat-history');
  elem.scrollTop = elem.scrollHeight;
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Messages.remove({});
  });
}
