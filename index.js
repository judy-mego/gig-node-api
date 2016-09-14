//Globals
global.__basedir = __dirname;
global.params = require('./package.json');

//Get ip
var ip = require("ip");

//Dependencies
import express from 'express';

//Libraries
import config from './lib/config';

//services
import { DbService } from './lib/services';

DbService.connect();

//apps
import api from './app/api';

const apiApp = express();
const apiPort = config.apps.api.port;


api.middlewares(apiApp);
api.routes(apiApp);
api.handlers(apiApp);


function getIpAddress() {
	var ipAddress = ip.address();
	return ipAddress;
}

apiApp.listen(apiPort, getIpAddress(),function(){
	console.log('>>> API http listening '+apiPort+' ' + getIpAddress());
});
