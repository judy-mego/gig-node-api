import { ConfigModel } from '../models';

class ConfigMock {

    constructor() {
    }

    createCategories(categories) {

      return ConfigModel.create({
          categories: categories
      });
    }

}

export default new ConfigMock();
