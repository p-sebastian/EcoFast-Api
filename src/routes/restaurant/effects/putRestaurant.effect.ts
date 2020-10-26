import {r} from '@marblejs/core'
import {requestValidator$} from '@marblejs/middleware-io'
import {onError} from '@utils/error.util'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {RestaurantDao} from '../model/restaurant.dao'
import {RestaurantValidator} from '../model/restaurant.validator'

export const putRestaurant$ = r.pipe(
  r.matchPath('/'),
  r.matchType('PUT'),
  r.useEffect(req$ =>
    req$.pipe(
      requestValidator$({body: RestaurantValidator.create}),
      mergeMap(req => RestaurantDao.create(req.body)),
      map(restaurant => ({body: restaurant})),
      catchError(onError('Unknown')),
    ),
  ),
)
