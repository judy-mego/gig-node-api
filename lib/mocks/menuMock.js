import { MenuModel } from "../models";

class MenuMock {

  constructor() {
  }

  createMenu(elements){

    return MenuModel.create({
      slug: "main-menu",
      elements: elements
    });
  }
}

export default new MenuMock();
