import { Route } from '@angular/router';
import { Meteor } from 'meteor/meteor'

import { CabinetComponent } from './personal_info/personal_cabinet.component';
import { PostComponent } from './post/post.component';
import {ListPostComponent} from "./post/post-list.component";

export const routes: Route[] = [
    {path: 'personal_cabinet', component: CabinetComponent},
    {path: 'post', component: PostComponent},
    {path: '', component: ListPostComponent}
];