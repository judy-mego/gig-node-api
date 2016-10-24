require('mongoose').set('debug',true);
import { DbService } from './services';
import { WidgetModel, ConfigModel, MenuModel, SectionModel, ElementsCacheModel } from './models';
import { WidgetMock, ConfigMock, MenuMock, SectionMock, ElementsMock } from './mocks';

import Q from 'q';
import faker from 'faker';

DbService.connect();

/*** Widgets ***/
var amp = function(){

  let promises = [];
  let sections = ['Home', 'Coke world', 'Getting points', 'Drinks ranking', 'Events'];
  let slugs = ['home', 'coke-world', 'getting-points', 'drinks-ranking', 'events'];

  let elementUrlSection = [ '/openContent/579a2ab2893ba7c1648b45d7',
                            '/webview/579a2ab2893ba7c1648b1111',
                             '/scan/579a2ab2893ba7c1648b2222',
                              '/article/579a2ab2893ba7c1648b3333',
                              '/deepLink/579a2ab2893ba7c1648b4444'];

  let types = ['openContent', 'webview', 'scan', 'article', 'deepLink'];
  let positions = [1,2,1,1,3,1,2,1,1,1,2,1,1,1,1,3,1,1];
  let feeds =     [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5];

  /*** Menus ***/
  var index = 0;
  sections.forEach(function(section){
    promises.push(SectionMock.createSection(slugs[index], elementUrlSection[index], section, "all"));
    index = index + 1;
  });



  /*** ElementCache ***/
index = 0;
elementUrlSection.forEach(function(elementUrl){
  promises.push(ElementsMock.createBasicElement(elementUrl, slugs[index], types[index], [], ""));
  index = index + 1;
});

  // sections.forEach(function(category){
  //   positions.forEach(function(position){
  //     promises.push(WidgetMock['createWidgetType'+position](category, feeds[index]));
  //     index++;
  //   });
  //   index = 0;
  // });

  // categories.push('All');
  // ConfigMock.createCategories(categories);

  return Q.all(promises);
};

/*** Categories ***/

var promiseConfig = new Promise((resolve, reject) => {
  ConfigModel.remove({}).exec()
  .then((response) => {
    resolve(response);
  });
});


/*** ElementsCache ***/

var promiseSections = new Promise((resolve, reject) => {
  ElementsCacheModel.remove({}).exec()
  .then((response) => {
    resolve(response);
  });
});

/*** Section ***/

var promiseSections = new Promise((resolve, reject) => {
  SectionModel.remove({}).exec()
  .then((response) => {
    resolve(response);
  });
});

//////////
// DONE //
//////////

Q(WidgetModel.remove({}).exec())
  .then(promiseConfig)
  .then(amp)
  .then()
  .then(function(){
  	console.log('All done');
  })
  .catch(function(err){
  	console.log(err);
  })
  .finally(function(){
  	DbService.disconnect();
  })
  .done();
