require("../src/db/mongoose")
const User=require("../src/models/user")
// User.findByIdAndUpdate("6154812dac0daa0d0017307f",{age:1}).then((user)=>{
//     console.log(user);
//     return User.countDocuments({age:0})
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log(error)
// })

const updateChangeAndCount=async (id,age)=>{
    const update=await User.findByIdAndUpdate(id,{age});
    const count=await User.countDocuments({age});
    return count;
}

updateChangeAndCount("6157fd14efa01d6bf03bbb32",10).then((count)=>{
console.log(count);
}).catch((error)=>{
    console.log(error);
})