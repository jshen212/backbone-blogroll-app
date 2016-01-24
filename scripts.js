// Backbone Model

var Blog = Backbone.Model.extend({
  defaults: {
    author: '',
    title: '',
    url: ''
  }

});

// Backbone Collection
var Blogs = Backbone.Collection.extend({

});

// instantiate two Blogs
var blog1 = new Blog({
  author: 'Jeff',
  title: 'Jeff\'s Blog',
  url: 'http:#'
});

var blog2 = new Blog({
  author: 'John',
  title: 'John\'s blog',
  url: 'http:#'
});

// instantiate a Collection

var blogs = new Blogs([blog1,blog2]);
