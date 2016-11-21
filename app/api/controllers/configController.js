import { JsonService } from '../../../lib/services';
import { ConfigModel } from '../../../lib/models';

class ConfigController {

    constructor() {

    }

    config(req, res) {
      var content = require('../../../lib/jsons/contents/configuration.json');
      res.json(JsonService.response(200, content));
        // ConfigModel.findOne()
        //     .then((response) => {
        //         res.json(JsonService.response(200, response));
        //     });
    }
}

export default new ConfigController();
