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

Template.chatroom.helpers({
    messages: function() {
        return Messages.find();
    }
});
