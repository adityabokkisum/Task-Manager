const express=require("express");
const app=express()
require("./db/mongoose")

const userRouter=require("./routers/users")
const taskRouter=require("./routers/tasks")

const PORT=process.env.PORT

app.use(express.json());
app.use(userRouter)
app.use(taskRouter)

app.listen(PORT,()=>{
    console.log("server is upon port "+PORT);
})















// const Task=require("./models/task");
// const User=require("./models/user");
// const main=async ()=>{
//     // const task=await Task.findById("6161809fd18555c7d4f80232");
//     // await task.populate("owner");
//     // console.log(task.owner);
//     // const user=await User.findById("616180224be784e0d086a205");
//     // await user.populate("tasks");
//     // console.log(user.tasks);
// }
// main();