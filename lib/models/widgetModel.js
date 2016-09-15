import mongoose from 'mongoose';

const widgetSchema = new mongoose.Schema({
    column: {
        type: Number
    },
    row: {
        type: Number
    },
    image: {
        type: String
    },
    thumbnail: {
        type: String
    },
    tags: {
         type : Array , "default" : []
    },
    category: {
        type: String
    }
});

export default mongoose.model('widget', widgetSchema);
