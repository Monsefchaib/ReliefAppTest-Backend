const mongoose = require('mongoose')

mongoose.Promise=global.Promise;
const connectionUrl = "mongodb+srv://admin:KeTGhvHAeQaNmqRx@cluster0.cxmx2.mongodb.net/youtubedb?retryWrites=true&w=majority"
mongoose.connect(connectionUrl, {useNewUrlParser: true}).then(()=>{
  console.log("Connected To MongoDB successfully");  
}).catch((e)=>{
    console.log('Connexion error');
    console.log(e);
});

// mongoose.set('useCreateIndex',true);
// mongoose.set('useFindAndModify',false);

module.exports = {
    mongoose
};



// 'mongodb://rootuser:rootpass@localhost:27017/Youtube?authSource=admin'