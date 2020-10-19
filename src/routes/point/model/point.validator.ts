import {t} from '@marblejs/middleware-io'
import {optional} from '@utils/optional.util'

export const PointValidator = Object.freeze({
  create: t.type({
    amount: t.number,
    location: t.string,
    user: optional(t.string),
  }),
})

export type TPointCreate = t.TypeOf<typeof PointValidator.create>
