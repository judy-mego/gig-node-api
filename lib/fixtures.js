import { DbService } from './services';
import { WidgetModel } from './models';
import Q from 'q';
import faker from 'faker';

DbService.connect();

let promises = [];


for (let i = 0; i < 10; i++) {

    promises.push(
    WidgetModel.create({
        column: faker.random.number(),
        row: faker.random.number(),
        image: faker.image.imageUrl(),
        thumbnail: faker.image.imageUrl()
    })
    )

}



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
