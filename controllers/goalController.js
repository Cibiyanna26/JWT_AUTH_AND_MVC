const Goal = require('../models/goalModel');
const User = require('../models/userModel');

const getGoal = async (req,res)=>{
    const goals = await Goal.find({user:req.user.id});
    res.status(200).json(goals);
}

const setGoal = async (req,res)=>{
    
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add a text')
    }
    const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id,
    });

    res.status(200).json(goal);
}

const updateGoal =async (req,res)=>{
    console.log('in the put part');
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found");
    }
    const user = await User.findById(req.user.id);
    if(!user){
        return res.status(401).json({msg:"user not found"})
    }
    if(goal.user.toString()!== user.id){
        return res.status(401).json({msg:"user not found"})   
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).json(updateGoal);

    // Goal.findOneAndUpdate({text:goal.text},{text:req.body.text},{new:true}).then(
    //    goal=> res.status(200).json(goal)
    // )
   
}

const deleteGoal =async (req,res)=>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found");
    }
    Goal.findByIdAndDelete(req.params.id)
    .then(()=>res.status(200).json("goal deleted"))
}


module.exports = {
    getGoal,setGoal,updateGoal,deleteGoal
}
