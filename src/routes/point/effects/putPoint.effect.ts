import {HttpStatus, r} from '@marblejs/core'
import {requestValidator$} from '@marblejs/middleware-io'
import {UserDao} from '@routes/user/model/user.dao'
import {onError} from '@utils/error.util'
import {neverNullable} from '@utils/rxjs.util'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {PointDao} from '../model/point.dao'
import {PointValidator} from '../model/point.validator'

export const putPoint$ = r.pipe(
  r.matchPath('/'),
  r.matchType('PUT'),
  r.useEffect(req$ =>
    req$.pipe(
      requestValidator$({body: PointValidator.createRequest}),
      mergeMap(({body: {amount, location, sub}}) =>
        UserDao.findUserBySub(sub).pipe(
          mergeMap(neverNullable),
          mergeMap(user => PointDao.create({amount, location, user: user._id})),
        ),
      ),
      map(point => ({body: point})),
      catchError(onError('User does not exist', HttpStatus.NOT_FOUND)),
    ),
  ),
)
