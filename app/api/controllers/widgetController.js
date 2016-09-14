import { JsonService } from '../../../lib/services';
import { WidgetModel } from '../../../lib/models';

class WidgetController {

    constructor() {

    }

    listAll(req, res) {
        WidgetModel.find()
            .then((response) => {
                res.json(JsonService.response(200, response));
            })
    }

    listEvents(req, res) {
        WidgetModel.find({'category':'Events'})
            .then((response) => {
                res.json(JsonService.response(200, response));
            })
    }

    listArticle(req, res) {
        WidgetModel.find({'category':'Article'})
            .then((response) => {
                res.json(JsonService.response(200, response));
            })
    }

    listVideos(req, res) {
        WidgetModel.find({'category':'Videos'})
            .then((response) => {
                res.json(JsonService.response(200, response));
            })
    }
}

export default new WidgetController();
