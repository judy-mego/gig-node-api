import express from 'express';
import { ApiController, WidgetController, ConfigController } from '../controllers';

export default function(app){

    const v1 = express.Router();


// ApiController
// =============================================================================
    v1.get('/', ApiController.index);

// WidgetController
// =============================================================================
    v1.get('/widgets', WidgetController.listAll);
    v1.get('/widgets/events', WidgetController.listEvents);
    v1.get('/widgets/articles', WidgetController.listArticle);
    v1.get('/widgets/videos', WidgetController.listVideos);

    // ConfigController
    // =============================================================================
    v1.get('/config', ConfigController.config);


// Base Setup
// =============================================================================
    app.use('/v1', v1);
    app.use('/', v1);
}
