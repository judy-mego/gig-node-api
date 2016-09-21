import { WidgetModel } from '../models';
import faker from 'faker';

class WidgetMock {

    constructor() {
    }

    createWidgetType1(category, feed) {

      return WidgetModel.create({
          column: 1,
          row: 1,
          image: "https://s3-eu-west-1.amazonaws.com/stream-public-dev/woahTest/feed00"+feed+".png",
          thumbnail: "https://s3-eu-west-1.amazonaws.com/stream-public-dev/woahTest/thumbnail_feed00"+feed+".png",
          tags: ['happy'],
          category: category
      });
    }

    createWidgetType2(category, feed) {

      return WidgetModel.create({
          column: 2,
          row: 2,
          image: "https://s3-eu-west-1.amazonaws.com/stream-public-dev/woahTest/feed00"+feed+".png",
          thumbnail: "https://s3-eu-west-1.amazonaws.com/stream-public-dev/woahTest/thumbnail_feed00"+feed+".png",
          tags: ['love'],
          category: category
      });
    }

    createWidgetType3(category, feed) {

      return WidgetModel.create({
          column: 1,
          row: 1,
          image: "https://s3-eu-west-1.amazonaws.com/stream-public-dev/woahTest/49406_82617_giphy_400_292.gif",
          thumbnail: "https://s3-eu-west-1.amazonaws.com/stream-public-dev/woahTest/49406_82617_giphy_400_292.gif",
          tags: ['happy'],
          category: category
      });
    }
}

export default new WidgetMock();
