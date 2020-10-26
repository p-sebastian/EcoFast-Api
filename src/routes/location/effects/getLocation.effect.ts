import {HttpStatus, r} from '@marblejs/core'
import {requestValidator$} from '@marblejs/middleware-io'
import {onError} from '@utils/error.util'
import {neverNullable} from '@utils/rxjs.util'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {LocationDao} from '../model/location.dao'
import {LocationValidator} from '../model/location.validator'

export const getLocationById$ = r.pipe(
  r.matchPath('/:id'),
  r.matchType('GET'),
  r.useEffect(req$ =>
    req$.pipe(
      requestValidator$({params: LocationValidator.findById}),
      mergeMap(req => LocationDao.findById(req.params.id)),
      mergeMap(neverNullable),
      map(location => ({body: location})),
      catchError(onError('User does not exist', HttpStatus.NOT_FOUND)),
    ),
  ),
)
