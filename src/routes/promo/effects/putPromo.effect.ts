import {r} from '@marblejs/core'
import {requestValidator$} from '@marblejs/middleware-io'
import {onError} from '@utils/error.util'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {PromoDao} from '../model/promo.dao'
import {PromoValidator} from '../model/promo.validator'

export const putPromo$ = r.pipe(
  r.matchPath('/'),
  r.matchType('PUT'),
  r.useEffect(req$ =>
    req$.pipe(
      requestValidator$({body: PromoValidator.create}),
      mergeMap(req => PromoDao.create(req.body)),
      map(promo => ({body: promo})),
      catchError(onError('Unknown')),
    ),
  ),
)
