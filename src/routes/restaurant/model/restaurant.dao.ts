import {from} from 'rxjs'

import {RestaurantModel} from './restaurant.model'
import {TRestaurantCreate} from './restaurant.validator'

export const RestaurantDao = Object.freeze({
  findAll: () => from(RestaurantModel.find().populate('promos').exec()),
  findById: (id: string) => from(RestaurantModel.findById(id).populate('promos').exec()),
  create: (restaurant: TRestaurantCreate) => from(new RestaurantModel(restaurant).save()),
})
