import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
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

export default mongoose.model('content', contentSchema);
