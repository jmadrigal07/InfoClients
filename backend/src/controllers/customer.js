import models from '../models';

export default class customer {
    constructor() {}

    async customer(p, args) {
        const id = args.id;
        const responde = await models.customers.findAll({
            where: {
                id: id
            }
        })
        
        return responde[0].dataValues;
    }
    addCustomer(p, args) {
        const { name, address, credit_limit, available_credit, visits_percentage, cityId } = args.input;

        return models.customers.create({
            name,
            address,
            credit_limit,
            available_credit,
            visits_percentage,
            cityId
        })
        .then((c) => {
            return c.dataValues;
        })
        .catch((err) => {
            throw err;
        })
    }

}