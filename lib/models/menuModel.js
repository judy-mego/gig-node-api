import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    slug: {
        type: String
    },
    elements: {
        type : Array , "default" : []
    }
});

export default mongoose.model('menu', menuSchema);
