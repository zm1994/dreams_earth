import { Meteor } from 'meteor/meteor';

export interface User extends Meteor.User {
    info?: string; //info about user
    age?: number;
    count_posts?: number;
}