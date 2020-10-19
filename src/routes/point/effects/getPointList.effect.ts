import {r} from '@marblejs/core'
import {map, mergeMap} from 'rxjs/operators'

import {PointDao} from '../model/point.dao'

export const getPointList$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ =>
    req$.pipe(
      mergeMap(PointDao.findAll),
      map(points => ({body: points})),
    ),
  ),
)
