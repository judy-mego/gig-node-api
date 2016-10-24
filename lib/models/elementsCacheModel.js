import mongoose from 'mongoose';

const elementSchema = new mongoose.Schema({
      slug: {
          type: String
      },
      type: {
          type: String
      },
      tags: {
          type : Array , "default" : []
      },
      render: {
           contentUrl: { type: String, trim: true}
       },
       preview: {
         imageUrl: { type: String, trim: true},
         text: { type: String, trim: true},
         behaviour: { type: String, trim: true}
       }
});

export default mongoose.model('elements', elementSchema);
