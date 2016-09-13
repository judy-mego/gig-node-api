import mongoose from 'mongoose';
import config from '../config';

export default {
    connect: function() {
        mongoose.connect('mongodb://'+config.db.host+':'+config.db.port+'/'+config.db.name, {
    	    user: config.db.user,
    	    pass: config.db.pass
    	});

    	mongoose.connection
    	    .on('error', console.error.bind(console, 'mongodb connection error:') )
    	    .on('open', function (db) {
    	        console.log('mongodb connected');
    	    });

    	mongoose.set('debug', config.debug);
    },
    disconnect: function() {
        mongoose.disconnect();
    }
}
