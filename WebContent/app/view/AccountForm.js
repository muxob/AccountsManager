Ext.define("AccountsManager.view.AccountForm", {
    extend: 'Ext.form.Panel',
    requires:[
        'Ext.form.field.Date'
    ],

    xtype: 'account-form',

    bodyPadding: 10,
    layout: 'anchor',
    defaults: {
        anchor: '100%',
        allowBlank: false
    },

    defaultType: 'textfield',
    items: [{
        fieldLabel: 'First Name',
        name: 'firstName'
    },{
        fieldLabel: 'Last Name',
        name: 'lastName'
    }, {
        fieldLabel: 'E-mail',
        name: 'email',
        vtype: 'email'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Birth date',
        name: 'birthDate',
        format: 'Y/m/d',
        submitFormat: 'c'
    }],

    buttons: [{
        text: 'Create',
        itemId: 'save-btn',
        formBind: true,
        disabled: true
    }]
});