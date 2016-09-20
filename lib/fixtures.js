require('mongoose').set('debug',true)
import { DbService } from './services';
import { WidgetModel, ConfigModel } from './models';
import { WidgetMock } from './mocks';
import { ConfigMock } from './mocks';

import Q from 'q';
import faker from 'faker';


DbService.connect();


/*** Widgets ***/
var amp = function(){

  let promises = [];
  let categories = ['Events', 'Articles', 'Videos'];
  let positions = [1,2,1,1,1,2,1,1,2,1,1,1,2,1];
  let feeds = [1,2,3,4,5,6,7,1,2,3,4,5,6,7];

  var index = 0;

  categories.forEach(function(category){
    positions.forEach(function(position){
      promises.push(WidgetMock['createWidgetType'+position](category, feeds[index]));
      index++;
    });
    index = 0;
  });

  categories.push('All');
  promises.push(ConfigMock.createCategories(categories));

  return Q.all(promises);
};


/*** Categories ***/

var promiseConfig = new Promise((resolve, reject) => {
  ConfigModel.remove({}).exec()
  .then((response) => {
    resolve(response);
  })
})


/*** /Categories ***/


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
