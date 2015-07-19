Ext.define('AccountsManager.view.AccountsGrid', {
    extend: 'Ext.grid.Panel',
    requires:[
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.column.Action'
    ],

    xtype: 'accounts-grid',

    title: 'Accounts Manager',

    store: 'Accounts',

    columns: [{
        xtype: 'numbercolumn',
        dataIndex: 'id',
        width: 50,
        minWidth: 20,
        maxWidth: 100,
        align: 'right',
        sortable: true,
        hideable: false,
        menuDisabled: true,
        format:'0.'
    }, {
        text: 'First Name',
        dataIndex: 'firstName',
        flex: 2,
        sortable: true,
        editor: {
            xtype: 'textfield',
            allowBlank: false
        }
    }, {
        text: 'Last Name',
        dataIndex: 'lastName',
        flex: 2,
        sortable: true,
        editor: {
            xtype: 'textfield',
            allowBlank: false
        }
    }, {
        text: 'e-mail',
        dataIndex: 'email',
        flex: 3,
        sortable: true,
        editor: {
            xtype: 'textfield',
            allowBlank: false,
            vtype: 'email'
        },
        renderer: function(value) {
            return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
        }
    }, {
        xtype: 'datecolumn',
        text: 'Date',
        dataIndex: 'birthDate',
        width: 120,
        maxWidth: 150,
        align: 'center',
        format: 'Y/m/d',
        editor: {
            xtype: 'datefield',
            allowBlank: false,
            format: 'Y/m/d'
        }
    }, {
        xtype: 'actioncolumn',
        width: 100,
        minWidth: 50,
        maxWidth: 150,
        sortable: false,
        hideable: false,
        menuDisabled: true,
        items: [{
            tooltip: 'Delete'
        }]
    }]
});