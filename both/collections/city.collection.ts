import { City } from '../models/city.model'
import { MongoObservable } from 'meteor-rxjs';

export const CityCollection = new MongoObservable.Collection<City>('cities');