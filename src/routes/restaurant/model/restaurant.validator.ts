import {t} from '@marblejs/middleware-io'

export const RestaurantValidator = Object.freeze({
  findById: t.type({
    id: t.string,
  }),
  create: t.type({
    promos: t.array(t.string),
    name: t.string,
  }),
})

export type TRestaurantCreate = t.TypeOf<typeof RestaurantValidator.create>
