import {httpListener} from '@marblejs/core'
import {bodyParser$} from '@marblejs/middleware-body'
import {logger$} from '@marblejs/middleware-logger'
import {points$} from '@routes/point'
import {users$} from '@routes/user'

import {location$} from './routes/location'

const middlewares = [logger$(), bodyParser$()]

const effects = [location$, points$, users$]

export const listener = httpListener({
  middlewares,
  effects,
})
