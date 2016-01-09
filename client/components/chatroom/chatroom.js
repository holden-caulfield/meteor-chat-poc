Template.chatroom.events({
    'submit #new-message': function(event) {
        event.preventDefault();
        var text = event.target.message.value;

        Messages.insert({
            text: text,
            createdAt: new Date(), // current time
            author: Session.get("user"),
            room: Session.get("room").id
        });

        scrollChat()
        event.target.message.value = "";
    },
    'click a#back': function(event) {
      event.preventDefault();
      Session.set("room",undefined);
    }
});

Template.chatroom.helpers({
    messages: function() {
      return Messages.find({room: Session.get("room").id});
    },

    roomName: function() {
      return Session.get("room").header;
    }
});
