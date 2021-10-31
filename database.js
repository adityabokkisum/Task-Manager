// const mongodb=require('mongodb');
// const MongoClient=mongodb.MongoClient;

const{MongoClient,ObjectId, Db}=require('mongodb')
const databaseName='task-manager'



MongoClient.connect(process.env.URL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("Error Occured");
    }
   const db=client.db(databaseName);
})













// const id=new ObjectID()
// console.log(id);
// console.log(id.getTimestamp());


//CREATE

//    db.collection('users').insertOne({
//        name:"Adithya Bokkisum",
//        age:21
//    },(error,result)=>{
//        if(error){
//            return console.log("unable to insert user")
//        }
//        console.log(result.ops)
//    })
// db.collection("users").insertMany([
//     {
//         name:"Anitha",
//         age:53
//     },
//     {
//         name:"Gunther",
//         age:20
//     }
// ],(error,result)=>{
//     if(error){
//         return console.log("unable to insert documents");
//     }
//     console.log(result.ops)
// })
// db.collection("tasks").insertMany([
//     {
//         description:"Get Dream Offer",
//         completed:true
//     },
//     {
//         description:"Grand Master in Code Forces",
//         completed:false
//     },
//     {
//         description:"Get Super Dream offer",
//         completed:false
//     }
// ],(error,result)=>{
//     if(error){
//         return console.log("Data Not Inserted")
//     }
//     console.log(result.insertedCount)
// })

//READ

//    db.collection("users").findOne({_id:ObjectId("615186d55c71c1450ec4cf86")},(error,user)=>{
//     if(error){
//         return console.log("Unable to fetch");
//     }
//     console.log(user);
//    })
//    db.collection("users").find({age:21}).toArray((error,users)=>{
//     console.log(users);
//    })
//    db.collection("users").find({age:21}).count((error,users)=>{
//     console.log(users);
//    })

//UPDATE

// db.collection("users").updateOne({
//         _id:ObjectId("615185443a171965717f5d7f")
//     },{
//         $inc:{
//             age:1
//         }
//     }).then((resolve)=>{
//         console.log(resolve);
//     }).catch((error)=>{
//         console.log(error);
//     })

// db.collection("tasks").updateMany({
//  completed:false
// },{
//     $set:{
//         completed:true
//     }
// }).then((resolve)=>{
//     console.log(resolve);
// }).catch((error)=>{
//     console.log(error);
// })

//DELETE

// db.collection("users").deleteMany({
//     age:21
// }).then((resolve)=>{
// console.log(resolve)
// }).catch((error)=>{
// console.log(error);
// })

// db.collection("tasks").deleteOne({
//     description:"Get Dream Offer"
// }).then((resolve)=>{
// console.log(resolve);
// }).catch((error)=>{
// console.log(error);
// })