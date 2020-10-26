import {HttpError, HttpStatus, r} from '@marblejs/core'
import {requestValidator$} from '@marblejs/middleware-io'
import {UserDao} from '@routes/user/model/user.dao'
import {neverNullable} from '@utils/rxjs.util'
import {throwError} from 'rxjs'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {PointDao} from '../model/point.dao'
import {PointValidator} from '../model/point.validator'

export const getPointsForUser$ = r.pipe(
  r.matchPath('/:sub'),
  r.matchType('GET'),
  r.useEffect(req$ =>
    req$.pipe(
      requestValidator$({params: PointValidator.pointsForUser}),
      mergeMap(({params: {sub}}) =>
        UserDao.findUserBySub(sub).pipe(
          mergeMap(neverNullable),
          mergeMap(({_id}) => PointDao.pointsForUser(_id)),
          map(points => ({body: points})),
        ),
      ),
      catchError(() => throwError(new HttpError('User does not exist', HttpStatus.NOT_FOUND))),
    ),
  ),
)
