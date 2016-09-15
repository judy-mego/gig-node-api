require('mongoose').set('debug',true)
import { DbService } from './services';
import { WidgetModel } from './models';
import { WidgetMock } from './mocks';
import Q from 'q';
import faker from 'faker';


DbService.connect();

var amp = function(){

  let promises = [];
  let categories = ['Events', 'Articles', 'Videos'];
  let positions = [1,2,1,1,1,2,1];
  let feeds = [1,2,3,4,5,6,7];

  var index = 0;
  categories.forEach(function(category){
    positions.forEach(function(position){
      promises.push(WidgetMock['createWidgetType'+position](category, feeds[index]));
      index++;
    })
  })

  return Q.all(promises)
}

//////////
// DONE //
//////////

Q(WidgetModel.remove({}).exec())
  .then(amp)
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
