import {combineRoutes} from '@marblejs/core'

import {getRestaurantById$} from './effects/getRestaurantById.effect'
import {getRestaurantList$} from './effects/getRestaurantList.effect'
import {putRestaurant$} from './effects/putRestaurant.effect'

export const restaurant$ = combineRoutes('/restaurant', {
  effects: [getRestaurantList$, putRestaurant$, getRestaurantById$],
})
