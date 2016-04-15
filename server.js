var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser');

mongoose.connect('mongodb://localhost/blogroll');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  author: String,
  title: String,
  url: String
});

mongoose.model('Blog', BlogSchema);

var Blog = mongoose.model('Blog');

// var blog = new Blog({
//   author: 'Jeff',
//   title: 'Jeff\'s Blog',
//   url: 'http://jeffsblog.com'
// });

// blog.save();

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

// routes
app.get('/api/blogs', function (req, res){
  Blog.find(function(error, docs){
    docs.forEach(function(item){
      console.log('received a get request for _id: ' + item.id);
    });
    res.send(docs);
  });
});

app.post('/api/blogs', function(req, res){
  console.log('received a post request');
  for(var key in req.body){
    console.log(key + ': ' + req.body[key]);
  }
  var blog = new Blog(req.body);
  blog.save(function(err, doc){
    res.send(doc);
  });
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log('server on ' + port);
