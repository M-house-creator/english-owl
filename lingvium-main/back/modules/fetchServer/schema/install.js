const install = {
    _id:{},
    TITLE: {
        type: "String",
        require: true,
        default: "None",
        loc: "Тип установки",
        sort: true,
        editable: true,
        searchable: true,
        //list: []
    },
    TIME: {
        type: "String",
        require: true,
        default: "None",
        loc: "время",
        sort: true,
        editable: true,
    },
    PRICE: {
        type: "Number",
        require: true,
        default: 0,
        loc: "Цена в рублях (₽)",
        sort: true,
        editable: true,
        step: 1,
        filter: true,
    },
};

export default install;
