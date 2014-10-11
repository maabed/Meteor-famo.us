FView.ready(function(require) {
    Transform = famous.core.Transform;
    Easing = famous.transitions.Easing;
});


var slideLeftDestroy = function(fview){
    fview.modifier.setTransform(
        Transform.translate(-$(window).width(),0),
        { duration : 250, curve: Easing.easeOutSine },
        function() { fview.destroy();}
    );
};


AccountsTemplates.configureAnimations({
    destroy: {
        atSignupLink: slideLeftDestroy,
    }
});


Template.atForm.rendered = function() {
  FView.from(this).modifierTransition = { curve: 'easeInOut', duration: 500 };
}
