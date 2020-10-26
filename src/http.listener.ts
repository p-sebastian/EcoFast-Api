import {httpListener} from '@marblejs/core'
import {bodyParser$} from '@marblejs/middleware-body'
import {logger$} from '@marblejs/middleware-logger'
import {points$} from '@routes/point'
import {promos$} from '@routes/promo'
import {restaurant$} from '@routes/restaurant'
import {users$} from '@routes/user'

import {location$} from './routes/location'

const middlewares = [logger$(), bodyParser$()]

const effects = [location$, points$, users$, promos$, restaurant$]

export const listener = httpListener({
  middlewares,
  effects,
})
