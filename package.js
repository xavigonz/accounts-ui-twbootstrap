Package.describe({
  summary: "Twitter Bootstrap styled version of login widgets"
});

Package.on_use(function (api, where) {
	api.use(['bootstrap', 'accounts-urls', 'accounts-base', 'underscore', 'templating'], 'client');
	api.add_files([
    'accounts_ui.js',

    'login_buttons_images.css',
    'login_buttons.html',
    'login_buttons_single.html',
    'login_buttons_dropdown.html',
    // 'login_buttons_dialogs.html',

    'login_buttons_session.js',

    'login_buttons.js',
    'login_buttons_single.js',
    'login_buttons_dropdown.js'
    // 'login_buttons_dialogs.js'

    ], 'client');
});
