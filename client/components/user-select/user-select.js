Template.userSelect.events({
    'submit #user-form': function(event) {
        console.log("holaaaa");
        event.preventDefault();
        Session.set("user", event.target.user.value)
    }
});
