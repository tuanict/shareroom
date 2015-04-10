'use strict';

var room = require('../controllers/room');
/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Room, app, auth, database) {

  app.get('/room/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/room/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/room/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/room/example/render', function(req, res, next) {
    Room.render('index', {
      package: 'room'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });

  app.get('/shr/v1/rooms', room.list);

  app.get('/shr/v1/rooms/:roomId', room.detail);

  app.post('/shr/v1/rooms', room.create);

  app.delete('/shr/v1/rooms/:roomId', room.delete);

  app.put('/shr/v1/rooms/:roomId', room.update);
};
