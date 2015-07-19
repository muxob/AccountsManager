Ext.define('AccountsManager.store.Accounts', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.Rest'],
    model: 'AccountsManager.model.Account',
    storeId: 'Accounts',

    autoLoad: true,
    pageSize: 25,
    remoteSort: true,
    sorters: [{
        property: 'id',
        direction: 'ASC'
    }],

    proxy: {
        type: 'rest',
        url: '/accounts',
        simpleSortMode: true,
        limitParam: 'size',
        reader: {
            type: 'json',
            root: '_embedded.accounts',
            totalProperty: 'page.totalElements'
        },
        writer: {
            type: 'json'
        },
        getParams: function(operation) {
            var params = Ext.data.proxy.Rest.prototype.getParams.apply(this, arguments);
            params.page--;
            params.sort += ','+params.dir;
            return params;
        }
    }
});