Template.main.helpers({
    user: function() {
      return Session.get("user");
    },
    room: function() {
      return Session.get("room"); 
    }
})

Presence.state = function() {
  return {
    username: Session.get('user')
  };
}
