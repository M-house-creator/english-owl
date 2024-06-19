const customers = {
    _id: {},
        TITLE: {
            type: 'String',
            require: true,
            default: 'None',
            loc: "ФИО",
            sort: true,
            editable: true,
            //list: []
        },
        PHONE: {
            type: 'Phone',
            require: true,
            default: 'None',
            loc: "Телефон",
            sort: true,
            editable: true
        },
        EMAIL: {
            type: 'Email',
            require: false,
            default: 'None',
            loc: "(Адресс эл почты)",
            sort: true,
            editable: true
        },
        BRAND: {
            type: 'DBRef',
            require: false,
            default: 'None',
            loc: "Тариф",
            sort: true,
            editable: true,
            collection: 'brands'
        }
        
       
    };

    export default customers;   