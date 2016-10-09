//here we create a collection to hold the pairs of original long urls and shorten urls (that we create)

import {Mongo} from 'meteor/mongo';

const Links = new Mong.Collection('links');

export {Links};
