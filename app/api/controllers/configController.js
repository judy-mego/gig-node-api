import { JsonService } from '../../../lib/services';
import { ConfigModel } from '../../../lib/models';

class ConfigController {

    constructor() {

    }

    config(req, res) {
        ConfigModel.findOne()
            .then((response) => {
                res.json(JsonService.response(200, response));
            });
    }
}

export default new ConfigController();
