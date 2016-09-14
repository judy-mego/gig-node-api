import { DbService } from './services';
import { WidgetModel } from './models';
import { WidgetMock } from './mocks';
import Q from 'q';
import faker from 'faker';


DbService.connect();

let promises = [];

let category = 'Events';

promises.push(
  //Layout Events
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType2(category),
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType2(category),
  WidgetMock.createWidgetType1(category)
)

category = 'Articles';

promises.push(
  //Layout Articles
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType2(category),
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType2(category),
  WidgetMock.createWidgetType1(category)
)

category = 'Videos';

promises.push(
  //Layout Videos
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType2(category),
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType1(category),
  WidgetMock.createWidgetType2(category),
  WidgetMock.createWidgetType1(category)
)

//////////
// DONE //
//////////
Q.all(promises)
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
