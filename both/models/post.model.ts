import { CollectionObject } from './collection-object.model'
import {City} from "./city.model";

export interface Post extends CollectionObject {
   id_owner?: string;
   cities?: City[];
   header?: string;
   description?: string;
   cost?: string;
   createdAt?: Date;
}