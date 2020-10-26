import {combineRoutes} from '@marblejs/core'

import {getPromoList$} from './effects/getPromoList.effect'
import {postRedeem$} from './effects/postRedeem.effect'
import {putPromo$} from './effects/putPromo.effect'

export const promos$ = combineRoutes('/promo', {
  effects: [postRedeem$, putPromo$, getPromoList$],
})
