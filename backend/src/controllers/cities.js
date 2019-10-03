import models from '../models';

export default class cities {
    constructor() {}

    async cities(p, args) {
        const response = await models.cities.findAll({attributes: ['id', 'name']})
        return response.map((city) => {
            return city.dataValues
        })
    }

    addCity(p, args) {
    }

}