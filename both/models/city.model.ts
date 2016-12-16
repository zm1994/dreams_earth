import { CollectionObject } from './collection-object.model'

export interface City extends CollectionObject {
    name: string;
    lat?: number;
    lng?: number;
}