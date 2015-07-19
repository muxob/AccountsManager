Ext.define('AccountsManager.model.Account', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',
        url: '/accounts',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json'
        }
    },

    fields: [
        { name: 'id', type: 'int', useNull: true },
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'birthDate', type: 'date', dateFormat: 'c' }

    ]
});
