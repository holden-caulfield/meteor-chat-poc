scrollChat = function() {
    var elem = document.getElementById('chat-history');
    elem.scrollTop = elem.scrollHeight;
}


Template.registerHelper("user", function() {
  return Session.get("user");
});

Template.registerHelper("room", function() {
  return Session.get("room");
});
