Ext.define('AccountsManager.controller.AccountsManagerController', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'accountForm',
        selector: 'account-form'
    }, {
        ref: 'accountsGrid',
        selector: 'accounts-grid'
    }],

    init: function() {
        this.control({
            'accounts-grid #add-btn': {
                click: this.showAccountForm
            },
            'account-form #save-btn': {
                click: this.onCreateNewAccount
            },
            'accounts-grid': {
                edit: this.updateAccount,
                deleteaccount: this.deleteAccount,
                beforecellclick: function(gridView, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                    return !gridView.getGridColumns()[cellIndex].isXType('actioncolumn')
                }
            }
        });
    },

    showAccountForm: function() {
        Ext.create('Ext.window.Window', {
            modal: true,
            title: 'Create new account',
            width: 350,
            layout: 'fit',
            items: {
                xtype: 'account-form'
            }
        }).show();
        this.getAccountForm().getForm().findField('firstName').focus();
    },

    onCreateNewAccount: function(){
        var form = this.getAccountForm();
        if (form.isValid()) {
            Ext.create('AccountsManager.model.Account', form.getValues()).save({
                scope: this,
                failure: this.errorHandler,
                success: function(record, operation) {
                    this.getAccountsGrid().getStore().add(record);
                    form.up('window').close();
                }
            });
        }
    },

    updateAccount: function(editor, context, eOpts ) {
        context.record.save({
            scope: this,
            failure: this.errorHandler,
            success: function(record, operation) {
                record.commit();
            }
        });
    },

    deleteAccount: function(grid, record) {
        record.destroy({
            scope: this,
            failure: this.errorHandler,
            success: function(record, operation) {
                grid.store.remove(record);
            }
        });
    },

    errorHandler: function(record, operation) {
        Ext.Msg.alert('Error', operation.error.statusText || operation.error);
    }

});
