Template.message.helpers({
    formatDate: function(date) {
        return moment(date).calendar();
    },
    typeOfMessage: function(author) {
        return (author == Session.get("user")) ? "outgoing" : "incoming";
    }
})
