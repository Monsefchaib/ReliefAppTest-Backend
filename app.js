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

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

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

app.listen(process.env.PORT || 8000,()=>{
  console.log(`server is running ${process.env.PORT || 8000}`);  
})

