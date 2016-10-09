//here we create a collection to hold the pairs of original long urls and shorten urls (that we create)
// to prevent the default behaviour for saving data with Meteor, i.e, data been saved directly to the server without validation
// we need to run `meteor remove insecure`

import {Mongo} from 'meteor/mongo';
//small util to validation
import validUrl from 'valid-url';
import {check, Match} from 'meteor/check';

// by using methods we can add function to your callection

// we can access this anywhere on your app by aclling Meteor.call('links.insert');
Meteor.methods({
  'links.insert': function(url) {
    // check the url before saving it
    check(url, Match.Where(url => validUrl.isUri(url)));

    //We're ready to save the token for your url here
    // create a random number, here we are saving to the mongo DB
    const token = bMath.random(36).slice(-5);
    Links.insert({url, token, clicks: 0});
  }
});

const Links = new Mongo.Collection('links');

export {Links};
