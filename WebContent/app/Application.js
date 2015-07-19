Ext.define('AccountsManager.Application', {
    name: 'AccountsManager',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'AccountsManagerController'
    ],

    stores: [
        'Accounts'
    ]
});
