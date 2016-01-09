Template.userSelect.events({
    'submit #user-form': function(event) {
        event.preventDefault();
        Session.set("user", event.target.user.value)
    }
});
