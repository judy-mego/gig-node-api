import bodyParser from 'body-parser';

export default function(app){
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({extended:true, limit: '50mb'}));

    // app.use(function(req, res, next) {
    //   res.setHeader("Cache-Control", "max-age=31556926");
    //   return next();
    // });
}
