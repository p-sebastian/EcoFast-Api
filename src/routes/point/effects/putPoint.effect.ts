import {r} from '@marblejs/core'
import {requestValidator$} from '@marblejs/middleware-io'
import {onError} from '@utils/error.util'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {PointDao} from '../model/point.dao'
import {PointValidator} from '../model/point.validator'

export const putPoint$ = r.pipe(
  r.matchPath('/'),
  r.matchType('PUT'),
  r.useEffect(req$ =>
    req$.pipe(
      requestValidator$({body: PointValidator.create}),
      mergeMap(req => PointDao.create(req.body)),
      map(point => ({body: point})),
      catchError(onError('Unknown')),
    ),
  ),
)
