Router.configure({
    layoutTemplate: 'Layout',
    loadingTemplate: 'Loading',
	  notFoundTemplate: 'notfound',
    yieldTemplates: {
        header: {
            to: 'header'
        },
        footer: {
            to: 'footer'
        },
        content: {
            to: 'main'
        },
        signin: {
            to: 'main'
        }
    }
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('sidebar', {
        path: '/sidebar'
    });
    this.route('signin', {
        path: '/signin'
    });
});

Router.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    except: ['home', 'atSignIn', 'atSignUp', 'atForgotPassword']
});
