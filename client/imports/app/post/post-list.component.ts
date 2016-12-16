import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs/Subscription';
import template from './post-list.component.html'
import { PostCollection } from '../../../../both/collections/post.collection'
import {MeteorObservable} from "meteor-rxjs";
import {Observable} from "rxjs";
import {Post} from "../../../../both/models/post.model";

@Component({
    selector: 'post-list',
    template
})

export class ListPostComponent implements OnInit {
    postsSub: Subscription;
    listPosts: Observable<Post[]>;
    ngOnInit(){
        if(this.postsSub)
            this.postsSub.unsubscribe();

        this.postsSub = MeteorObservable.subscribe('posts').subscribe(() => {
            this.listPosts = PostCollection.find({}, {
                sort: {
                    createdAt: -1
                }
            }).zone();
        })
    }
}