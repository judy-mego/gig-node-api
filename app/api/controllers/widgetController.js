import { JsonService } from '../../../lib/services';
import { WidgetModel } from '../../../lib/models';

class WidgetController {
    constructor() {

    }
    list(req, res) {
        WidgetModel.find()
            .then((response) => {
                res.json(JsonService.response(200, response));

            })
    }
}

export default new WidgetController();
