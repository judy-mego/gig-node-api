import express from 'express';
import { ApiController, WidgetController } from '../controllers';

export default function(app){

    const v1 = express.Router();

    v1.get('/', ApiController.index);

    v1.get('/widget/list', WidgetController.list);

    app.use('/v1', v1);
    app.use('/', v1);

}
