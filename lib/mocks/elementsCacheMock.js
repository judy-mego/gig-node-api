import { ElementsModel } from "../models";

class ElementsCacheMock {

  constructor() {
  }

  createElementWithPreview(id, slug, type, tags, contentUrl, previewImage, previewText, previewBehaviour) {

    return ElementsModel.create({
      [id]: {
        slug: slug,
        type: type,
        tags: tags,
        render: {
           contentUrl: contentUrl
         },
         preview: {
           imageUrl: previewImage,
           text: previewText,
           behaviour: previewBehaviour
         }
       }
    });
  }

  createBasicElement(id, slug, type, tags, contentUrl) {

    return ElementsModel.create({
      id: {
        slug: slug,
        type: type,
        tags: tags,
        render: {
             contentUrl: contentUrl
         }
       }
    });
  }
}

export default new ElementsCacheMock();
