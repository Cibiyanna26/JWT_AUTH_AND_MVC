const mongoose = require('mongoose');
const joi = require('joi');
const passwordcomplex = require('joi-password-complexity');

const goalSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user',
    },
    text:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('goal',goalSchema);

// userSchema.methods.generateAuthToken =function(){
 
//    const token = jwt.sign({_id:this.id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"7d"})
//    return token;
// }

