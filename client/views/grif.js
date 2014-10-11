Router.map(function() {
  this.route('grid', {
      path: '/grid',
      template: 'at_grid'
  });
});

FView.ready(function(require) {
    FView.registerView('GridLayout', famous.views.GridLayout);
})

Template.nameSliderValue.events({
  'input input': function(event, tpl) {
    var $target = $(event.target);
    var name = $target.attr('name');
    var value = $target.val();

    if (Session.get('modRender') === 'instant' || name === 'width')
      Session.set(name, parseFloat(value));
  },
  'change input': function(event, tpl) {
    var $target = $(event.target);
    var name = $target.attr('name');
    var value = $target.val();

    if (Session.get('modRender') !== 'instant' || name !== 'width')
      Session.set(name, parseFloat(value));
  }
});

Session.setDefault('width', 350);
Template.reactivity.gridSize = function() {
  return [ Session.get('width'), 100 ];
}
Template.reactivity.gridDimensions = function() {
  return [ Math.ceil(Session.get('width') / 234), 1 ];
}
