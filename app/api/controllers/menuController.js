import { JsonService } from '../../../lib/services';
import { MenuModel, SectionModel, ElementsModel } from '../../../lib/models';

class MenuController {

  constructor() {
  }

  menus(req, res) {
    var menus = require('../../../lib/jsons/menus.json');
    res.json(JsonService.response(200, menus));
  }
}

export default new MenuController();
