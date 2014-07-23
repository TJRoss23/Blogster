var Blog = Parse.Object.extend({

	className: "BlogPost",
  idAttribute: 'objectId',

  defaults: {
    name: '',
    description: '',
    author: '',
    tags:[],
    read: false
  }

});

var BlogCollection = Parse.Collection.extend ({
  model: Blog,
  // url: 'http://tiy-atl-fe-server.herokuapp.com/collections/TerryBlackJS'
});