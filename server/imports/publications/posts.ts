import { Meteor } from 'meteor/meteor'
import {PostCollection} from "../../../both/collections/post.collection";

Meteor.publish('posts', function () {
    return PostCollection.find({}, {sort: {  createdAt: -1 }})
});
