import { CollectionObject } from './collection-object.model';
import { City } from './city.model'

export interface Country extends CollectionObject {
    name?: string;
    cities?: City[];
}