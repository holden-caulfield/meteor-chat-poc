Template.chatroomList.helpers({
  chatrooms: function() {
    let query = {"state.username": {$exists: true, $ne: Session.get("user")}};
    let presences = Presences.find(query);

    let createChatroom = function(presence) {
      let users = [Session.get("user"), presence.state.username];
      let label = presence.state.username;
      let roomId = users.sort().join("#");
      return { id: roomId, label: label, header: label };
    };

    let generalLabel = "Everyone (" + presences.count() + " online)";
    let generalHeader = "Everyone";

    let firstChatroom = {id: "ALL", label: generalLabel, header: generalHeader};
    let otherChatrooms = _.sortBy(presences.map(createChatroom), "label");
    let allChatrooms = [firstChatroom].concat(otherChatrooms);

    return allChatrooms;
  }
});
