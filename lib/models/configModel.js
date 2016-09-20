import mongoose from 'mongoose';

const configSchema = new mongoose.Schema({
  categories: {
       type : Array , "default" : []
  },
});

export default mongoose.model('config', configSchema);
