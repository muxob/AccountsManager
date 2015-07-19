Ext.define('AccountsManager.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'AccountsManager.view.AccountsGrid'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'accounts-grid'
    }]
});
