import { JsonService } from '../../../lib/services';

class ApiController {
    constructor() {

    }

    index(req, res) {
        res.json(JsonService.response(200,'Hello API'));
    }
}

export default new ApiController();
