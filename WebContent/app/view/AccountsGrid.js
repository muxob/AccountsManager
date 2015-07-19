Ext.define('AccountsManager.view.AccountsGrid', {
    extend: 'Ext.grid.Panel',
    requires:[
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Paging',
        'Ext.button.Button',
        'Ext.toolbar.TextItem',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.form.field.Date',
        'Ext.grid.column.Action'
    ],

    xtype: 'accounts-grid',

    title: 'Accounts Manager',

    forceFit: true,
    columnLines: true,
    viewConfig: {
        stripeRows: true
    },

    dockedItems: [{
        xtype: 'toolbar',
        items: [{
            itemId: 'add-btn',
            icon: 'resources/add.png',
            text: 'Add new account'
        }, {
            xtype: 'tbtext',
            text: 'Click on any table row to edit the account'
        }]
    }, {
        xtype: 'pagingtoolbar',
        store: 'Accounts',
        dock: 'bottom',
        displayInfo: true
    }],

    store: 'Accounts',

    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1
        })
    ],

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
            icon: 'resources/delete.png',
            tooltip: 'Delete'
        }]
    }]
});