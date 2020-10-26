import {HttpStatus, r} from '@marblejs/core'
import {requestValidator$} from '@marblejs/middleware-io'
import {PointDao} from '@routes/point/model/point.dao'
import {UserDao} from '@routes/user/model/user.dao'
import {onError} from '@utils/error.util'
import {neverNullable} from '@utils/rxjs.util'
import {catchError, map, mergeMap} from 'rxjs/operators'

import {PromoDao} from '../model/promo.dao'
import {PromoValidator} from '../model/promo.validator'

// TODO NEED TO ADD RESTAURANT ID TO MODEL
export const postRedeem$ = r.pipe(
  r.matchPath('/redeem'),
  r.matchType('POST'),
  r.useEffect(req$ =>
    req$.pipe(
      requestValidator$({body: PromoValidator.redeem}),
      mergeMap(({body: {promoId, sub}}) =>
        PromoDao.findById(promoId).pipe(
          mergeMap(neverNullable),
          mergeMap(promo =>
            UserDao.findUserBySub(sub).pipe(
              mergeMap(neverNullable),
              mergeMap(({_id}) => PointDao.findAndUpdate(_id, promo.points)),
              map(points => ({body: points})),
            ),
          ),
        ),
      ),
      map(point => ({body: point})),
      catchError(onError('User does not exist', HttpStatus.NOT_FOUND)),
    ),
  ),
)
