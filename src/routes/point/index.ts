import {combineRoutes} from '@marblejs/core'

import {getPointList$} from './effects/getPointList.effect'
import {putPoint$} from './effects/putPoint.effect'

export const points$ = combineRoutes('/point', {
  effects: [getPointList$, putPoint$],
})
