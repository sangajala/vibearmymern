const mongoose = require('mongoose');
//import shortid from 'shortid';

const { String, Boolean, Number } = mongoose.Schema.Types;
//const Shortid = shortid.generate;

const videoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    mediaurl:{type: String, required: true},
    videourl: {type: String, required: true},
    description: {type: String, required: true}
    //mediaUrl: {type: String, required: true},
   
   // externalLink: {type: Boolean, required: true},
   // paid: {type: Boolean, required: true},
    
    //rating: {type: Number, required: true},
   // userid: {type: String, required: true},
    
    //noOfViews: {type: Number, required: true},
    //status: {type: String, required: true},
   // creator: {type: String, required: true},
   // sku: {type: String, unique: true, default: Shortid}
})

//export default mongoose.models.Video || mongoose.model('Video',videoSchema)


module.exports = mongoose.models.Video || mongoose.model('Video',videoSchema);