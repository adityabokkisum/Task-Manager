require("../src/db/mongoose")
const Task=require("../src/models/task")

// Task.findByIdAndDelete("61555ee9b395130e67c672c2").then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed:false})
// }).then((total)=>{
//     console.log(total);
// }).catch((error)=>{
//     console.log(error);
// })

const findAndDelete=async(id)=>{
    const deleteTask=await Task.findByIdAndDelete(id);
    const count=await Task.countDocuments({completed:false});
    return count;
}
findAndDelete("6157fc95efa01d6bf03bbb30").then((count)=>{
console.log(count);
}).catch((error)=>{
    console.log(error);
})