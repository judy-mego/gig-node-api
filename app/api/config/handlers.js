import config from '../../../lib/config';
import { JsonService } from '../../../lib/services';

export default function(app){

	/**
	 * Route not found
	 */
	app.use(function(req,res,next){
		console.log('404',req.url);
		res.status(404).json(JsonService.errorResponse(404,'Route not found'));
	});

	/**
	 * Error catch
	 */
	app.use(function(err,req,res,next){

		//Error body
		var errorData;
		if (err instanceof Error){
			errorData = {
				name :err.name,
				message :err.message,
				stack :err.stack.split('\n')
			};
		}else{
			errorData = err;
		}

		//Server log
		console.log('-------- error ocurred -------------------');
		console.log(errorData);


		//Response
		var showErrors = config.debug;
		var errorResponse = JsonService.errorResponse(500, showErrors ? errorData : 'There was an error');

		try{
			res.json(errorResponse);
		}catch(e){
			console.log('Error not sent, headers already sent');
		}
		res.end();
	});
};
