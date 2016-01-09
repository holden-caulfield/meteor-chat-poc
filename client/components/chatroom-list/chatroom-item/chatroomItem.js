Template.chatroomItem.events({
  'click .room-item': function(event) {
    Session.set("room", this);
  }
});
