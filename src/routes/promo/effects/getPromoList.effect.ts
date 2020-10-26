import {r} from '@marblejs/core'
import {map, mergeMap} from 'rxjs/operators'

import {PromoDao} from '../model/promo.dao'

export const getPromoList$ = r.pipe(
  r.matchPath('/'),
  r.matchType('GET'),
  r.useEffect(req$ =>
    req$.pipe(
      mergeMap(PromoDao.findAll),
      map(promos => ({body: promos})),
    ),
  ),
)
