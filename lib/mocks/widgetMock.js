import { WidgetModel } from '../models';
import faker from 'faker';

class WidgetMock {

    constructor() {
    }

    createWidgetType1(category) {

      WidgetModel.create({
          column: 1,
          row: 1,
          image: faker.image.imageUrl(),
          thumbnail: faker.image.imageUrl(),
          tag: 'happy',
          category: category
      })
    }

    createWidgetType2(category) {

      WidgetModel.create({
          column: 2,
          row: 1,
          image: faker.image.imageUrl(),
          thumbnail: faker.image.imageUrl(),
          tag: 'happy',
          category: category
      })
    }

}

export default new WidgetMock();
