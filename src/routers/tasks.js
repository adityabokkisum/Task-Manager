const express=require("express");
const task=require("../models/task");
const auth=require("../middleware/auth")

const router=new express.Router();

router.post('/tasks',auth,async(req,res)=>{
    
    try{
    // const tasks=new task(req.body);
    const tasks=new task({
        ...req.body,
        owner:req.user._id
    })
      await tasks.save();
      res.status(201).send(tasks)
    }
    catch(error){
    res.status(400).send(error)
    }
    // tasks.save().then(()=>{
    //     res.status(201).send(tasks)
    // }).catch((error)=>{
    //     res.status(400).send(error);
    // })
})

router.get("/tasks",auth,async(req,res)=>{
try{
//const tasks=await task.find({owner:req.user._id});
const match={}
const sort={}
if(req.query.completed){
    match.completed=req.query.completed ==="true"
}
if(req.query.sortBy){
    const parts=req.query.sortBy.split(":")
    sort[parts[0]]=parts[1]==="desc"?-1:1
}
//console.log(req.query.limit)
await req.user.populate({
path:"tasks",
match,
options:{
    limit:parseInt(req.query.limit),
    skip:parseInt(req.query.skip),
    sort
}
});
res.send(req.user.tasks);
}
catch(error){
console.log(error)
res.status(500).send();
}
    // task.find({}).then((tasks)=>{
    
    //     res.send(tasks);
    // }).catch((error)=>{
    //     res.status(500).send();
    // })
})

router.get("/tasks/:id",auth,async(req,res)=>{
    const _id=req.params.id
    try {
        //const taskss=await task.findById(_id);
        const taskss=await task.findOne({_id,owner:req.user._id});
        if(!taskss){
            return res.status(404).send();
        }
        res.send(taskss);
    } catch (error) {
        res.send(error)
    }
    // task.findById(_id).then((tasks)=>{
    //     if(!tasks){
    //         return res.status(404).send();
    //     }

    //     res.send(tasks);
    // }).catch((error)=>{
    //     res.status(500).send()
    // })
})


router.patch("/tasks/:id",auth,async(req,res)=>{
    const updates=Object.keys(req.body);
    const acceptedUpdates=["description","completed"];
    const isOk=updates.every((update)=>acceptedUpdates.includes(update));
    if(!isOk){
        return res.status(400).send({error:"Invalid Update!"});
    }
    try {
        const updatedTask=await task.findOne({_id:req.params.id,owner:req.user._id});
       // const updatedTask=await task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!updatedTask){
            return res.status(404).send();
        }
        updates.forEach((update)=>updatedTask[update]=req.body[update])
        await updatedTask.save();
        res.send(updatedTask);
    } catch (error) {
        res.status(500).send()
    }
})


router.delete("/tasks/:id",auth,async(req,res)=>{
    try {
        const deleteTask=await task.findOneAndDelete({_id:req.params.id,owner:req.user._id});
        if(!deleteTask){
           return res.status(404).send();
        }
        res.send(deleteTask)
    } catch (error) {
        res.status(500).send()
    }
})

module.exports=router