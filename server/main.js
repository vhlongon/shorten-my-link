import { Meteor } from 'meteor/meteor';
import {Links} from '../imports/collections/links';
// this is the actual server component from Meteor
// we will use it to add a middleware to our app
import {WebApp} from 'meteor/webapp';

// Works like express native route
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('links', function() {
      return Links.find({});
  });
});

//executed whenever a user visitswith a route like: 'localhost: 3000/abcd'
// since this fires on each request we will get a params object from the router, thus req.params.token
function onRoute(req, res, next) {
  //take the token out of the url and try to find a matching link in the Links Collection
  // https://docs.meteor.com/api/collections.html#Mongo-Collection-update
  const link = Links.findOne({token: req.params.token });


  // if we find a link object, redirect the user to the long url
  if(link) {
    // here we increase the number of cliks by one using mongo modifiers ($inc -> increment)
    // this is the proper way to update data in meteor
    Links.update(link, {$inc: {clicks: 1}});
    // some black magic code to handle redirecting
    res.writeHead(307, {'Location': link.url});
    res.end();

  //if we don't find a link object, send the user to our normal React app
  } else {
    next();
  }



}
// we use this to match a pattern when typing a url on the browser
const middleware = ConnectRoute(function(router) {
  router.get('/:token', onRoute);
});


// This is run everytime our server runs/ a http request is made
WebApp.connectHandlers.use(middleware);
