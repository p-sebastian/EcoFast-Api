import {HttpStatus, r} from '@marblejs/core'
import {requestValidator$} from '@marblejs/middleware-io'
import {onError} from '@utils/error.util'
import {neverNullable} from '@utils/rxjs.util'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {RestaurantDao} from '../model/restaurant.dao'
import {RestaurantValidator} from '../model/restaurant.validator'

export const getRestaurantById$ = r.pipe(
  r.matchPath('/:id'),
  r.matchType('GET'),
  r.useEffect(req$ =>
    req$.pipe(
      requestValidator$({params: RestaurantValidator.findById}),
      mergeMap(req => RestaurantDao.findById(req.params.id)),
      mergeMap(neverNullable),
      map(restaurant => ({body: restaurant})),
      catchError(onError('User does not exist', HttpStatus.NOT_FOUND)),
    ),
  ),
)
