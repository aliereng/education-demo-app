const args = process.argv.splice(2)
const mongoose = require("mongoose");
const randomString = require("randomstring")

const User = require("../models/User")
const Category = require("../models/Category")
const Course = require("../models/Course")
const url = "mongodb+srv://username:password@cluster0.o1smq.mongodb.net/educationDB?retryWrites=true&w=majority";
const connectDb = async()=> {
    await mongoose.connect(url)
    .then(() => {
        console.log("veritabanı bağlantısı başarılı")
    })
    .catch((err) => {
        console.log("veritabanı bağlantısı başarısız " + err);

    });
}
const closeConnection = async()=> {
    mongoose.connection.close().then(()=> {
        console.log("işlem tamamlandı")
        return 0;
    })
}

const createUser = async ()=>{
    
    connectDb();

    // const users = [];
    for(let i = 0; i < 20; i++){
       if(i%2 ==0){
        await User.create({
            name: `test student user ${i+1}`,
            email: `teststudentuser${i+1}@mail.com`,
            password:"1234567890",
            role:"student"
        })
       }else{
        await User.create({
            name: `test teacher user ${i+1}`,
            email: `testteacheruser${i+1}@mail.com`,
            password:"1234567890",
            role:"teacher"
        })
       }
       
    }
    
    closeConnection();
}

const createCategory = async()=> {

    connectDb()
    for(let i = 0; i < 5; i++){
        await Category.create({
            name: `Category ${i+1}`,
        })        
     }
    mongoose.connection.close().then(()=> {
        console.log("kayıt tamamlandı")
        return 0;
    })
}

const createCourse = async()=> {
    connectDb();
    const users = await User.find({role:"teacher"});
    const categories = await Category.find();
    for( let i = 0; i < users.length; i++){
        for( let j = 0; j < 5; j++){
            for( let z = 0; z < 5; z++){
                const random = randomString.generate(7);
                await Course.create({
                    name: `Course ${random}`,
                    description: `Course ${random} description`,
                    category: categories[j]._id,
                    createdBy: users[i]._id,
                })
            }
        }
    }
    closeConnection()

}

const dropCollection = async(collectionName)=>{
    
    const conn = mongoose.createConnection(url);
    await conn.dropCollection(collectionName).then(()=> {
        console.log("collection is deleted");
        conn.close();
        return 0;
    }).catch(() => {
        console.log("collection is not deleted.");
        return 0;
    })
}



if(args.includes("create") && args.includes("user")){
    createUser();
}

if(args.includes("create") && args.includes("category")){
    createCategory();
}

if(args.includes("create") && args.includes("course")){
    createCourse();
}

if(args.includes("drop")){
    dropCollection(args[1].toString());
}