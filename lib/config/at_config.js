Meteor.startup(function(){
    AccountsTemplates.init();
});



//Fields
AccountsTemplates.addField({
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 3,
    errStr: 'error.minChar'
});

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: 'error.accounts.Invalid email',
    trim: true,
    lowercase: true
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 8,
    errStr: 'error.minChar'
});


//Routes
AccountsTemplates.configureRoute("signIn");
AccountsTemplates.configureRoute("signUp");
AccountsTemplates.configureRoute("forgotPwd");
AccountsTemplates.configureRoute("resetPwd");
AccountsTemplates.configureRoute("changePwd");
AccountsTemplates.configureRoute("enrollAccount");
AccountsTemplates.configureRoute("verifyEmail");

AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,

    // Privacy Policy and Terms of Use
    // privacyUrl: 'privacy',
    // termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/home',
    redirectTimeout: 4000,

    // Texts
    buttonText: {
        signUp: "Sign Up Now!"
    },
    title: {
        forgotPwd: "Recover Your Passwod"
    },
});

AccountsTemplates.configure({
    title: {
      changePwd: "Password Title",
      enrollAccount: "Enrol Title",
      forgotPwd: "Forgot Pwd Title",
      resetPwd: "Reset Pwd Title",
      signIn: "Sign In Title",
      signUp: "Sign Up Title",
    }
});

AccountsTemplates.configure({
    buttonText: {
      changePwd: "Password Text",
      enrollAccount: "Enroll Text",
      forgotPwd: "Forgot Pwd Text",
      resetPwd: "Reset Pwd Text",
      signIn: "Sign In Text",
      signUp: "Sign Up Text",
    }
});


// var Transform;
// var Easing;
// if (Meteor.isClient){
//     FView.ready(function(require) {
//         Transform = famous.core.Transform;
//         Easing = famous.transitions.Easing;
//     });
// }
//
// var slideLeftDestroy = function(fview){
//     fview.modifier.setTransform(
//         Transform.translate(-$(window).width(),0),
//         { duration : 250, curve: Easing.easeOutSine },
//         function() { fview.destroy();}
//     );
// };
//
// AccountsTemplates.configureAnimations({
//     destroy: {
//         atSignupLink: slideLeftDestroy,
//     }
// });


// AccountsTemplates.configureAnimations(options);
//
// var options = {
//     render: {
//         default: animA,
//         atTitle: animB,
//         atSocial: animC,
//         atSep: animC,
//         atError: animB,
//         atResult: animB,
//         atPwdForm: null,
//         atSigninLink: null,
//         atSignupLink: animB,
//         atTermsLink: animD,
//     },
//       destroy: {
//         default: animA,
//         atTitle: animB,
//         atSocial: animC,
//         atSep: animC,
//         atError: animB,
//         atResult: animB,
//         atPwdForm: null,
//         atSigninLink: null,
//         atSignupLink: animB,
//         atTermsLink: animD
//     },
//       state_change: {
//         default: animA,
//         atTitle: animB,
//         atSocial: animC,
//         atSep: animC,
//         atError: animB,
//         atResult: animB,
//         atPwdForm: null,
//         atSigninLink: null,
//         atSignupLink: animB,
//         atTermsLink: animD
//       },
// };
//
//
// vFlip = function(fview){
//     fview.modifier.setTransform(
//         Transform.rotate(Math.PI-0.05,0,0),
//         { duration : 150, curve: "easeIn" },
//         function() {
//             fview.modifier.setTransform(
//                 Transform.rotate(-0.1,0,0),
//                 { duration : 150, curve: "easeOut" }
//             );
//         }
//     );
// };
