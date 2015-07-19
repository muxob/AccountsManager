Ext.define('AccountsManager.Application', {
    name: 'AccountsManager',

    extend: 'Ext.app.Application',

    requires:[
        'Ext.grid.plugin.RowEditing'
    ],

    views: [
        'AccountsGrid',
        'AccountForm'
    ],

    controllers: [
        'AccountsManagerController'
    ],

    stores: [
        'Accounts'
    ]
});
