'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Room = new Module('room');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Room.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Room.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Room.menus.add({
    title: 'room example page',
    link: 'room example page',
    // roles: ['authenticated'],
    menu: 'main'
  });
  
  Room.aggregateAsset('css', 'room.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Room.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Room.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Room.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Room;
});
