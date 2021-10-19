const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const {Url} = require('./DB/Models/history');

const {mongoose} = require('./db/mongoose');
const { Bookmark } = require('./DB/Models/bookmarks');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/allhistory',(req,res)=>{
    Url.find({}).then((urls)=>{
        res.send(urls);
    }).catch((e)=>{
        res.send(e);
    })
})

app.post('/addtohistory',(req,res)=>{
    console.log(req.body);
    let url = req.body.url;
    let timeDate = req.body.timeDate;
    let newUrl = new Url({
        url,timeDate
    });
    newUrl.save().then((urlDoc)=>{
        res.send(urlDoc);
    }
)})



app.delete('/deletehistory/:id',(req,res)=>{
    Url.findOneAndRemove({
        _id:req.params.id
    }).then((removedUrlDoc)=>{
        res.send(removedListDoc)
    })
})


app.get('/allbookmarks',(req,res)=>{
    Bookmark.find({}).then((bookmarks)=>{
        res.send(bookmarks);
    }).catch((e)=>{
        res.send(e);
    })
})

app.post('/addtobookmarks',(req,res)=>{
    let url = req.body.url;
    let newBookmark = new Bookmark({
        url
    });
    newBookmark.save().then((urlDoc)=>{
        res.send(urlDoc);
    }
)})

app.delete('/deletebookmark/:id',(req,res)=>{
    Url.findOneAndRemove({
        _id:req.params.id
    }).then((removedBookmarkDoc)=>{
        res.send(removedBookmarkDoc)
    })
})

app.listen(8000,()=>{
  console.log("server is listening on port 8000");  
})

