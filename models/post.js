const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    
    post: {
        type: String,
        default: ''
    },
    date:{
        type: Date,
        default: Date.now,
    }
},{ strictPopulate: false })


postSchema.virtual('id').get(function (){
    return this._id.toHexString()
});
postSchema.set('toJSON',{
    virtuals: true,
});


exports.Post = mongoose.model('Post',postSchema);
exports.postSchema = postSchema;
