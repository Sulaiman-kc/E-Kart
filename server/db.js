const mongoose = require('mongoose');

const db = "mongodb://sulaimankc:sulaimankc@cluster0-shard-00-00-9e1fm.mongodb.net:27017,cluster0-shard-00-01-9e1fm.mongodb.net:27017,cluster0-shard-00-02-9e1fm.mongodb.net:27017/user?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

// mongoose.Promise = global.Promise;

mongoose.connect(db, function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

module.exports = mongoose;