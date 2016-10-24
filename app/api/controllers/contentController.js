import { JsonService } from '../../../lib/services';
import { ContentModel } from '../../../lib/models';

class ContentController {

    constructor() {

    }

    contentId(req, res) {
      console.log('../../../lib/jsons/'+ req.params.content_id +'.json');
      var content = require('../../../lib/jsons/contents/'+ req.params.content_id +'.json');
      res.json(JsonService.response(200, content));
        // ContentModel.find()
        //     .then((response) => {
        //         res.json(JsonService.response(200, {widgets : response}));
        //     });
    }
}

export default new ContentController();
