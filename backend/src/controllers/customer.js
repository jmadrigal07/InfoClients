export default class customer {
    constructor() {}

    customer(args) {
        const response = {
            id: 1,
            name_c: 'Jorge Madrigal',
            address: 'Cll 101 Nro 72A 4',
            credit_limit: 12.2,
            available_credit: 10.2,
            visits_percentage: 10,
            createdAt: '2019-09-12',
            updatedAt: '2019-09-12',
            city: 'Miami',
            state: 'Florida',
            country: 'USA',
            visits: [{
                id: 1,
                net: 10.2,
                visit_total: 12.0,
                description: 'Description',
                sales_representative: 'Sales 1',
                createdAt: '2019-09-12',
                updatedAt: '2019-09-12'
            }]
        }
        return response;
    }
    customers() {
        const response = [{
            id: 1,
            name_c: 'Jorge Madrigal',
            address: 'Cll 101 Nro 72A 4',
            credit_limit: 12.2,
            available_credit: 10.2,
            visits_percentage: 10,
            createdAt: '2019-09-12',
            updatedAt: '2019-09-12',
            city: 'Miami',
            state: 'Florida',
            country: 'USA',
            visits: [{
                id: 1,
                net: 10.2,
                visit_total: 12.0,
                description: 'Description',
                sales_representative: 'Sales 1',
                createdAt: '2019-09-12',
                updatedAt: '2019-09-12'
            }]
        }]
        return response;
    }
}