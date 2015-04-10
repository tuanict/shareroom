'use strict';

var todo = require('../controllers/todo');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Todo, app, auth, database) {

  app.get('/todo/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/todo/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/todo/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/todo/example/render', function(req, res, next) {
    Todo.render('index', {
      package: 'todo'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });

  app.get('/api/todos', todo.list);

  app.get('/api/todos/:todoid', todo.detail);

  app.post('/api/todos/', todo.create);

  app.delete('/api/todos/', todo.delete);


};
