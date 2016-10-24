import { SectionModel } from "../models";

class SectionMock {

  constructor() {
  }

  createSection(slug, elementUrl, text, requiredAuth) {

    return SectionModel.create({
      slug: slug,
      sectionView: {
        text: text
      },
      elementUrl: elementUrl,
      segmentation: {
          requiredAuth: requiredAuth
      }
    });
  }
}

export default new SectionMock();
