import express from 'express';
import { ApiController, ContentController, ConfigController, MenuController } from '../controllers';

export default function(app){

    const v1 = express.Router();


// ApiController
// =============================================================================
    v1.get('/', ApiController.index);

// ApiController
// =============================================================================
    v1.get('/menus', MenuController.menus);

// WidgetController
// =============================================================================
    v1.get('/content/:content_id', ContentController.contentId);
    // v1.get('/widgets/events', WidgetController.listEvents);
    // v1.get('/widgets/articles', WidgetController.listArticle);
    // v1.get('/widgets/videos', WidgetController.listVideos);

    // ConfigController
    // =============================================================================
    v1.get('/config', ConfigController.config);


// Base Setup
// =============================================================================
    app.use('/v1', v1);
    app.use('/', v1);
}
