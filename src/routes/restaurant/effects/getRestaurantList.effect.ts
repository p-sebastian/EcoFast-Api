import {r} from '@marblejs/core'
import {map, mergeMap} from 'rxjs/operators'

import {RestaurantDao} from '../model/restaurant.dao'

export const getRestaurantList$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ =>
    req$.pipe(
      mergeMap(RestaurantDao.findAll),
      map(restaurants => ({body: restaurants})),
    ),
  ),
)
