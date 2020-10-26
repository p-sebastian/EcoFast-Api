import {t} from '@marblejs/middleware-io'

export const PromoValidator = Object.freeze({
  create: t.type({
    points: t.number,
    name: t.string,
  }),
  redeem: t.type({
    promoId: t.string,
    sub: t.string,
  }),
})

export type TPromoCreate = t.TypeOf<typeof PromoValidator.create>
