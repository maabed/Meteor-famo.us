Template.header.rendered = function(){
    setActiveLinks();
};

Template.header.events({
    'click #signOut': function(event){
        event.preventDefault();
        Meteor.logout();
    },

    'click .glyphicon-list':function(event, tpl){
      Session.set('menuOpen', !Session.get('menuOpen'));
    }
});
