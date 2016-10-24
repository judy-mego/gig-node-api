import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
    slug: {
        type: String
    },
    elementUrl: {
        type: String
    },
    sectionView: {
      text: {type: String, required:true , trim: true}
    },
    segmentation: {
        requiredAuth: {type: String, required:true , trim: true}
    }
});

export default mongoose.model('section', sectionSchema);
