const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

















// const me=new User({
//     name:"  Anitha    ",
//     email:" SUNITHA@GMAIL.COM   ",
//     password:"    OLAAAACHICOOOOSSSS   "
// })

// me.save().then(()=>{
//     console.log(me);
//     }).catch((error)=>{
//     console.log(error);
//     })

//     const first=new task({
//         description:"complete clrs",
//         password:"justdoitjustdoit"
//     })
    
//     first.save().then(()=>{
//         console.log(first);
//     }).catch((error)=>{
//         console.log(error);
//     })