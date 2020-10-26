import {t} from '@marblejs/middleware-io'

export const PointValidator = Object.freeze({
  create: t.type({
    amount: t.number,
    location: t.string,
    user: t.string,
  }),
  createRequest: t.type({
    amount: t.number,
    location: t.string,
    sub: t.string,
  }),
  pointsForUser: t.type({
    sub: t.string,
  }),
})

export type TPointCreate = t.TypeOf<typeof PointValidator.create>
export type TPointCreateRequest = t.TypeOf<typeof PointValidator.create>
