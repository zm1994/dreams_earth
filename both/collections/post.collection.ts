import { Post } from '../models/post.model'
import { MongoObservable } from 'meteor-rxjs';

export const PostCollection = new MongoObservable.Collection<Post>('posts');