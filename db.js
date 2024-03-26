const {MongoClient}=require("mongodb")

let dbConnection

module.exports = {
    connectToDb : (cb)=>{
        // MongoClient.connect('mongodb://localhost:27017/ecommerce')
        MongoClient.connect('mongodb+srv://Prashanth-vagalaboina:prashanth123@cluster0.ehqvifu.mongodb.net/ecommerce')
        .then((client)=>{
            dbConnection=client.db()
            return cb()
        })
        .catch(err=>{
            console.log("DB Connection Error", err);
            return cb(err)
        })
    },
    getDb: () => dbConnection
}
